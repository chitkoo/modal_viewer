'use strict';

const openBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// console.log(openBtn);

for(let i=0;i<openBtn.length;i++){
    openBtn[i].addEventListener('click',showModal);
};

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keyup',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    };
});