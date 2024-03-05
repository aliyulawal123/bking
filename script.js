/* toggle function, hamburger menu */
function myFunction(){
    var navbar = document.getElementById('nav')
    navbar.classList.toggle("show");
}

/* sticky navi */
window.addEventListener("scroll" ,function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

document.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
});

/*gsap.to('.h1', {y: 50, opacity:0.8, duration: 1})*/

/* visual effects with gsap library */
const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.btn3', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4"})
tl.fromTo('.h1', {scale: 0}, {scale: 1})
tl.fromTo('p', {opacity: 0, x:-50}, {opacity: 1, x:0})
tl.fromTo('.appstore', {x:30, opacity:0}, {x:0, opacity: 1})
tl.fromTo('.googleplay', {x:30, opacity:0}, {x:0, opacity: 1})


/* bigger image(phone) function */
function bigImg(x) {
    x.style.height = "45%";
    x.style.width = "45%";
  }
  
  function normalImg(x) {
    x.style.height = "40%";
    x.style.width = "40%";
  }

/* Alert function */
function myFunction2(){
  alert('Sign up');
}

function myFunction3(){
  alert('Add to basket');
}


/* change image function */
function imagefun(){
  var Image_Id = document.getElementById('longer-img');
  if (Image_Id.src.match('img1.webp')) {
    Image_Id.src = 'img6.jpeg';
  }
  else{
    Image_Id.src = 'img1.webp';
  }
}

