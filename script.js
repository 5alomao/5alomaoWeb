function escrevendoLetra(){
    const title = document.querySelector('.typing');

    function ativaLetra(elemento){
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    ativaLetra(title);
}


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .primary-nav');

ativaMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('ativado')
    ativaMenu.classList.toggle('fa-x')
})

