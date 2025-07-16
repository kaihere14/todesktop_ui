const bar = document.querySelector('.bar');
const i = document.querySelector('.bar i')
const menue = document.querySelector('.mob-menue');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
let view = true;

bar.addEventListener('click',()=>{
    if(view){
       menue.style.display = "block";
       view = false;
       i.classList.remove("fa-bars")
       i.classList.add("fa-xmark")
    }else{
        menue.style.display = "none";
        view = true;
        i.classList.add("fa-bars")
       i.classList.remove("fa-xmark")
    }
})

window.addEventListener('resize',()=>{
    const width = window.innerWidth;
    if(width>=1010){
        menue.style.display = "none";
        view =true
         i.classList.add("fa-bars")
       i.classList.remove("fa-xmark")
    }
})


function setUpIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler)
        }else{
            document.removeEventListener('scroll',scrollHandler)
        }
    };
    const observer = new IntersectionObserver(intersectionCallback);
    observer.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
        if(isLTR){
        element.style.transform= `translateX(${translateX}px)`
        }else{
            element.style.transform= `translateX(-${translateX}px)`
        }
    }
}

setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
