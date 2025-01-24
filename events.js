const navi = document.getElementById("navi");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
const sec = document.getElementById("sec");
const times = document.querySelectorAll(".times");
const reDirect = document.querySelectorAll(".redirect")

reDirect.forEach(element => {
    element.addEventListener("click", function(){
        window.location.href = './index.html';
        
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
sec.addEventListener("click", ()=>{
     list.style.display="none"
    navi.style.display="block"
})


    
    
   
   