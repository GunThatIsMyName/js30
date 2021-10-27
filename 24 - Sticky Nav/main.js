

const navbar = document.getElementById('main');

const toNavbarHeight = navbar.offsetTop;

const handleScroll = () => {
  if (window.scrollY > toNavbarHeight) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
};
window.addEventListener('scroll', handleScroll);