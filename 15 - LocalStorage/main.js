const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const ITEMS_LS="ITEMLOCAL"

const items = JSON.parse(localStorage.getItem(ITEMS_LS)) || [];

const handleSubmit = (e) => {
  const text = addItems.querySelector("[name=item]");
  e.preventDefault();
  const item = {
    text: text.value,
    done: false,
  };
  items.push(item);
  placeItem(items, itemsList);
  saveToLoca(items)
  text.value = "";
};

const handleClick=(e)=>{
    if(!e.target.matches("input"))return;
    console.log(e.target.dataset.index)
    const index = e.target.dataset.index;
    items[index].done =!items[index].done; 
    saveToLoca(items)
}
const saveToLoca=(item)=>{
    localStorage.setItem(ITEMS_LS,JSON.stringify(item))
}
const placeItem = (place = [], placeList) => {
    if(place.length < 1){
        return `<li>Loading Tapas...</li>`
    }
  placeList.innerHTML = place.map((item,idx) =>{
      return `<li id=${idx}>
        <input  type="checkbox" data-index=${idx} id="item${idx}" ${item.done?"checked":""} />
        <label for="item${idx}">${item.text}</label>
      </li>`
  }).join("");
};

const init =()=>{
    placeItem(items,itemsList)
}

addItems.addEventListener("submit", handleSubmit);
itemsList.addEventListener("click",handleClick)
init()