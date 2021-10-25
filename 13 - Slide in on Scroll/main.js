function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        var context = this,
        args = arguments;
        var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const imageList=document.querySelectorAll(".slide-in");
const handleScroll=()=>{
    const {scrollY,innerHeight} =window;
    imageList.forEach(item=>{
        const {offsetTop,height}=item;
        const isAboveBottomLine = (scrollY+innerHeight) >= offsetTop+(height/2);
        const isNotPassedTopLine = scrollY < offsetTop+height;
        if(isAboveBottomLine&&isNotPassedTopLine ){
            item.classList.add("active")
        }else{
            item.classList.remove("active")
        }
    })
}

window.addEventListener("scroll",debounce(handleScroll))