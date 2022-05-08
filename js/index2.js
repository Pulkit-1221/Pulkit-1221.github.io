// collapsable button-About
var coll = document.getElementsByClassName("skills");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




window.addEventListener('scroll',()=>{
  let content = document.querySelector('.intro-row');
  let contentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(contentPosition<screenPosition){
    content.classList.add('active');
  }
})


// var mainIntro=document.getElementsByclass('main');
// window.addEventListener('scroll', function(){
//   mainIntro.style.opacity=1 - +window.pageYOffset+''

// })
window.addEventListener('scroll',()=>{
  let content = document.querySelector('.skills-row');
  let contentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(contentPosition<screenPosition){
    content.classList.add('active');
  }
})


// $(document).ready(function(){
//   console.log("Hello");
//   $(window).scroll(function(){
//     if ($(this).scrollTop>0){
//       console.log("Hello");
//       $("main").css({"opacity":"0"})
//     }
//     else {
//       $("main").css({"opacity":"1"})
//     }
//   })
// })


window.addEventListener('scroll',()=>{
  let content = document.querySelector('.row-devTools');
  let contentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(contentPosition<screenPosition){
    content.classList.add('active');
  }
})

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.row-lang');
  let contentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(contentPosition<screenPosition){
    content.classList.add('active');
  }
})

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.icons');
  let contentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(contentPosition<screenPosition){
    content.classList.add('slideup');
  }
})
