const nav = document.querySelector('.--nav');
const navLinks = nav.querySelectorAll('a');

  const hoverFontWeight = [
    {  fontVariationSettings: "'wght' 500", letterSpacing: '0px', fontSize: '18px', color:'#000'},
    { fontVariationSettings: "'wght' 590", letterSpacing: '0.05px', fontSize: '18.2px', color:'#222'},
  ];
  const hoverOptions = {
    duration: 300,
    iterations: 1,
    easing   : 'ease',
    fill:'forwards',
  };
  const unHoverOptions = {
    duration: 300,
    iterations: 1,
    easing   : 'ease',
    direction: 'reverse',
    fill:'forwards'

  };
navLinks.forEach(navLink => {
    const linkWidth = navLink.offsetWidth;
    console.log((linkWidth + 20) + 'px')
    if(navLink.classList.contains('active')){
        navLink.style.fontVariationSettings = "'wght' 590";
        navLink.style.letterSpacing = '0.05px';
        navLink.style.fontSize = '18.2px';
    }else{
        navLink.style.fontVariationSettings = "'wght' 500";
        navLink.style.letterSpacing = '0px';
        navLink.style.fontSize = '18px';
    } 
    navLink.style.width = linkWidth + 'px';
    navLink.addEventListener('mouseover', () => {
        if(!navLink.classList.contains('active')){
            navLink.animate(hoverFontWeight, hoverOptions);
        }

    })
    navLink.addEventListener('mouseout', () => {
        if(!navLink.classList.contains('active')){
            if(!navLink.classList.contains('active')){
                navLink.animate(hoverFontWeight, unHoverOptions);
            }

        }

    })
})

  
