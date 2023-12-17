function subtoggled(){
  let button2 = document.querySelector('.button2');
  if(button2.innerHTML==`Subscribe`) {
    document.querySelector('.button2').innerHTML = `Subscribed`;
    button2.classList.add('sub-button2');
  }
  else {
    document.querySelector('.button2').innerHTML = `Subscribe`;
    button2.classList.remove('sub-button2');
  }
}
function toggle(){
  let button = document.querySelector('.button1');
  if(button.innerHTML==`Log in`) {
    document.querySelector('.button1').innerHTML = `Log out`;
    button.classList.add(`sub-button1`);
  }
  else {
    document.querySelector('.button1').innerHTML = `Log in`;
    button.classList.remove('sub-button1');
  }
}