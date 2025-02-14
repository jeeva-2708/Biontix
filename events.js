const navi = document.getElementById("navi");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
const sec = document.getElementById("sec");
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



// reDirect to next page

    boxOne.addEventListener("click", function(){
        window.location.href = './technical-events.html';
    })


    boxTwo.addEventListener("click", function(){
        window.location.href = './non-technical-events.html';
    })

// hover effect
boxOne.addEventListener("mouseover",()=>{
    overOne.style.transition="fontSize 5s linear"
    overOne.style.fontSize="26px"
    
})
boxOne.addEventListener("mouseout",()=>{
    overOne.style.fontSize="20px"
    overOne.style.transition="fontSize 0.5s linear"
})
boxTwo.addEventListener("mouseover",()=>{
    overTwo.style.transition="fontSize 5s linear"
    overTwo.style.fontSize="26px"
    
})
boxTwo.addEventListener("mouseout",()=>{
    overTwo.style.fontSize="20px"
    overTwo.style.transition="fontSize 0.5s linear"
})


// navigation
navi.addEventListener("click", ()=>{
    list.style.display="block";
    navi.style.display="none";
     list.style.height= "100vh"
})
navi.addEventListener("click", ()=>{
    list.style.display="block";
    navi.style.display="none";
})
cross.addEventListener("click", ()=>{
    list.style.display="none"
    navi.style.display="block"
})
sec.addEventListener("click", ()=>{
     list.style.display="none"
    navi.style.display="block"
})


    
    
   
   