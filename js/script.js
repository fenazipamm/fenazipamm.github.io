// VIDEO
let promoVideoClose = document.querySelector('#promoVideoClose');
let promoVideo = document.querySelector('#promoVideo');

promoVideoClose.addEventListener('click',function(){
    promoVideo.style.display = 'none';
})
promoVideoOpen.addEventListener('click',function(){
    promoVideo.style.display = 'flex';
})
// GALLERY
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');
let block4 = document.querySelector('.block4');
let block5 = document.querySelector('.block5');

let block1Modal = document.querySelector('#block1Modal');
let block2Modal = document.querySelector('#block2Modal');
let block3Modal = document.querySelector('#block3Modal');
let block4Modal = document.querySelector('#block4Modal');
let block5Modal = document.querySelector('#block5Modal');

block1.addEventListener('click',function(){
    block1Modal.style.display = 'flex';
})
block1Modal.addEventListener('click',function(e){
    if (e.target == block1Modal){
    block1Modal.style.display = 'none'
    };
})