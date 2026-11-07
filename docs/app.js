import { site } from './config.js';

const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const book = (label = 'Записаться на обслуживание', service = 'Обслуживание', extra = '') => `<button class="button button-yellow ${extra}" data-book="${service}">${label}${arrow}</button>`;
const main = document.querySelector('main');
const isOffer = /^\/to-4000\/?$/.test(location.pathname.slice(11));
const smallLabel = (text) => `<span class="eyebrow"><span class="status-dot"></span>${text}</span>`;

function offerBlock() {
  return `<section class="offer-section wrap" id="maintenance"><div class="offer-panel reveal"><div class="offer-copy"><span class="eyebrow dark">БОЛЬШЕ ЗАБОТЫ. МЕНЬШЕ ЛИШНЕГО.</span><h2>Хорошая привычка — <br>вовремя проходить ТО.</h2><p>Моторное масло + масляный фильтр + работа. <br>Всё необходимое — в одном предложении.</p><a class="button button-black" href="/up-service/to-4000">Подробнее о предложении ${arrow}</a><p class="offer-fine">Применимость и условия уточняются при записи.</p></div><div class="offer-price"><span class="price-label">ПОЛНОЕ ТО</span><div class="price-number">4 000<span>₽</span></div><span class="price-includes">МАСЛО / ФИЛЬТР / РАБОТА</span></div><span class="offer-slash" aria-hidden="true"></span></div></section>`;
}

function contacts() {
  return `<section class="contacts wrap" id="contacts"><div class="contact-intro reveal">${smallLabel('ДАВАЙТЕ ПОЗНАКОМИМСЯ')}<h2>Следующая остановка — <br><span class="yellow">UP Service.</span></h2><p>Расскажите, что беспокоит ваш автомобиль. <br>С остальным поможем разобраться.</p>${book()}</div><div class="contact-details reveal"><div class="demo-tag">Демо-контакты</div><div class="contact-row"><span>ГДЕ МЫ</span><p>${site.city} <br>${site.address}</p></div><div class="contact-row"><span>КОГДА ЗАЕХАТЬ</span><p>${site.hours}<small>Пример графика · по предварительной записи</small></p></div><div class="contact-row"><span>НА СВЯЗИ</span><p class="contact-phone">${site.phone}<small>Телефон будет добавлен перед запуском</small></p></div><p class="contact-disclaimer">Адрес и график приведены для примера. Перед поездкой дождитесь подтверждения реальных контактов.</p></div></section>`;
}

function home() {
  return `<section class="hero"><div class="hero-image" aria-hidden="true"><img src="/up-service/assets/hero.webp" alt="" width="1536" height="1024" fetchpriority="high"></div><div class="hero-shade"></div><div class="hero-content wrap"><div class="hero-eyebrow">${smallLabel('АВТОСЕРВИС UP SERVICE')}<span class="hero-location">${site.city} <span class="tiny-dot"></span> Демо</span></div><h1><span class="hero-line">Обслуживание</span><span class="hero-line">автомобилей</span><span class="hero-line subdued">с вниманием</span><span class="hero-line yellow">к каждой детали.</span></h1><p class="hero-description">Профессиональное ТО, диагностика и ремонт.  <br>Прозрачные цены. Качественные расходные материалы.  <br>Ответственный подход к вашему автомобилю.</p><div class="hero-buttons">${book()}<a href="#services" class="button button-ghost">Наши услуги <span aria-hidden="true">↓</span></a></div></div><a class="hero-offer" href="/up-service/to-4000"><span class="hero-offer-label">ВАШЕ СЛЕДУЮЩЕЕ ТО</span><span class="hero-offer-price">4 000 <small>₽</small></span><span class="hero-offer-bottom">Масло + фильтр + работа ${arrow}</span></a><div class="hero-bottom wrap"><div><span class="adv-dot"></span>Прозрачная стоимость</div><div><span class="adv-dot"></span>Профессиональное оборудование</div><div><span class="adv-dot"></span>Согласование работ до ремонта</div><a href="#maintenance" class="scroll-link" aria-label="Перейти к предложению ТО">ЛИСТАЙТЕ НИЖЕ <span aria-hidden="true">↓</span></a></div></section>
  ${offerBlock()}
  <section class="services wrap" id="services"><div class="section-heading reveal"><div>${smallLabel('ЧТО МЫ ДЕЛАЕМ')}<h2>Ваш автомобиль. <br><span class="muted">Под нашим вниманием.</span></h2></div><p>От планового обслуживания <br>до решения сложных задач. <br>Начинаем с того, что действительно нужно.</p></div><div class="services-layout"><div class="services-list reveal">${site.services.map((s,i)=>`<article class="service-item ${i===0?'active':''}"><h3><button class="service-toggle" aria-expanded="${i===0}" aria-controls="service-${s.id}" id="service-trigger-${s.id}"><span class="service-name"><span class="service-icon" aria-hidden="true"><i class="hgi hgi-stroke ${s.icon}"></i></span><span>${s.title}</span></span><span class="service-symbol" aria-hidden="true">${i===0?'−':'+'}</span></button></h3><div class="service-body" id="service-${s.id}" role="region" aria-labelledby="service-trigger-${s.id}" ${i===0?'':'hidden'}><img class="service-mobile-image" src="${s.image}" alt="${s.imageAlt}" width="1200" height="800" loading="lazy" decoding="async"><p>${s.description}</p><div class="service-actions"><span class="service-price">${s.price}</span><button class="text-link" data-book="${s.title}">Записаться ${arrow}</button></div></div></article>`).join('')}</div><aside class="service-visual reveal" aria-label="Изображение выбранной услуги"><img id="service-image" src="${site.services[0].image}" alt="${site.services[0].imageAlt}" width="1200" height="800" loading="lazy" decoding="async"></aside></div></section>
  <section class="approach wrap" id="approach"><div class="approach-heading reveal">${smallLabel('НАШ ПОДХОД')}<h2>Доверие начинается <br><span class="muted">с понятных вещей.</span></h2><p>Вам не нужно разбираться во всём. <br>Вам нужно понимать, что происходит с вашим автомобилем.</p></div><div class="principles"><article class="principle reveal"><span class="principle-mark" aria-hidden="true">↗</span><h3>Сначала согласуем. <br>Потом приступаем.</h3><p>Обсуждаем состав и стоимость работ до начала ремонта. Решение всегда остаётся за вами.</p></article><article class="principle reveal"><span class="principle-mark" aria-hidden="true">↗</span><h3>Объясняем. <br>Понятным языком.</h3><p>Рассказываем, что требует внимания сейчас и какие работы можно запланировать на будущее.</p></article><article class="principle reveal"><span class="principle-mark" aria-hidden="true">↗</span><h3>Детали имеют <br>значение.</h3><p>Используем профессиональное оборудование и уделяем внимание подбору расходных материалов.</p></article></div></section>
  <section class="statement"><div class="statement-bg" aria-hidden="true"></div><div class="wrap statement-content reveal"><span class="eyebrow">UP SERVICE / ФИЛОСОФИЯ ЗАБОТЫ</span><p>Чтобы вы думали <br>о <span class="yellow">дороге.</span> <br>Об автомобиле <br>подумаем мы.</p><span class="statement-foot">ОТ ПЕРВОГО ЗВОНКА ДО СЛЕДУЮЩЕГО ТО.</span></div></section>
  <section class="process wrap"><div class="section-heading reveal"><div>${smallLabel('ПРОСТОЙ ПУТЬ К ИСПРАВНОМУ АВТО')}<h2>Без сложных <br><span class="muted">маршрутов.</span></h2></div>${book('Начнём с записи')}</div><ol class="steps"><li class="reveal"><span class="step-number">01 <span>↗</span></span><h3>Оставьте номер</h3><p>Заполните короткую форму. <br>Дальше свяжемся сами.</p></li><li class="reveal"><span class="step-number">02 <span>↗</span></span><h3>Обсудим задачу</h3><p>Уточним автомобиль, что беспокоит <br>и когда удобно приехать.</p></li><li class="reveal"><span class="step-number">03 <span>↗</span></span><h3>Согласуем работы</h3><p>Определим объём и стоимость. <br>Всё понятно ещё до начала.</p></li><li class="reveal"><span class="step-number">04 <span>↗</span></span><h3>Позаботимся об авто</h3><p>Выполним обслуживание <br>и объясним результат.</p></li></ol></section>
  ${contacts()}`;
}

function offerPage() {
  document.title='ТО за 4 000 ₽ — UP Service';
  document.querySelector('meta[name="description"]').content='Моторное масло, масляный фильтр и работа за 4 000 ₽. Состав предложения и запись на ТО в UP Service.';
  return `<section class="offer-hero wrap"><a href="/up-service/" class="back-link">← На главную</a><div class="offer-page-grid"><div class="offer-page-copy">${smallLabel('СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ')}<h1>Новый ресурс. <br><span class="muted">Для новых дорог.</span></h1><p>Плановое обслуживание без лишних сложностей. <br>Моторное масло, масляный фильтр и работа — <br>в одном предложении.</p>${book('Записаться на ТО','ТО за 4 000 ₽')}<span class="offer-page-note">Применимость предложения уточняем при записи.</span></div><div class="offer-page-price"><span>ПОЛНОЕ ТО</span><strong>4 000<small>₽</small></strong><span>МАСЛО + ФИЛЬТР + РАБОТА</span><div class="offer-price-line"></div><p>Забота о вашем автомобиле. <br>С вниманием к каждой детали.</p></div></div></section><section class="included wrap"><div class="section-heading reveal"><div>${smallLabel('ЧТО ВХОДИТ')}<h2>Три составляющих. <br><span class="muted">Один понятный состав.</span></h2></div></div><div class="included-grid"><article class="reveal"><span>01 / МАТЕРИАЛЫ</span><h3>Моторное  <br>масло</h3><p>Марку, допуск и объём подбираем под автомобиль и подтверждаем при записи.</p></article><article class="reveal"><span>02 / КОМПЛЕКТУЮЩИЕ</span><h3>Масляный  <br>фильтр</h3><p>Уточняем подходящий фильтр и его применимость к вашему двигателю.</p></article><article class="reveal"><span>03 / ОБСЛУЖИВАНИЕ</span><h3>Работа  <br>по замене</h3><p>Замена моторного масла и масляного фильтра в рамках согласованного обслуживания.</p></article></div></section><section class="conditions wrap"><div class="conditions-box reveal"><span class="eyebrow">ПРОЗРАЧНЫЕ УСЛОВИЯ</span><h2>Сначала уточним детали.</h2><p>Предложение «Полное ТО — 4 000 ₽» включает моторное масло, масляный фильтр и работу по их замене. Другие регламентные работы в этот состав не входят.</p><p>Список подходящих автомобилей, марка и объём масла, ограничения и возможные доплаты пока не утверждены. При записи необходимо подтвердить применимость предложения к вашему автомобилю и итоговую стоимость до начала работ.</p><p>Дополнительные работы выполняются только после согласования. Визуальный осмотр и проверка жидкостей не заявлены как часть предложения.</p><span class="demo-tag">Условия демонстрационной версии</span></div></section><section class="faq wrap"><div class="section-heading reveal"><div>${smallLabel('ЧАСТЫЕ ВОПРОСЫ')}<h2>Всё, что стоит <br><span class="muted">уточнить заранее.</span></h2></div></div><div class="faq-list">${[
    ['Подойдёт ли предложение моему автомобилю?','Уточним марку, модель, год выпуска и двигатель. Затем подтвердим подходящие расходные материалы и применимость предложения.'],
    ['Какие расходные материалы используются?','Конкретные марка масла, допуск, объём и артикул фильтра подтверждаются при записи. Эти параметры пока не указаны в условиях предложения.'],
    ['Что, если понадобятся дополнительные работы?','Сначала объясним, что обнаружено, и согласуем стоимость. Дополнительные работы не начинаем без вашего решения.'],
    ['Как записаться на обслуживание?','Нажмите «Записаться на ТО» и оставьте номер телефона. В демонстрационной версии отправка отключена; приём заявок подключается перед запуском.']
  ].map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></section>${contacts()}`;
}

main.innerHTML = isOffer ? offerPage() : home();
document.querySelector('#year').textContent=new Date().getFullYear();

// One shared booking flow for both routes and every service.
const booking=document.querySelector('#booking-dialog');
const info=document.querySelector('#info-dialog');
const form=document.querySelector('#booking-form');
let focusReturn=null;
let activeRequests=0;

function setModalState() { document.documentElement.classList.toggle('modal-open',Boolean(document.querySelector('dialog[open]'))); }
function closeMenu() {
  document.querySelector('#mobile-menu').hidden=true;
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  document.querySelector('.menu-toggle').setAttribute('aria-label','Открыть меню');
  document.documentElement.classList.remove('menu-open');
  main.inert=false;
  document.querySelector('.footer').inert=false;
}
function openBooking(service, trigger) {
  closeMenu();
  focusReturn=trigger;
  document.querySelector('#selected-service').textContent=service;
  document.querySelector('#service-input').value=service;
  document.querySelector('.success-message').hidden=true;
  form.hidden=false;
  document.querySelector('#form-status').textContent='';
  booking.showModal(); setModalState();
  requestAnimationFrame(()=>document.querySelector('#phone').focus({preventScroll:true}));
}
function showInfo(title, text) {
  document.querySelector('#info-title').textContent=title;
  document.querySelector('#info-body').replaceChildren();
  for (const paragraph of text) { const p=document.createElement('p'); p.textContent=paragraph; document.querySelector('#info-body').append(p); }
  info.showModal(); setModalState();
}

document.addEventListener('click', e=>{
  const trigger=e.target.closest('[data-book]');
  if(trigger) openBooking(trigger.dataset.book,trigger);
  const close=e.target.closest('[data-close]');
  if(close) close.closest('dialog').close();
  if(e.target.closest('[data-contact]')) {
    if(site.phoneHref) location.href=site.phoneHref;
    else showInfo('Скоро будем на связи', ['Сайт работает в демонстрационном режиме. Телефон, адрес и график пока приведены для примера.', 'Реальный номер появится перед запуском. Сейчас можно посмотреть форму записи.']);
  }
  if(e.target.closest('.privacy-trigger')) {
    if(site.privacyUrl) window.open(site.privacyUrl,'_blank','noopener,noreferrer');
    else showInfo('Обработка данных', ['Это демонстрационная версия сайта UP Service. Введённые в форму сведения никуда не отправляются и не сохраняются.', 'Перед запуском владелец должен добавить сведения об операторе, политику обработки персональных данных, условия согласия и способ приёма заявок.']);
  }
});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.addEventListener('click',e=>{ if(e.target===dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
  dialog.addEventListener('close',()=>{setModalState(); if(dialog===booking) focusReturn?.focus({preventScroll:true});});
});

document.querySelector('.menu-toggle').addEventListener('click',e=>{
  const toggle=e.currentTarget;
  const open=toggle.getAttribute('aria-expanded')!=='true';
  document.querySelector('#mobile-menu').hidden=!open;
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
  document.documentElement.classList.toggle('menu-open',open);
  main.inert=open;
  document.querySelector('.footer').inert=open;
});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('dialog[open]')&&document.documentElement.classList.contains('menu-open')){closeMenu();document.querySelector('.menu-toggle').focus();}});
window.matchMedia('(min-width: 901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

function fieldError(id,message) {
  document.querySelector(`#${id}-error`).textContent=message;
  document.querySelector(`#${id}`).setAttribute('aria-invalid',String(Boolean(message)));
}
form.addEventListener('input',e=>{
  if(e.target.id==='phone'||e.target.id==='consent') fieldError(e.target.id,'');
  document.querySelector('#form-status').textContent='';
});
form.addEventListener('submit', async e=>{
  e.preventDefault(); if(activeRequests) return;
  const phone=document.querySelector('#phone');
  const digits=phone.value.replace(/\D/g,'');
  const phoneValid=/^[+\d\s()\-]+$/.test(phone.value)&&digits.length>=10&&digits.length<=15;
  const consent=document.querySelector('#consent');
  fieldError('phone',phoneValid?'':'Введите номер целиком, например +7 (999) 123-45-67.');
  fieldError('consent',consent.checked?'':'Нужно согласие на обработку данных.');
  if(!phoneValid||!consent.checked) { (!phoneValid?phone:consent).focus();return; }
  const status=document.querySelector('#form-status');
  if(site.demo||!site.leadEndpoint||!site.privacyUrl) { status.textContent='Форма заполнена верно. Это демоверсия: заявка не отправлена. Приём заявок будет подключён перед запуском.'; status.classList.remove('error');return; }
  const button=form.querySelector('[type="submit"]');
  activeRequests++; button.disabled=true; button.setAttribute('aria-busy','true');
  button.querySelector('.submit-label').textContent='Отправляем'; button.querySelector('.spinner').hidden=false; button.querySelector('.submit-arrow').hidden=true;
  const controller=new AbortController(); const timeout=setTimeout(()=>controller.abort(),12000);
  try {
    const response=await fetch(site.leadEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:phone.value.trim(),name:document.querySelector('#name').value.trim(),service:document.querySelector('#service-input').value,consent:true}),signal:controller.signal});
    if(!response.ok) throw new Error('server');
    const result=await response.json(); if(result.accepted!==true) throw new Error('not-accepted');
    form.hidden=true;document.querySelector('.success-message').hidden=false;form.reset();
    document.querySelector('.success-message button').focus();
  } catch(error) { status.classList.add('error');status.textContent=error.name==='AbortError'?'Не удалось подтвердить получение заявки. Попробуйте позже или свяжитесь с сервисом по телефону.':'Заявка не отправлена. Проверьте соединение и попробуйте ещё раз. Ваши данные остались в форме.'; }
  finally {clearTimeout(timeout);activeRequests--;button.disabled=false;button.removeAttribute('aria-busy');button.querySelector('.submit-label').textContent='Жду звонка';button.querySelector('.spinner').hidden=true;button.querySelector('.submit-arrow').hidden=false;}
});

document.querySelectorAll('.service-toggle').forEach(toggle=>toggle.addEventListener('click',()=>{
  const wasOpen=toggle.getAttribute('aria-expanded')==='true';
  document.querySelectorAll('.service-toggle').forEach(t=>{t.setAttribute('aria-expanded','false');t.querySelector('.service-symbol').textContent='+';t.closest('article').classList.remove('active');document.getElementById(t.getAttribute('aria-controls')).hidden=true;});
  if(!wasOpen){toggle.setAttribute('aria-expanded','true');toggle.querySelector('.service-symbol').textContent='−';toggle.closest('article').classList.add('active');const panel=document.getElementById(toggle.getAttribute('aria-controls'));panel.hidden=false;const s=site.services.find(s=>`service-${s.id}`===panel.id);showServiceImage(s);}
}));

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

// Decode before transitioning, and ignore stale hover requests. The previous
// photo remains behind the incoming photo so the shared media area never blanks.
let serviceMediaRequest=0;
let serviceAnimations=[];
function stopServiceAnimations(){
  serviceAnimations.forEach(animation=>animation.cancel());
  serviceAnimations=[];
  document.querySelectorAll('.service-image-outgoing').forEach(image=>image.remove());
}
async function showServiceImage(service){
  const request=++serviceMediaRequest;
  const current=document.querySelector('#service-image');
  if(!current||current.getAttribute('src')===service.image)return;
  const preload=new Image();
  preload.src=service.image;
  try{await preload.decode();}catch{return;}
  if(request!==serviceMediaRequest)return;
  stopServiceAnimations();
  const previous=current.cloneNode();
  previous.removeAttribute('id');
  previous.className='service-image-outgoing';
  previous.alt='';
  previous.setAttribute('aria-hidden','true');
  current.before(previous);
  current.src=service.image;
  current.alt=service.imageAlt;
  if(reducedMotion.matches||window.innerWidth<=600){previous.remove();return;}
  const options={duration:750,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'};
  const outgoing=previous.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:'translateX(-28px)'}],options);
  const incoming=current.animate([{opacity:0,transform:'translateX(85px) scale(1.035)'},{opacity:1,transform:'translateX(0) scale(1)'}],options);
  serviceAnimations=[outgoing,incoming];
  outgoing.finished.then(()=>previous.remove()).catch(()=>previous.remove());
}
const serviceList=document.querySelector('.services-list');
document.querySelectorAll('.service-toggle').forEach(toggle=>{
  const preview=()=>{
    const service=site.services.find(s=>toggle.id===`service-trigger-${s.id}`);
    if(service)showServiceImage(service);
  };
  toggle.addEventListener('pointerenter',event=>{
    if(event.pointerType==='mouse'&&window.matchMedia('(hover: hover)').matches)preview();
  });
  toggle.addEventListener('focus',preview);
});
serviceList?.addEventListener('pointerleave',()=>{
  const active=serviceList.querySelector('.service-toggle[aria-expanded="true"]');
  const service=site.services.find(s=>active?.id===`service-trigger-${s.id}`);
  if(service)showServiceImage(service);
});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)stopServiceAnimations();});

const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!reducedMotion.matches) {
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
  reveals.forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});
}
const header=document.querySelector('#header');
let ticking=false;
function updateScroll(){header.classList.toggle('scrolled',window.scrollY>30);if(!reducedMotion.matches&&window.innerWidth>900){document.querySelector('.hero-image')?.style.setProperty('--parallax',`${Math.min(window.scrollY*.12,70)}px`);}ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){reveals.forEach(el=>el.classList.add('visible'));document.querySelector('.hero-image')?.style.setProperty('--parallax','0px');}});
updateScroll();

// Same document serves the two static routes; anchor navigation remains native.
if(location.hash) requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
