import navigation from "./nav";
navigation();

function firstSectionAnimation(){
  const imgOpacity = [
    {opacity:1},
    {opacity:0},
  ]
  const imgDisappearTiming = {
                duration: 4000,
                iterations: 1,
                easing: 'ease',
                fill: 'forwards'
              };
  const imgAppearTiming = {
            ...imgDisappearTiming,   
            direction: 'reverse', delay:2000
          }

  const h1Opacity = [
      {opacity:1},
      {opacity:0, offset: 0.4},
      {opacity:0, offset: 0.7},
      {opacity:1},
    ]
  const h1Timing = {
      duration:8000,
      iteration:1,
      easing: 'ease',
      fill: 'forwards',
    }
  const h1 = document.querySelector('h1');
    
  const lastImg = document.querySelectorAll('.section--1 > img').length;
  let visibleChild = 1;
  setInterval(() => {
      const visibleImg = document.querySelector(`.section--1 img:nth-child( ${visibleChild} )`)
      visibleChild = visibleChild >= lastImg ? 1 : ++visibleChild;
      const nextVisibleImg = document.querySelector(`.section--1 img:nth-child( ${visibleChild} )`)

      visibleImg.animate(imgOpacity, imgDisappearTiming);
      nextVisibleImg.animate(imgOpacity, imgAppearTiming);

      if(nextVisibleImg.classList.contains('left') && visibleImg.classList.contains('right') 
      || visibleImg.classList.contains('left') && nextVisibleImg.classList.contains('right')){
        setTimeout(() => {
          nextVisibleImg.classList.contains('left') ? h1.style.cssText = 'right:150px; left:unset' : h1.style.cssText = 'left:150px; right:unset';
        }, 3000)
        h1.animate(h1Opacity, h1Timing)
      }
  }, 20000)
}
firstSectionAnimation();

const section2 = document.querySelector('.section--2');
const heading = section2.querySelector('.--heading > h2');
const paragraph = section2.querySelector('.--paragraph');
const paragraphHeight = paragraph.offsetHeight;
const bamboo = section2.querySelector('.--bamboo');
bamboo.style.height = paragraphHeight + 150 + 'px';

function secondSectionAppearAnimation(){
  const headingAppear = [
                          {transform: 'translateY(0)', opacity: 0.7},
                          {transform: 'translateY(-30px)', opacity: 1},
                        ]
  const headingAppearOptions =  {
                                  duration: 1000,
                                  easing: 'ease',
                                  iterations:1,
                                  fill: 'forwards'
                                }
  const paragraphAppear = [
                            {marginTop:'30px', opacity: 0.7},
                            {marginTop:'0', opacity: 1},
                          ]
  const paragraphAppearOptions =  {
                                    duration: 1000,
                                    easing: 'ease',
                                    iterations:1,
                                    fill: 'forwards',
                                    delay:1000
                                  }
  window.addEventListener('scroll', function scrolledToSeconSection() {
    console.log('getbounding ' + section2.getBoundingClientRect().top);
    console.log('scroll ' + window.scrollY);
    if(window.scrollY >= -1 * section2.getBoundingClientRect().top){
      heading.animate(headingAppear, headingAppearOptions)
      paragraph.animate(paragraphAppear, paragraphAppearOptions)
      window.removeEventListener('scroll', scrolledToSeconSection);
    }
  })
}
secondSectionAppearAnimation()
function setSeconSectionStyle(){
}

window.addEventListener("resize", () => {
  const paragraphHeight = paragraph.offsetHeight;
  bamboo.style.height = paragraphHeight + 150 + 'px';
});









