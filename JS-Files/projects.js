 const main = document.querySelector('main');
const section = document.querySelectorAll('.a');
const contactpage = document.querySelector('.contact-me-form');
const body = document.body
contactpage.style.display = 'none';
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
let contactme = () => {
   main.style.transform = 'scale(0.8)'
   main.style.filter = "blur(8px)";
   setTimeout(() => {
       contactpage.style.display = "flex"
   }, 710);
}
let disipate = () => {
   main.style.transform = 'scale(1)'
   main.style.filter = "blur(0px)"
   contactpage.style.display = "none";
}
function trigeranimateanimate(type){
if(type === ''){
      body.style.filter = "blur(8px)";
   body.style.transform = "translateX(500px)";
 setTimeout(() =>{
  window.location.href = "index.html"
},400)
}
if(type === 'to-about-me'){
   body.style.filter = "blur(8px)";
   body.style.transform = "translateX(-500px)";
 setTimeout(() =>{
  window.location.href = "about-me.html"
},400)
}
if(type === 'to-projects'){
  alert('your already here ')
  return
}
}

