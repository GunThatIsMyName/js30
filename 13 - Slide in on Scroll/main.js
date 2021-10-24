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

const slideIn = document.querySelectorAll(".slide-in");

const handleScroll=(e)=>{
    // console.log(window.scrollY)
    // console.log(window.innerHeight,"@")
    slideIn.forEach((item,idx)=>{
        const positionAt = (window.scrollY+window.innerHeight)+item.height/2;
        const imageBottom = item.offsetTop +(item.height);
        const isHalfShown=positionAt>item.offsetTop;
        const isNotPassed=window.scrollY<imageBottom
        if(isHalfShown&&isNotPassed){
            item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    })
}

window.addEventListener("scroll",debounce(handleScroll))