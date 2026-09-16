(() => {
  const slides = [...document.querySelectorAll('.hero-slide')];
  if (slides.length) {
    const dots = [...document.querySelectorAll('.slider-dot')];
    const hero = document.getElementById('heroSlides');
    let index = 0, timer;
    const show = next => { index=(next+slides.length)%slides.length; slides.forEach((s,i)=>s.classList.toggle('active',i===index)); dots.forEach((d,i)=>d.classList.toggle('active',i===index)); };
    const autoplay = () => { clearInterval(timer); if(!matchMedia('(prefers-reduced-motion: reduce)').matches) timer=setInterval(()=>show(index+1),5500); };
    document.getElementById('nextSlide')?.addEventListener('click',()=>{show(index+1);autoplay()});
    document.getElementById('prevSlide')?.addEventListener('click',()=>{show(index-1);autoplay()});
    dots.forEach(d=>d.addEventListener('click',()=>{show(Number(d.dataset.index));autoplay()}));
    hero?.addEventListener('mouseenter',()=>clearInterval(timer)); hero?.addEventListener('mouseleave',autoplay);
    document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(timer):autoplay()); autoplay();
  }
  const panel=document.getElementById('mobilePanel');
  const open=()=>{panel?.classList.add('open');panel?.setAttribute('aria-hidden','false');document.body.classList.add('menu-open')};
  const close=()=>{panel?.classList.remove('open');panel?.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open')};
  document.getElementById('openMenu')?.addEventListener('click',open); document.getElementById('closeMenu')?.addEventListener('click',close);
  panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close)); window.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
