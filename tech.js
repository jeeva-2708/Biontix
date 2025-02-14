const navi = document.getElementById("navi");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
// const sec = document.getElementById("sec");
const times = document.querySelectorAll(".times");
const reDirect = document.querySelectorAll(".redirect")
const boxOne = document.getElementById("box-one")
const boxTwo = document.getElementById("box-two")
const overOne = document.getElementById("over-one")
const overTwo = document.getElementById("over-two")

// background scroll Animation
window.addEventListener('scroll', function() {
    const image = document.querySelectorAll('.img1');
    const scrollPosition = window.scrollY;
    image.forEach((element)=>{
        element.style.transform = `rotate(${scrollPosition}deg)`;
    })
});



// navigation
navi.addEventListener("click", ()=>{
    list.style.display="block";
    navi.style.display="none";
})
navi.addEventListener("click", ()=>{
    list.style.display="block";
    navi.style.display="none";
})
cross.addEventListener("click", ()=>{
    list.style.display="none"
    navi.style.display="block"
})
// sec.addEventListener("click", ()=>{
//      list.style.display="none"
//     navi.style.display="block"
// })
AOS.init();