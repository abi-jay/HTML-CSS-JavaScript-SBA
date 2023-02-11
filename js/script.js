const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')
let valueDisplays = document.querySelectorAll(".num");
let interval =5000;
valueDisplays.forEach(valueDisplay =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-id"));
    let duration = Math.floor(interval/endValue);
    console.log(valueDisplay);
    console.log(endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});


searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})


menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

