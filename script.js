const navi = document.getElementById("navi");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
const sec = document.getElementById("sec");
const times = document.querySelectorAll(".times");

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
sec.addEventListener("click", ()=>{
     list.style.display="none"
    navi.style.display="block"
})

// time
function updateTime() {
   
    const targetDate = new Date('2025-01-20T23:59:59'); // Set your target date here
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const timeArr = [days, hours, minutes, seconds]
    for(let i=0 ; i< times.length; i++){
        times[i].textContent = timeArr[i]
    }
    for(let i=0 ; i< times.length; i++){
    if(times[i].textContent < '0'){
        times[i].textContent =  '0'
    }

}
}
setInterval(updateTime, 1000);
updateTime()

for(let i=0 ; i< times.length; i++){
    if(times[i].textContent == '-1'){
        times[i].textContent = "0"
    }
    else{
        
    }
}
    
    
   
   