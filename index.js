const animateElement = document.querySelector('.avatar');

function handleClick() {
  if (animateElement.classList.contains('avatar-anim')) {
    animateElement.classList.remove('avatar-anim');
  } else {
    animateElement.classList.add('avatar-anim');
  }
}

animateElement.addEventListener('click', handleClick);

