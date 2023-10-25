// header 시작
let enableClick = false;
const gnb = document.querySelector("#gnb");
const menus = gnb.querySelectorAll("span");

const articles = document.querySelectorAll("section article");
const article_top = [];
articles.forEach((el)=>{
    article_top.push(el.offsetTop);
})

const scrolling = window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    article_top.forEach((el, index) => {
        if(scroll >= el){
            for (const ele of menus) {
                ele.classList.remove("on");
            }
            menus[index].classList.add("on");
        } 

    })

}) 

menus.forEach((el, index) => {
    el.addEventListener("click", ()=>{
        if(enableClick) return;
        enableClick = true;
        window.scrollTo({top : article_top[index], behavior : "smooth"});
        setTimeout(() => {
            enableClick = false;
        }, 500);
    })
})


//header 끝

// resume 시작

const tabs = document.querySelectorAll(".resume .tab");
let resumeIdx = 0;

tabs.forEach((el, index) => {
    el.addEventListener("click", ()=>{
        if(resumeIdx !== -1) tabs[resumeIdx].classList.remove("active");
        if(resumeIdx === index){
            el.classList.remove("active");
            resumeIdx = -1;
        } 
        else{
            el.classList.add("active");
            resumeIdx = index;
        }
    })
})

// resume 끝

// skills 시작
const skillsTop = document.querySelector(".skills").offsetTop;
const bars = document.querySelectorAll(".skills .bar");
let skill = false;
window.addEventListener("scroll", ()=>{
    if(window.scrollY + 500 > skillsTop && !skill) progressBar();
})
function progressBar (){
    skill = true;
    bars.forEach((el) =>{
        let progress = el.querySelector(".progress");
        let num = parseInt(progress.innerHTML);
        let count = 0;
        let time = 2000 / num;
        let interval = setInterval(() => {
            if(num == count){
                clearInterval(interval);
            }else{
                count++;
                progress.style.width = `${count}%`
                progress.innerText = `${count}%`;
            }
        }, time);

        progress.style.width = `${parseInt(progress.innerHTML)}`

    })
}


// skills 끝

//projects 시작

const projects = document.querySelector(".projects");
const panel = projects.querySelector(".panel");
const prev = projects.querySelector(".prevBtn");
const next = projects.querySelector(".nextBtn");
let x = 0;
prev.addEventListener("click", ()=> {
    if(x === 0) return;
    x += 25;
    slide(x);
})
next.addEventListener("click", ()=> {
    if(x === -75) return;
    x -= 25;
    slide(x);
})

function slide(x){
    panel.style.transform = `translateX(${x}%)`;
}


//projects 끝

