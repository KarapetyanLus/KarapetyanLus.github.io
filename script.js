const burgerMenu = document.querySelector(".burgerMenu");
const dropDownMenu = document.querySelector(".dropDownMenu");
const catalogMenuChoice =document.querySelector(".catalogMenuChoice");
const catalogMenu = document.querySelector(".catalogMenu");
const sliderPoint = document.querySelectorAll(".sliderPoint");
const user = document.querySelector(".user");
const userForm = document.querySelector(".userForm");
const closeBtn = document.querySelector(".closeBtn")
burgerMenu.addEventListener("click", ()=>{
    dropDownMenu.classList.toggle("show")
});
catalogMenu.addEventListener("click", ()=>{
    catalogMenuChoice.classList.toggle("showMenu")
});
user.addEventListener("click", ()=>{
    userForm.style.display = "block";
    userForm.classList.toggle("showForm");
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", ()=>{
    document.body.style.overflow = "unset"
    userForm.style.display = "none";   

})
const slideLeft = document.querySelector(".slideLeft");
const slideRigth = document.querySelector(".slideRigth");
const mainSlide = document.querySelector(".mainSlide");
let scroll = 0;
slideLeft.addEventListener("click", ()=> {
    clearInterval(myInterval)
    if (scroll <= 0) {
        scroll = mainSlide.clientWidth * (mainSlide.children.length - 1);
    } else {
        scroll -= mainSlide.clientWidth;
    }
    mainSlide.scrollTo({
        left: scroll,
        behavior: "smooth",
    })
});
function toRigth() {
    if (scroll >= mainSlide.clientWidth * (mainSlide.children.length - 1)) {
        scroll = 0;
    } else {
        scroll += mainSlide.clientWidth;
    }
    mainSlide.scrollTo({
        left: scroll,
        behavior: "smooth"
    })
}
slideRigth.addEventListener("click", ()=> { clearInterval(myInterval)})
slideLeft.addEventListener("click", toRigth)
const myInterval = setInterval(toRigth, 2000)


const completionTime = document.querySelector(".completionTime");



let coundDownDate = new Date("Jun 30, 2023").getTime();
const span = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const span4 = document.createElement("span");
let waitTime = setInterval(()=>{
    let nowDate = new Date().getTime();
    let distance = coundDownDate - nowDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
    completionTime.appendChild(span).innerHTML = `${days}`
    completionTime.appendChild(span2).innerHTML = `${hours}`
    completionTime.appendChild(span3).innerHTML = `${minutes}`
    completionTime.appendChild(span4).innerHTML = `${seconds}`


    
})

