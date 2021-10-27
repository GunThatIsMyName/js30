"strict mode";

const list = document.querySelectorAll(".cool>li");
const dropdown = document.querySelector(".dropdownBackground");
const navTop = document.querySelector(".top");

const navRect = navTop.getBoundingClientRect();

const handleEnter = (e) => {
  e.target.classList.add("trigger-enter");
  setTimeout(() => {
    e.target.classList.contains("trigger-enter") &&
      e.target.classList.add("trigger-enter-active");
  }, 150);
  dropdown.classList.add("open");
  const dropBack = e.target.querySelector(".dropdown");
  const backSize = dropBack.getBoundingClientRect();
  const coords = {
    height: backSize.height,
    width: backSize.width,
    left: backSize.left - navRect.left,
    top: navRect.height,
  };
  console.log(coords);
  dropdown.style.width = `${coords.width}px`;
  dropdown.style.height = `${coords.height}px`;
  dropdown.style.top = `${coords.top}px`;
  dropdown.style.left = `${coords.left}px`;
};
const handleLeave = (e) => {
  e.target.classList.remove("trigger-enter", "trigger-enter-active");
  dropdown.classList.remove("open");
};

list.forEach((item) => item.addEventListener("mouseenter", handleEnter));
list.forEach((item) => item.addEventListener("mouseleave", handleLeave));
