let container = document.querySelector('.container');

let count = 0;
container.onmouseenter = () => {
    console.log('sichqoncha ustiga bordi');
    container.style.backgroundColor = 'red';
    count++;
    console.log(count);
}

container.onmouseleave = () => {
    console.log('sichqoncha ustidan ketdi');
    container.style.backgroundColor = 'green';
    count++;
    console.log(count);
}

let card = document.querySelector('.card');
card.onmouseenter = () => {
  card.style.background = 'linear-gradient(45deg, red, green, blue)';
  card.style.transition = '1s';
  card.style.transform = 'scale(1.1)';
};
