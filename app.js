let showBtn = document.getElementById('showBtn');
let hiddenBtn = document.getElementById('hiddenBtn');
let card = document.querySelector('.card');
let change = document.getElementById('change');
let change2 = document.getElementById('change2');
// console.log(showBtn);
// console.log(hiddenBtn);
// console.log(card);

showBtn.addEventListener('click', function() {
    card.style.display = 'flex';
});

showBtn.addEventListener('click', function(){
    showBtn.style.display = 'none';
});

hiddenBtn.addEventListener('click', () => {
    card.style.display = 'none';
});

hiddenBtn.addEventListener('click', () => {
    showBtn.style.display = 'flex';
});

change.addEventListener('click', () => {
    change.style.color = 'red';
    change.innerHTML = 'KAWASAKI NINJA';
});
change2.addEventListener('click', () => {
    change2.style.color = 'blue';
});
// change2.addEventListener('dblclick', () => {
//     change2.style.color = 'white';
// });