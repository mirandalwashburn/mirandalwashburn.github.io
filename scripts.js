var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
  showUpNext(slideIndex += n);
  animateContent();
}


  /*ANIMATE*/
  function animateContent() {
    
    const animateUp =  document.querySelector('.animateUp')
    animateUp.classList.add('animated', 'fadeInUp')

    const animateLeft =  document.querySelector('.animateLeft')
    animateLeft.classList.add('animated', 'fadeInLeft')
    
    const animateLeft2 =  document.querySelector('.animateLeft2')
    animateLeft2.classList.add('animated', 'fadeInLeft')
    
    const animateLeft3 =  document.querySelector('.animateLeft3')
    animateLeft3.classList.add('animated', 'fadeInLeft')
  }


 /*SHOW SLIDE*/
function showSlide(n) {
  var i;
  var x = document.getElementsByClassName('video__embed__vid');  
  var videoTitle = document.getElementsByClassName('video__title');  

  
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].classList.remove('animateUp');
    videoTitle[i].style.display = "none";
    videoTitle[i].classList.remove('animateLeft');


  }
  
  x[slideIndex - 1].style.display = "block";
  x[slideIndex - 1].classList.add('animateUp');

  videoTitle[slideIndex - 1].style.display = "block";
  videoTitle[slideIndex - 1].classList.add('animateLeft');
 
  
  /*Change Numbers*/
  /*...Show total num of slides on bottom...*/
    document.getElementById('video__nav__number-bottom').innerHTML = x.length;
  /*...Show current slide num on top*/
    document.getElementById('video__nav__number-top').innerHTML = slideIndex;
}



 /*SHOW UP NEXT*/
function showUpNext(n) {
  var i;
  var x = document.getElementsByClassName('video__upNext__vid');  
  var videoDesc = document.getElementsByClassName('video__upNext__vidDesc');  

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    videoDesc[i].style.display = "none";
    
    x[i].classList.remove('animateLeft2');
    videoDesc[i].classList.remove('animateLeft3');
  }
  x[slideIndex - 1].style.display = "block";
  videoDesc[slideIndex - 1].style.display = "block";
  
  x[slideIndex - 1].classList.add('animateLeft2');
  videoDesc[slideIndex - 1].classList.add('animateLeft3');
}


