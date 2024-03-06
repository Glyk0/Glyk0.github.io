// ---------------burger-------------------------

const btn = document.querySelector('.nav__icon'),
      btnSpan = document.querySelector('.nav__icon-span'),
      menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  btnSpan.classList.toggle('active'),
  menu.classList.toggle('menuActive');
});

//--------------------accardion------------------  

   const accardionContent = document.querySelectorAll('.accardion__content'),
         accardionSpan = document.querySelectorAll('.accardion__span'),
         accardionText = document.querySelectorAll('.accardion__text');

document.addEventListener('click', active);

function active(event) {
  const tar = event.target;
  if (tar.closest('.accardion__content')) {
    accardionContent.forEach((item, index) => {
      if(tar.closest('.accardion__content') == item) {
        accardionText[index].classList.toggle('activeText')
        accardionText[index].classList.toggle('go')
        accardionSpan[index].classList.toggle('activeSpan')
      }
    })
  } 
}
//--------------------slayder------------------ 

const slayder = document.querySelector('.slayder'),
      line = document.querySelector('.slayder__line'), 
      btnPrev = document.querySelector('.slayder__btn_left'),
      btnNext = document.querySelector('.slayder__btn_right'),
      card = document.querySelectorAll('.slayder__card');
let step = 0; 

btnNext.addEventListener('click', () => {
  step += 412;
  if (step > 1236) {
    step = 0
    line.style.left = -step + 'px';
  } else {
    line.style.left = -step + 'px';
  }
})
btnPrev.addEventListener('click', () => {
  step -= 412;
  if (step < 0) {
    step = 1236
    line.style.left = -step + 'px';
  } else {
    line.style.left = -step + 'px';
  }
})

//--------------------slayderMob------------------ 

const slayderMob = document.querySelector('.slayderMob'),
      lineMob = document.querySelector('.slayderMob__line'), 
      btnMobPrev = document.querySelector('.slayderMob__btn_left'),
      btnMobNext = document.querySelector('.slayderMob__btn_right');
let stepMob = 0;

btnMobNext.addEventListener('click', () => {
  stepMob += 293;
  if (stepMob > 1465) {
    stepMob = 0
    lineMob.style.left = -stepMob + 'px';
  } else {
    lineMob.style.left = -stepMob + 'px';
  }
})
btnMobPrev.addEventListener('click', () => {
  stepMob -= 293;
  if (stepMob < 0) {
    stepMob = 1465
    lineMob.style.left = -stepMob + 'px';
  } else {
    lineMob.style.left = -stepMob + 'px';
  }
})






// step > 1236;
// step > 1648;
// step > 2060;


