const main = document.querySelector('.main');
const section = document.querySelectorAll('.a');
const contactpage = document.querySelector('.contact-me-form');
const body = document.body
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entrie) => {
       if (entrie.isIntersecting) {
           entrie.target.classList.add('show')
       } else {
           entrie.target.classList.remove('show')
       }


   });
})
section.forEach((el) => observer.observe(el))
function trigeranimateanimate(type){
if(type === ''){
   alert('you are already home')
   return
}
if(type === 'to-about-me'){
   body.style.filter = "blur(8px)";
   body.style.transform = "translateX(500px)";
 setTimeout(() =>{
  window.location.href = "about-me.html"
},400)
}
if(type === 'to-projects'){
    body.style.filter = "blur(8px)";
    body.style.transform = "translateY(800px)";
 setTimeout(() =>{
  window.location.href = "projects.html"
},400)
}
}

