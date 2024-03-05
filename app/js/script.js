const hamburgerMenu = document.querySelector('#hamburgerMenu');
const headerMenu = document.querySelectorAll('.hasfade');
const body = document.querySelector('body');


hamburgerMenu.addEventListener('click', function(){
    console.log("hello it's me");
    if(hamburgerMenu.classList.contains('open')){
        hamburgerMenu.classList.remove('open');
        headerMenu.forEach(element => {
            element.classList.remove('fade-in', 'hasfade');
            element.classList.add('fade-out');
        });
    }
    else{
        hamburgerMenu.classList.add('open');
        headerMenu.forEach(element => {
            element.classList.remove('fade-out', 'hasfade');
            element.classList.add('fade-in');
        });
        body.classList.add('.noscroll');
    
    }
})