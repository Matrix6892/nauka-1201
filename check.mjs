import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('app.js', import.meta.url), 'utf8');
const isolated = source.slice(0, source.indexOf('renderRoute();'));
const context = { window: {} };
vm.createContext(context);
vm.runInContext(`${isolated}; window.formatPhone = formatPhone;`, context);

const cases = new Map([
  ['89161234567', '+7 916 123-45-67'],
  ['79161234567', '+7 916 123-45-67'],
  ['+7 (916) 123-45-67', '+7 916 123-45-67'],
  ['9161234567', '+7 916 123-45-67'],
  ['8', '+7'],
  ['89', '+7 9'],
  ['', '']
]);

for (const [input, expected] of cases) {
  const actual = context.window.formatPhone(input);
  if (actual !== expected) throw new Error(`${input}: ${actual} !== ${expected}`);
}

for (const file of ['index.html', 'route.html', 'article-protein-glp1.html']) {
  const html = fs.readFileSync(new URL(file, import.meta.url), 'utf8');
  if (!html.includes('<html lang="ru">')) throw new Error(`${file}: язык страницы не указан`);
  if (/text-transform\s*:\s*uppercase/i.test(html)) throw new Error(`${file}: найден uppercase`);
  if (file !== 'article-protein-glp1.html') {
    if (!html.includes('data-contact-form')) throw new Error(`${file}: форма не найдена`);
    if (html.includes('required')) throw new Error(`${file}: найдено обязательное поле`);
  }
}

const indexHtml = fs.readFileSync(new URL('index.html', import.meta.url), 'utf8');
const articleHtml = fs.readFileSync(new URL('article-protein-glp1.html', import.meta.url), 'utf8');
const clientCopy = [
  indexHtml,
  fs.readFileSync(new URL('route.html', import.meta.url), 'utf8'),
  articleHtml,
  source.slice(0, source.indexOf('const $ ='))
].join('\n');

for (const forbidden of [
  /data-concept-form/i,
  /необязательн/i,
  /умн(?:ая|ое|ый)\s+пол/i,
  /форматир(?:уется|ование)/i,
  /Ctrl[-‑]?C/i,
  /readiness/i,
  /VERIFIED|INTERNAL CHECK|MEDICAL REVIEW|LEGAL REVIEW|UNCONFIRMED/,
  /восточноевроп|славян/i,
  /\bвладелец\b|\bконтур\b/i,
  /\bконцепт\b|\bпрототип\b/i
]) {
  if (forbidden.test(clientCopy)) throw new Error(`Клиентский слой содержит служебный текст: ${forbidden}`);
}

for (const serviceFirst of [
  /маршрут/i,
  /дата контроля/i,
  /пересмотр/i,
  /план\s*[—–:-]?\s*письменно/i,
  /лечение\s*[—–:-]?\s*решает врач/i,
  /решение\s*[·→-]\s*действие\s*[·→-]\s*ответ\s*[·→-]\s*дальше/i,
  /выберите задачу/i,
  /разобраться до при[её]ма/i
]) {
  if (serviceFirst.test(clientCopy)) throw new Error(`Клиентский слой продаёт внутренний процесс: ${serviceFirst}`);
}

for (const redundantPronoun of [
  /как к вам обращаться/i,
  /мы получили ваш запрос/i,
  /\bваш(?:и)? (?:вариант|ответ|варианты)\b/i,
  /\bваш(?:у)? (?:цель|риск|реальный резерв)\b/i,
  /\bдля вас\b|\bвашей истории\b/i
]) {
  if (redundantPronoun.test(clientCopy)) throw new Error(`Клиентский слой содержит избыточное местоимение: ${redundantPronoun}`);
}

for (const benefit of [
  /персональная медицина для долголетия/i,
  /лучший следующий шаг/i,
  /персональн(?:ый|ого) (?:план|чек)/i,
  /непрерывн(?:о|ое) сниж/i
]) {
  if (!benefit.test(clientCopy)) throw new Error(`В клиентском слое потеряна польза: ${benefit}`);
}

const knowledgeSection = indexHtml.match(/<section class="knowledge[\s\S]*?<\/section>/)?.[0];
if (!knowledgeSection) throw new Error('На главной нет секции практических разборов');
if (!knowledgeSection.includes('href="article-protein-glp1.html"')) throw new Error('Полный разбор не доступен с главной');
if (knowledgeSection.includes('#contact') || /route\.html\?route=/.test(knowledgeSection)) throw new Error('Разбор на главной ведёт в продажу до ответа');

if (/<script\b/i.test(articleHtml)) throw new Error('Основное содержание статьи зависит от JS');
if (!/Проверено 13 августа 2026|проверены 13 августа 2026/i.test(articleHtml)) throw new Error('У статьи нет даты актуальности');
if ((articleHtml.match(/href="https:\/\//g) || []).length < 3) throw new Error('У статьи недостаточно внешних доказательных источников');

const fullAnswerAt = articleHtml.indexOf('data-full-answer');
const sourcesAt = articleHtml.indexOf('class="article-sources"');
const personalCtaAt = articleHtml.indexOf('data-personal-cta');
if (fullAnswerAt < 0 || sourcesAt < fullAnswerAt || personalCtaAt < sourcesAt) throw new Error('Персональный CTA появился до полного ответа и источников');
const beforeFullAnswer = articleHtml.slice(0, fullAnswerAt);
if (/data-personal-cta|article-button|href="#contact"|route\.html\?route=/i.test(beforeFullAnswer)) throw new Error('До полного ответа найден CTA');

const routesMatch = source.match(/const routes = \{([\s\S]*?)\n\};/);
for (const key of ['glp1', 'cardio', 'longevity', 'male', 'female']) {
  if (!routesMatch?.[1].includes(`${key}: {`)) throw new Error(`Нет маршрута ${key}`);
}

if ((source.match(/<svg class="fact-icon/g) || []).length !== 5) throw new Error('Должно быть пять смысловых SVG-иконок');

for (const html of clientCopy.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/g)) {
  const heading = html[1].replace(/<[^>]+>/g, '').trim();
  if (/[.!?…]$/.test(heading)) throw new Error(`Точка в display-заголовке: ${heading}`);
}

const css = fs.readFileSync(new URL('styles.css', import.meta.url), 'utf8');
if (!css.includes('@media (prefers-reduced-motion:reduce)')) throw new Error('Нет reduced-motion режима');
if (/text-transform\s*:\s*uppercase/i.test(css)) throw new Error('Найден CSS uppercase');

console.log(`Проверено: ${cases.size} форматов телефона, 5 программ, формы, полный бесплатный разбор, порядок CTA, источники, доступность без JS, SVG-иконки, reduced motion и чистый клиентский слой.`);
