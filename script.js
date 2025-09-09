// script.js - shared across pages

// NAV active link highlighting
document.addEventListener('DOMContentLoaded', function(){
  const path = window.location.pathname.split("/").pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  // greeting on interface page
  const greetEl = document.getElementById('greeting-text');
  if(greetEl){
    const now = new Date();
    const hour = now.getHours();
    let g = 'Hello';
    if(hour >= 5 && hour < 12) g = 'Good Morning';
    else if(hour >=12 && hour < 18) g = 'Good Afternoon';
    else g = 'Good Evening';
    greetEl.textContent = `${g}, Welcome to my Portfolio`;
  }

  // typing animation on homepage (index.html)
  const roles = ["Inspiring Leader", "B.Agric Graduate", "Public Speaker", "Farming Aficionado", "Writer"];
  const roleEl = document.getElementById('role-text');
  if(roleEl){
    let idx = 0, char = 0, forward = true;
    function typeLoop(){
      const current = roles[idx];
      if(forward){
        char++;
        roleEl.textContent = current.slice(0, char);
        if(char === current.length){ forward = false; setTimeout(typeLoop, 900); return;}
      } else {
        char--;
        roleEl.textContent = current.slice(0, char);
        if(char === 0){ forward = true; idx = (idx+1)%roles.length; setTimeout(typeLoop, 350); return;}
      }
      setTimeout(typeLoop, 80);
    }
    typeLoop();
  }

  // Gallery modal for memories page
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content img');
  const modalCaption = document.querySelector('.modal-caption');
  if(galleryItems.length && modal){
    galleryItems.forEach(item=>{
      item.addEventListener('click', ()=>{
        const src = item.querySelector('img').src;
        const caption = item.dataset.caption || '';
        modalImg.src = src;
        modalCaption.textContent = caption;
        modal.style.display = 'flex';
      });
    });
    modal.addEventListener('click', (e)=>{
      if(e.target === modal || e.target.classList.contains('close-btn')){
        modal.style.display = 'none';
      }
    });
  }
});
