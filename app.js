const routes = {
  glp1: {
    title: 'Снизить вес, сохранить силу, удержать результат',
    kicker: 'Снижение веса · GLP‑1',
    deck: 'Снижение веса должно возвращать движение, а не забирать силы. Врач определит, подходит ли GLP‑1, а питание, мышцы и переносимость останутся в одной программе.',
    image: 'assets/hero-glp1.webp',
    signal: ['Главный результат', 'Вес ниже, свободы больше', 'Сила и питание в одной программе'],
    factsTitle: 'Что помогает снижать вес и сохранять результат',
    facts: [
      ['Ясно, подходит ли GLP‑1', 'Врач сопоставит цель, состояние и ограничения и выберет подходящий вариант снижения веса.', '28%'],
      ['Аппетит работает на вас', 'Питание перестраивается под меньший аппетит так, чтобы в порции оставалось место белку, клетчатке и нужной энергии.', '46%'],
      ['Вес уходит, сила остаётся в фокусе', 'Вес и талия оцениваются вместе с силой и повседневным движением, чтобы снижение веса расширяло возможности.', '64%'],
      ['Программа помещается в жизнь', 'Health‑лид помогает соединить лечение, еду и движение с рабочей неделей, поездками и привычным ритмом.', '82%'],
      ['Результат получает продолжение', 'Ответ организма показывает, что сохранить, что изменить и как удерживать достигнутое.', '100%']
    ],
    ladderTitle: 'Как снижение веса превращается в больше возможностей',
    ladder: [
      ['Что хочется вернуть', 'Лёгкость, движение, уверенность и здоровье'],
      ['Что влияет на результат', 'Вес, талия, питание, сила и медицинская история'],
      ['Подходящий способ', 'Решение врача и реалистичный темп изменений'],
      ['Что уже меняется', 'Цифры, самочувствие и возможности в обычном дне'],
      ['Как сохранить победу', 'Поддержать результат и открыть следующую цель']
    ],
    spire: 'Большинство GLP‑1‑программ останавливаются на назначении\nМы только начинаем',
    nextKicker: 'Практический разбор',
    nextTitle: 'Белок на GLP‑1: сколько нужно, когда аппетит стал меньше',
    nextCopy: 'Белок приходится уместить в меньшую порцию. Разбираем, сколько нужно и из каких продуктов его получить.',
    nextImage: 'assets/article-protein.webp',
    cta: 'Получить персональный план снижения веса',
    contactTitle: 'Получить персональный план снижения веса',
    contactCopy: 'Свяжитесь с нами, чтобы прояснить исходную точку и выбрать способ снижения веса, который получится встроить в обычную жизнь.'
  },
  cardio: {
    title: 'Опередить сердечно-сосудистый риск',
    kicker: 'Сердце · липиды',
    deck: 'Сердечно-сосудистый риск можно снижать год за годом, ещё до симптомов. Давление, показатели холестерина и семейная история складываются в личную картину и подходящее решение.',
    image: 'assets/hero-cardio.webp',
    signal: ['Главный результат', 'Риск ниже, активных лет больше', 'Холестерин + давление + история'],
    factsTitle: 'Что помогает непрерывно снижать сердечно-сосудистый риск',
    facts: [
      ['Личная картина риска', 'Становится видно, какие показатели действительно меняют личный риск и где скрыт самый большой резерв.', '24%'],
      ['Понятная цель', 'Врач определит, к каким показателям холестерина важно стремиться с учётом истории здоровья.', '43%'],
      ['Подходящий способ снижения', 'Питание, движение и современные лекарственные варианты сопоставляются по ожидаемой пользе в конкретной ситуации.', '62%'],
      ['Видимый ответ', 'Повторные анализы и домашнее давление показывают, насколько выбранный шаг меняет риск.', '81%'],
      ['Непрерывное снижение', 'Каждый ответ уточняет следующий шаг, чтобы риск продолжал снижаться, а не просто однажды был измерен.', '100%']
    ],
    ladderTitle: 'Как риск становится управляемым',
    ladder: [
      ['Из чего складывается риск', 'Анализы, давление, семейная история и образ жизни'],
      ['Где главный резерв', 'Показатель, который даст наибольшую пользу'],
      ['Как снизить риск', 'Способ, подходящий по риску и образу жизни'],
      ['Насколько он работает', 'Новые анализы, давление и самочувствие'],
      ['Как двигаться дальше', 'Поддержать снижение или усилить следующий шаг']
    ],
    spire: 'Риск меняется задолго до симптомов\nЗначит, действовать можно раньше',
    nextKicker: 'Практический разбор',
    nextTitle: 'Какие цифры действительно меняют лечение',
    nextCopy: 'Какие показатели показывают реальный резерв снижения риска и как врач связывает их с решением.',
    nextImage: 'assets/hero-cardio.webp',
    cta: 'Получить персональный кардио-чек-ап',
    contactTitle: 'Получить персональный кардио-чек-ап',
    contactCopy: 'Свяжитесь с нами, чтобы увидеть личную картину риска и выбрать шаг с наибольшей ожидаемой пользой.'
  },
  longevity: {
    title: 'Больше будущего, больше себя в нём',
    kicker: 'Longevity',
    deck: 'Вес, сердце, сон, движение, сила и гормональное здоровье показывают, где скрыт главный резерв. Персональный чек‑ап превращает широкий запрос на longevity в понятную точку старта.',
    image: 'assets/hero-longevity.webp',
    signal: ['Главный результат', 'Больше будущего в полной силе', 'Вес + сердце + сон + сила'],
    factsTitle: 'Начать с того, что вернёт больше возможностей',
    facts: [
      ['Что хочется сохранить', 'Путешествия, работа, спорт, близость, самостоятельность: выбираем то, ради чего здоровье должно работать.', '22%'],
      ['Где главный резерв', 'Вес, давление, липиды, сон, движение и сила показывают, какое изменение сильнее расширит возможности.', '41%'],
      ['Как увидеть движение', 'Стартовая точка и повторные измерения делают появившийся прогресс заметным и помогают его присвоить.', '60%'],
      ['Что несёт будущее', 'Сенесцентные клетки и другие новые подходы разбираются по механизму, данным и потенциалу, чтобы видеть передний край без модного шума.', '79%'],
      ['Точка старта', 'Персональная оценка соединяет цель с программой снижения веса, сердца, гормонального здоровья или отдельным исследовательским вопросом.', '100%']
    ],
    ladderTitle: 'Сначала то, что можно изменить сегодня',
    ladder: [
      ['Что важно сохранить', 'Что хочется дольше делать самому'],
      ['Личная картина', 'Вес, давление, липиды, сон, движение и сила'],
      ['Первая программа', 'Одно изменение с наибольшей ожидаемой пользой'],
      ['Видимый прогресс', 'Что уже стало лучше и какой резерв открылся'],
      ['Передний край', 'Новые направления, которые действительно заслуживают внимания']
    ],
    spire: 'Дольше жить полной жизнью\nНачать с того, что можно изменить сегодня',
    nextKicker: 'Новые медицинские подходы',
    nextTitle: 'Сенесцентные клетки и будущее обновления тканей',
    nextCopy: 'Как стареющие клетки меняют среду вокруг себя, что учёные уже умеют видеть и почему этот механизм важен для будущего longevity‑медицины.',
    nextImage: 'assets/article-frontier.webp',
    cta: 'Получить персональный план чек‑апа',
    contactTitle: 'Получить персональный план чек‑апа',
    contactCopy: 'Свяжитесь с нами, чтобы увидеть главный резерв для долголетия и выбрать лучший следующий шаг.'
  },
  male: {
    title: 'Снова на полной мощности',
    kicker: 'Мужское гормональное здоровье',
    deck: 'Энергия, ясность, выносливость и сексуальное желание могут вернуться на полную мощность. Врач сопоставит самочувствие с гормональными сигналами и покажет, где скрыт реальный резерв.',
    image: 'assets/hero-male.webp',
    signal: ['Главный результат', 'Больше энергии и ясности', 'Самочувствие + гормональные сигналы'],
    factsTitle: 'Что покажет оценка энергии и тестостерона',
    facts: [
      ['Надёжная исходная точка', 'Два утренних измерения в разные дни помогают увидеть устойчивый гормональный сигнал.', '26%'],
      ['Что хочется вернуть', 'Энергия, выносливость, ясность мышления, сексуальное желание и восстановление становятся конкретными целями разговора.', '45%'],
      ['Возможные причины', 'Врач учитывает сон, лекарства, другие состояния и репродуктивные планы. Каждый из них может менять выбор.', '64%'],
      ['Решение врача', 'После оценки врач определит следующий шаг: гормональная терапия, работа с другой причиной, дополнительная диагностика или наблюдение.', '83%'],
      ['Изменение, которое можно почувствовать', 'Самочувствие и анализы показывают, возвращается ли энергия и что поможет раскрыть следующий резерв.', '100%']
    ],
    ladderTitle: 'Как найти реальный резерв полной мощности',
    ladder: [
      ['Цель', 'Что хочется вернуть в жизнь'],
      ['Гормональные сигналы', 'Утренние результаты в разные дни'],
      ['Возможные причины', 'Сон, лекарства, здоровье и планы на детей'],
      ['Подходящий способ', 'Способ вернуть больше с учётом ситуации'],
      ['Ответ на лечение', 'Энергия, ясность, выносливость и анализы']
    ],
    spire: 'Энергия, ясность, выносливость\nСнова на полной мощности',
    nextKicker: 'Первый набор',
    nextTitle: 'Войти в первый набор',
    nextCopy: 'Расскажите, что хотите вернуть. Врач сопоставит самочувствие, гормональные сигналы и возможные причины.',
    nextImage: 'assets/hero-male.webp',
    cta: 'Получить персональный гормональный чек‑ап',
    contactTitle: 'Получить персональный гормональный чек‑ап',
    contactCopy: 'Свяжитесь с нами, чтобы понять, где скрыт реальный резерв энергии, ясности и выносливости.',
    submit: 'Связаться с нами'
  },
  female: {
    title: 'Снова собой, в полную силу',
    kicker: 'Женское гормональное здоровье',
    deck: 'Сон, энергия, ясность, настроение и близость могут вернуться. Врач соединит изменения в одну картину и подберёт способ снова почувствовать полную силу.',
    image: 'assets/hero-female.webp',
    signal: ['Главный результат', 'Снова собой, в полной силе', 'Сон + энергия + самочувствие'],
    factsTitle: 'Что помогает снова чувствовать себя собой',
    facts: [
      ['Что изменилось', 'Оценка охватывает сон, энергию, настроение, температуру тела и близость и показывает, что сильнее всего мешает жить.', '24%'],
      ['Что влияет на выбор', 'Врач сопоставляет симптомы с историей, рисками, лекарствами и приоритетами; анализы нужны не всегда.', '43%'],
      ['Варианты лечения', 'В зависимости от ситуации это может быть системная или локальная гормональная терапия, негормональный вариант или наблюдение.', '62%'],
      ['Подходящий способ', 'Варианты складываются в один выбор с учётом истории здоровья, приоритетов и образа жизни.', '81%'],
      ['Возвращение к себе', 'Сон, энергия, настроение и близость показывают, насколько выбранный способ возвращает полноту жизни.', '100%']
    ],
    ladderTitle: 'От первых изменений до подходящего пути',
    ladder: [
      ['Что изменилось', 'Сон, энергия, настроение, температура или близость'],
      ['История здоровья', 'Здоровье, риски, лекарства и приоритеты'],
      ['Подходящий вариант', 'Один из нескольких медицинских путей'],
      ['Начало изменений', 'Что поможет почувствовать разницу в обычной жизни'],
      ['Ответ на лечение', 'Что возвращается и какой резерв открывается дальше']
    ],
    spire: 'Сон, энергия, ясность, близость\nСнова собой, в полную силу',
    nextKicker: 'Первый набор',
    nextTitle: 'Войти в первый набор',
    nextCopy: 'Расскажите, что хочется вернуть. Врач соединит изменения, историю и приоритеты в одну личную картину.',
    nextImage: 'assets/hero-female.webp',
    cta: 'Получить персональный гормональный чек‑ап',
    contactTitle: 'Получить персональный гормональный чек‑ап',
    contactCopy: 'Свяжитесь с нами, чтобы понять, что поможет вернуть сон, энергию, ясность и близость.',
    submit: 'Связаться с нами'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setText(selector, value) {
  const node = $(selector);
  if (node && value) node.textContent = value;
}

function setSpire(value) {
  const node = $('[data-route-spire]');
  if (!node || !value) return;
  const [lead, accent] = value.split('\n');
  node.replaceChildren(document.createTextNode(lead));
  if (!accent) return;
  node.append(document.createElement('br'));
  const span = document.createElement('span');
  span.textContent = accent;
  node.append(span);
}

function factIcon(index) {
  const icons = [
    `<svg class="fact-icon fact-icon-join" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-line icon-motion icon-drift-a" d="M7 15h15l13 17h22"/><path class="icon-line icon-motion icon-drift-b" d="M7 49h15l13-17"/>
      <circle class="icon-dot" cx="35" cy="32" r="3"/>
    </svg>`,
    `<svg class="fact-icon fact-icon-plan" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-line" d="M15 7h27l8 8v42H15zM42 7v9h8M23 26h19M23 36h19M23 46h12"/>
      <path class="icon-accent icon-motion icon-progress" d="M20 26h24M20 36h24M20 46h17"/>
    </svg>`,
    `<svg class="fact-icon fact-icon-measure" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-line" d="M8 52h48M13 47V13M18 40l11-10 9 5 15-18"/>
      <path class="icon-accent icon-motion icon-pointer" d="M35 35l8-7"/><circle class="icon-dot icon-motion icon-measure-dot" cx="43" cy="28" r="3"/>
    </svg>`,
    `<svg class="fact-icon fact-icon-care" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-line" d="M12 18l20 14 20-14M12 46l20-14 20 14"/>
      <circle class="icon-node icon-motion icon-node-a" cx="12" cy="18" r="5"/><circle class="icon-node icon-motion icon-node-b" cx="12" cy="46" r="5"/>
      <circle class="icon-dot" cx="32" cy="32" r="4"/><circle class="icon-node icon-motion icon-node-c" cx="52" cy="18" r="5"/><circle class="icon-node icon-motion icon-node-d" cx="52" cy="46" r="5"/>
    </svg>`,
    `<svg class="fact-icon fact-icon-next" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-line" d="M12 13h40v39H12zM12 23h40M21 8v10M43 8v10"/>
      <circle class="icon-dot" cx="24" cy="35" r="3"/><path class="icon-accent icon-motion icon-arrow" d="M31 43h17m-7-7 7 7-7 7"/>
    </svg>`
  ];
  return icons[index] || icons[0];
}

function renderRoute() {
  const root = $('[data-route-root]');
  if (!root) return;
  const key = new URLSearchParams(location.search).get('route') || 'glp1';
  const route = routes[key] || routes.glp1;
  document.title = `${route.title} | 1201 от Науки`;
  document.body.dataset.route = routes[key] ? key : 'glp1';
  setText('[data-route-kicker]', route.kicker);
  setText('[data-route-title]', route.title);
  setText('[data-route-deck]', route.deck);
  setText('[data-facts-title]', route.factsTitle);
  setText('[data-ladder-title]', route.ladderTitle);
  setSpire(route.spire);
  setText('[data-next-kicker]', route.nextKicker);
  setText('[data-next-title]', route.nextTitle);
  setText('[data-next-copy]', route.nextCopy);
  setText('[data-contact-title]', route.contactTitle);
  setText('[data-contact-copy]', route.contactCopy);
  const routeCta = $('[data-route-cta]');
  routeCta.replaceChildren(document.createTextNode(route.cta || 'Выбрать лучший следующий шаг'));
  const routeCtaArrow = document.createElement('span');
  routeCtaArrow.setAttribute('aria-hidden', 'true');
  routeCtaArrow.textContent = '↗';
  routeCta.append(' ', routeCtaArrow);
  setText('[data-submit-label]', route.submit || 'Связаться с нами');

  const heroImage = $('[data-route-image]');
  heroImage.src = route.image;
  heroImage.alt = '';
  const nextImage = $('[data-next-image]');
  nextImage.src = route.nextImage;
  nextImage.alt = '';
  $('[data-route-input]').value = key;

  const signal = $('[data-route-signal]');
  const signalSpans = $$('span', signal);
  signalSpans[0].textContent = route.signal[0];
  $('[data-route-signal-main]', signal).textContent = route.signal[1];
  signalSpans[1].textContent = route.signal[2];

  $('[data-route-facts]').innerHTML = route.facts.map((fact, index) => `
    <article class="fact-card reveal" style="--progress:${fact[2]}">
      <div class="fact-meta"><span class="mono">0${index + 1}</span>${factIcon(index)}</div>
      <h3>${fact[0]}</h3>
      <p>${fact[1]}</p>
    </article>`).join('');

  $('[data-route-ladder]').innerHTML = route.ladder.map((step, index) => `
    <li class="ladder-step reveal">
      <span class="mono">0${index + 1}</span>
      <strong>${step[0]}</strong>
      <p>${step[1]}</p>
    </li>`).join('');
}

function formatPhone(value) {
  let digits = String(value || '').replace(/\D/g, '');
  if (digits[0] === '8') digits = `7${digits.slice(1)}`;
  else if (digits.length === 10) digits = `7${digits}`;
  else if (digits.length && digits[0] !== '7') digits = `7${digits}`;
  digits = digits.slice(0, 11);
  if (!digits) return '';
  const rest = digits.slice(1);
  let result = '+7';
  if (rest.length) result += ` ${rest.slice(0, 3)}`;
  if (rest.length > 3) result += ` ${rest.slice(3, 6)}`;
  if (rest.length > 6) result += `-${rest.slice(6, 8)}`;
  if (rest.length > 8) result += `-${rest.slice(8, 10)}`;
  return result;
}

function initForms() {
  $$('[data-phone]').forEach(input => {
    input.addEventListener('input', () => {
      const formatted = formatPhone(input.value);
      input.value = formatted;
      input.setSelectionRange(formatted.length, formatted.length);
    });
    input.addEventListener('paste', event => {
      event.preventDefault();
      input.value = formatPhone(event.clipboardData.getData('text'));
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    input.addEventListener('copy', event => {
      event.preventDefault();
      event.clipboardData.setData('text/plain', formatPhone(input.value));
    });
  });

  $$('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const success = $('.form-success', form);
      success.hidden = false;
      success.focus?.();
    });
  });
}

function initNavigation() {
  const header = $('[data-header]');
  const button = $('[data-menu-button]');
  const menu = $('[data-menu]');
  let previousFocus;
  const updateHeader = () => header?.classList.toggle('is-scrolled', scrollY > 20);
  updateHeader();
  addEventListener('scroll', updateHeader, { passive: true });
  if (!button || !menu) return;
  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    previousFocus?.focus();
  };
  menu.setAttribute('aria-hidden', 'true');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    previousFocus = document.activeElement;
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('a', menu)?.focus();
  });
  $$('a', menu).forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
}

function initReveals() {
  const nodes = $$('.reveal');
  $$('.hero .reveal, .route-hero .reveal').forEach(node => node.classList.add('is-visible'));
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  nodes.filter(node => !node.closest('.hero, .route-hero')).forEach(node => observer.observe(node));
}

function initPointerScenes() {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  $$('[data-pointer-scene]').forEach(scene => {
    const layer = $('[data-pointer-layer]', scene);
    scene.addEventListener('pointermove', event => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      layer.style.transform = `translate3d(${x * -10}px,${y * -7}px,0) scale(1.015)`;
    });
    scene.addEventListener('pointerleave', () => { layer.style.transform = ''; });
  });
}

renderRoute();
initNavigation();
initForms();
initReveals();
initPointerScenes();

window.__phoneFormat = formatPhone;
