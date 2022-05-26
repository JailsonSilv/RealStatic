// TIRANDO O ONSCROLL DO BODY LA NO HTML MSM
// E ADD PELO WINDOW.ADDEVENT....
window.addEventListener('scroll', onScroll)

onScroll()

// REALIZA OS SCROLL
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activaMenuAtCurrentSection(home)
    activaMenuAtCurrentSection(services)
    activaMenuAtCurrentSection(about)
    activaMenuAtCurrentSection(contact)
}

 
function activaMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2;

    // Verificar se a seção passou da linha
    // >>>>> quais dados vou precisar ?

    // o topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção 
    const sectionHeight = section.offsetHeight
    
    // o topo da seção chegou ou ultrapassou a linha alvo 
    const sectionTopReachOrPassedLineTargetLine = targetLine >= sectionTop

    // informações dos dados  e da lógica 
    //console.log('O topo da seção chegou ou passou da linha', sectionTopReachOrPassedLineTargetLine);



    // verificar se a base está abaixo da linha alvo 
    // >>>>>>>>> quais dados vou precisar ?

    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //console.log('O fundo da seção passou da linha?' ,sectionEndPassedTargetLine);

    // limites da seção 
    const sectionBoundaries = sectionTopReachOrPassedLineTargetLine &&  !sectionEndPassedTargetLine 

    // Em qual elemento deve aparecer a barra
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove("active")
    if (sectionBoundaries) {
        menuElement.classList.add("active")
    }
}


//  ADD O SCROLL E REMOVENDO O SCROLL
function showNavOnScroll() {
    if(scrollY == 0) {
        navigation.classList.remove("scroll");
    } else {
        navigation.classList.add("scroll");
    }
}

// ADD BTN PRA VOLTA PRO HOME
function showBackToTopButtonOnScroll() {
    if(scrollY > 450) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

// CLICK QUE LEVA (abre o menu) AO MENU(expanded)
function openMenu() {
    document.body.classList.add('menu-expanded');
}
// CLICK QUE VOLTA PARA O HOME X
function closeMenu() {
    document.body.classList.remove('menu-expanded');
}


// HighDigitalText
const textHigh = document.querySelector('#text-digit')
const text = 'Seja bem-vindo a Real_Static...'
const interval = 100;

function showText(textHigh, text, interval) {

    const char = text.split("").reverse()

    const typer = setInterval(() => {
        if(!char.length){
            return clearInterval(typer)
        }

        const nextChar = char.pop()
        
        textHigh.innerHTML += nextChar;

    }, interval);
}

showText(textHigh, text, interval);



ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,

}).reveal(`
    #home, 
    #home img,
    #home .stats,
    #services, 
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content 
    `
);

