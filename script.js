const bar = document.querySelector('.bar');
const i = document.querySelector('.bar i')
const menue = document.querySelector('.mob-menue');

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