//при кліку на фотографію вона анімовано збільшуєтья в розмірах
const animateElement = document.querySelector('.avatar');

function firstHandleClick() {
  if (animateElement.classList.contains('avatar-anim')) {
    animateElement.classList.remove('avatar-anim');
  } else {
    animateElement.classList.add('avatar-anim');
  }
}
window.onload=function(){
animateElement.addEventListener('click', firstHandleClick);
}
// animateElement.addEventListener('click', firstHandleClick);
//Зробити навігацію по документу за допомогою клавіатури.

const elementMap = {
  a: document.getElementById('a'),
  b: document.getElementById('b'),
  c: document.getElementById('c'),
  d: document.getElementById('d')
};

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const element = elementMap[key];
  
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  
});
