

//abrir menu mobile
const menuMobileIcon = document.querySelector('.icon-open-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile')

menuMobileIcon.addEventListener('click', function(){
menuMobile.classList.remove('inactive');
});

//cerrar menu mobile
const cerrarMenuMobile = document.querySelector('.icon-exit');
cerrarMenuMobile.addEventListener('click', function(){
    menuMobile.classList.add('inactive');
});

//DarkMode destok
const darkmodeDestok = document.querySelector('.icon-darkmode');
const body = document.querySelector('body');

darkmodeDestok.addEventListener('click', function(){
darkmodeDestok.classList.contains('inactive')
 body.style.backgroundColor = 'red';

});

//darkmode mobile
const darkmodeMobile = document.querySelector('.icon-darkmodeMobile');
darkmodeMobile.addEventListener('click', function(){
    menuMobile.classList.add('inactive');
    darkmodeMobile.setAttribute('src', './svg-icon/noun-sun-5695284.svg')
    body.style.backgroundColor = 'red';
});

const sunDarkmode = document.querySelector('.sun');

sunDarkmode.addEventListener('click', function(){
    alert("si dio perra, que buen programador eres");
})


