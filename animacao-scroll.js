const sections = document.querySelectorAll('.js-scroll');

function initAnimacaoScroll(){
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                console.log(sectionTop);
                if(isSectionVisible)
                section.classList.add('ativo');
            else
            section.classList.remove('ativo');
            })

        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();