let ham = document.querySelector(".ham-icon");
let closebtn = document.querySelector(".close-btn");
let navigat = document.querySelector(".navigation");

ham.addEventListener("click" ,  ()=>{
    navigat.style.display="flex"
    closebtn.style.display="flex"
    ham.style.display="none"
    
})

closebtn.addEventListener("click" ,  ()=>{
    navigat.style.display="none"
    closebtn.style.display="none"
    ham.style.display="flex"
    
})
