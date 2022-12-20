const seeEvil = document.querySelector('.closed')
const hearEvil = document.querySelector('.open')

//ADD EVENT LISTENER

seeEvil.addEventListener('click',()=>{
    if (hearEvil.classList.contains('open')){
        hearEvil.classList.add('active');
        seeEvil.classList.remove('active')
    }
})

hearEvil.addEventListener('click', () =>{
    if (seeEvil.classList.contains('closed')){
        seeEvil.classList.remove('active');
        openFace.classList.remove('active');
    }
})