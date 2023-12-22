let hedop = document.getElementById("hedop");
let op = document.getElementById("op")
let count = 1;

op.addEventListener("click" , function(){
    if(count == 1){
        hedop.style.top = "13vh";
        count = 0;
    }
    else{
        count = 1;
        hedop.style.top = "-15vh"
    }
})

const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 190);