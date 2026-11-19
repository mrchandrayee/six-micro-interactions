// 01 — Speed dial: staggered fan-out (45-degree directions, 100 ms offsets).
const dial=document.querySelector('.dial-wrap');
document.getElementById('dialToggle').addEventListener('click',()=>{dial.classList.toggle('open');document.getElementById('dialState').textContent=dial.classList.contains('open')?'OPEN':'CLOSED'});
document.querySelectorAll('.dial-action').forEach(b=>b.addEventListener('click',()=>{b.classList.add('chosen');setTimeout(()=>b.classList.remove('chosen'),450)}));

// 02 — Slider: scale the thumb while pointer/touch is held; bubble follows its value.
const slider=document.getElementById('demoSlider'),sliderDemo=document.querySelector('.slider-demo');
function updateSlider(){const v=Number(slider.value);document.getElementById('sliderValue').textContent=v;document.getElementById('sliderBubble').textContent=v;document.getElementById('sliderBubble').style.left=`calc(12px + (100% - 24px)*${v/100})`;slider.style.background=`linear-gradient(90deg,var(--blue) ${v}%,#202f46 ${v}%)`}
slider.addEventListener('input',updateSlider);['pointerdown','touchstart'].forEach(e=>slider.addEventListener(e,()=>{sliderDemo.classList.add('grabbing');document.getElementById('grabState').textContent='GRABBED'}));['pointerup','pointercancel','touchend','blur'].forEach(e=>slider.addEventListener(e,()=>{sliderDemo.classList.remove('grabbing');document.getElementById('grabState').textContent='RELEASED'}));updateSlider();

// 03 — Large title: interpolate title size from 34px to 18px based on scroll.
const scrollPanel=document.getElementById('scrollDemo'),title=document.getElementById('scrollTitle');
scrollPanel.addEventListener('scroll',()=>{const p=Math.min(scrollPanel.scrollTop/100,1);const size=34-(16*p);title.style.fontSize=size+'px';document.getElementById('titleSize').textContent=Math.round(size)+' PX'});

// 04 — Long press: sink while pressing; after 400ms lift by 5%.
const holdTarget=document.getElementById('holdTarget');let holdTimer=null,holdStart=null;
function beginHold(){clearTimeout(holdTimer);holdTarget.classList.add('holding');holdTarget.classList.remove('lifting');document.getElementById('holdState').textContent='SINKING';document.getElementById('holdMessage').textContent='Keep holding…';holdStart=Date.now();holdTimer=setTimeout(()=>{holdTarget.classList.remove('holding');holdTarget.classList.add('lifting');document.getElementById('holdState').textContent='LIFTED +5%';document.getElementById('holdMessage').textContent='Hold completed — release to reset'},400)}
function endHold(){clearTimeout(holdTimer);holdTarget.classList.remove('holding','lifting');document.getElementById('holdState').textContent='READY';document.getElementById('holdMessage').textContent='Hold the middle row for 400 ms'}
holdTarget.addEventListener('pointerdown',beginHold);['pointerup','pointerleave','pointercancel'].forEach(e=>holdTarget.addEventListener(e,endHold));holdTarget.addEventListener('contextmenu',e=>e.preventDefault());

// 05 — Page dots: stretch active dot and snap to the selected page; swipe support.
const track=document.getElementById('carouselTrack'),dots=[...document.querySelectorAll('#dots button')];let page=0,startX=0;
function goPage(n){page=(n+dots.length)%dots.length;dots.forEach((d,i)=>{d.classList.toggle('active',i===page);d.animate([{transform:'scaleX(1)'},{transform:'scaleX(1.65)'},{transform:'scaleX(1)'}],{duration:260,easing:'cubic-bezier(.2,.8,.2,1)'})});track.style.transform=`translateX(-${page*100}%)`;document.getElementById('pageReadout').textContent=`PAGE 0${page+1} / 0${dots.length}`}
dots.forEach((d,i)=>d.addEventListener('click',()=>goPage(i)));
const carousel=document.getElementById('carouselWindow');carousel.addEventListener('pointerdown',e=>{startX=e.clientX});carousel.addEventListener('pointerup',e=>{const dx=e.clientX-startX;if(Math.abs(dx)>40)goPage(page+(dx<0?1:-1))});

// 06 — Side menu: push and scale page instead of covering it.
const menuDemo=document.querySelector('.menu-demo');document.getElementById('menuToggle').addEventListener('click',()=>{menuDemo.classList.toggle('open');document.getElementById('menuState').textContent=menuDemo.classList.contains('open')?'OPEN · PAGE 86%':'CLOSED'});
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}));
