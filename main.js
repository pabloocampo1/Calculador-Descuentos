

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
const sunDarkmode = document.querySelector('.Sun');
const darkmodeDestok = document.querySelector('.icon-darkmode');
const body = document.querySelector('body');
const letrasDarkmode =  document.querySelector('.ltDarkmode');
const titlePrincipal = document.querySelector('.header-title');
const titleIntro = document.querySelector('.title-intro');
const descriptionIntro = document.querySelector('.description-intro');
const ventaTotal = document.querySelector('.venta-total-color');
const descuentoSeleccionado = document.querySelector('.descuento-color');
const precioFinal = document.querySelector('.precio-final-color');
const precioAhorro = document.querySelector('.precio-ahorro-color');
const about = document.querySelector('.about');



darkmodeDestok.addEventListener('click', function(){

 darkmodeDestok.classList.add('inactive')
 sunDarkmode.classList.remove('inactive')
 body.style.backgroundColor = 'var( --bg-darkmode-night)';
 titlePrincipal.classList.add('darkmodeactive');
 titleIntro.classList.add('darkmodeactive');
 descriptionIntro.classList.add('darkmodeactive');
 ventaTotal.classList.add('darkmodeactive');
 descuentoSeleccionado.classList.add('darkmodeactive');
 precioFinal.classList.add('darkmodeactive');
 precioAhorro.classList.add('darkmodeactive')
 about.classList.add('darkmodeactive');

});


sunDarkmode.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
    darkmodeDestok.classList.remove('inactive')
    sunDarkmode.classList.add('inactive')
    titlePrincipal.classList.remove('darkmodeactive');
    titleIntro.classList.remove('darkmodeactive');
    descriptionIntro.classList.remove('darkmodeactive');
    ventaTotal.classList.remove('darkmodeactive');
    descuentoSeleccionado.classList.remove('darkmodeactive');
    precioFinal.classList.remove('darkmodeactive');
    precioAhorro.classList.remove('darkmodeactive');
    about.classList.remove('darkmodeactive');
});



//darkmode mobile


const darkmodeMobile = document.querySelector('.icon-darkmodeMobile');
const sunDarkmodeMobile = document.querySelector('.Sun-mobile');


    darkmodeMobile.addEventListener('click', function(){
    menuMobile.classList.add('inactive');
    darkmodeMobile.classList.add('inactive')
    sunDarkmodeMobile.classList.remove('inactive')
    body.style.backgroundColor = 'var( --bg-darkmode-night)';
    titlePrincipal.classList.add('darkmodeactive');
    titleIntro.classList.add('darkmodeactive');
    descriptionIntro.classList.add('darkmodeactive');
    ventaTotal.classList.add('darkmodeactive');
    descuentoSeleccionado.classList.add('darkmodeactive');
    precioFinal.classList.add('darkmodeactive');
    precioAhorro.classList.add('darkmodeactive')
    about.classList.add('darkmodeactive');
   
   });
   
   
   sunDarkmodeMobile.addEventListener('click', function(){
    
       body.style.backgroundColor = 'white';
       darkmodeMobile.classList.remove('inactive')
       menuMobile.classList.add('inactive');
       sunDarkmodeMobile.classList.add('inactive')
       titlePrincipal.classList.remove('darkmodeactive');
       titleIntro.classList.remove('darkmodeactive');
       descriptionIntro.classList.remove('darkmodeactive');
       ventaTotal.classList.remove('darkmodeactive');
       descuentoSeleccionado.classList.remove('darkmodeactive');
       precioFinal.classList.remove('darkmodeactive');
       precioAhorro.classList.remove('darkmodeactive')
       about.classList.remove('darkmodeactive');
   });


//calculador de descuento y resumen
const buttonCalcular = document.querySelector('.button-calculador');
const buttonBorrar = document.querySelector('.button-borrar');
const valorTotal = document.querySelector('.venta-total');
const DescuentoSelect = document.querySelector('.descuento-select');
const valorFinal = document.querySelector('.precio-final');
const ahorroFinal = document.querySelector('.precio-ahorro');

buttonCalcular.addEventListener('click', calcularDescuento);
buttonBorrar.addEventListener('click', borrarContenidoDelResulem);

function calcularDescuento(){
    const valorIngresado = document.getElementById('valor-ingresado').value;
    const valorDescuento = document.getElementById('valorDescuento').value;

    const descuento = (valorIngresado * (100 - valorDescuento) / 100);

    valorTotal.innerHTML = valorIngresado;
    DescuentoSelect.innerHTML = `${valorDescuento}%`;
    valorFinal.innerHTML = descuento;

    //ahorro final

    const ahorro = (valorIngresado - descuento);
    ahorroFinal.innerHTML = ahorro;
};

function borrarContenidoDelResulem(){
    valorTotal.innerHTML = 0;
    DescuentoSelect.innerHTML ="0%";
    valorFinal.innerHTML = 0;
    ahorroFinal.innerHTML = 0;
};



   
   


