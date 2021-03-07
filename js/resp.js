burger=document.querySelector('.burger');
navlist=document.querySelector('.nav-list');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.right-nav');

burger.addEventListener('click',()=>{
           rightnav.classList.toggle('v-class-resp');
           navlist.classList.toggle('v-class-resp');
           navbar.classList.toggle('h-nav-resp');

})


var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter > 3){
        counter=1;
    }
},5000);


head=document.querySelector('.price-head');
pricelist=document.querySelector('.price-list');


head.addEventListener('click',()=>{
           pricelist.classList.toggle('price-list-click');
           

})