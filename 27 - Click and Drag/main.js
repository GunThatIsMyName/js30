const items = document.querySelector(".items");

let isDown = false;
let startX;
let scrollTo;

const downFalse = () => (isDown = false);
const handleMove = () => {
  if (!isDown) return;
  console.log("down");
};
const handleLeave = () => {
  downFalse();
  items.classList.remove("active")
};
const handleDown = (e) => {
  isDown = true;
  items.classList.add("active")
  items.scrollLeft+=100;
};
const handleUp = (e) => {
  downFalse();
  items.classList.remove("active")
//   console.log(moveMent)

};

items.addEventListener("mouseleave", handleLeave);
items.addEventListener("mousemove", handleMove);
items.addEventListener("mousedown", handleDown);
items.addEventListener("mouseup", handleUp);
