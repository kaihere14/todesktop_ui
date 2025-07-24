const bar = document.querySelector('.bar');
const i = document.querySelector('.bar i')
const menue = document.querySelector('.mob-menue');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')
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
    let ticking = false;

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const observer = new IntersectionObserver(intersectionCallback);
    observer.observe(element);

    function scrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
                if (isLTR) {
                    element.style.transform = `translateX(${translateX}px)`;
                } else {
                    element.style.transform = `translateX(-${translateX}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }
}

setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
setUpIntersectionObserver(line4, true, 0.45);


const dt = document.querySelectorAll('dt')

let status = false;

dt.forEach(element=>{
    element.addEventListener('click',()=>{
        const dt_aria = element.getAttribute('aria-controls')
        const dd = document.getElementById(dt_aria)
        let one  = element.querySelectorAll('i')[0];
        dd.classList.toggle('hidden')
        one.classList.toggle('-rotate-180')
    })  
})