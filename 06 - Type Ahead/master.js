const endpoint ="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const search = document.querySelector(".serach");
const list = document.querySelector(".list");
const cities = [];

const getData = async()=>{
    const data = await (await fetch(endpoint)).json();
    return cities.push(...data)
}

const matchWithSearch=(data)=>{
    return cities.filter(city=>{
        const searchTerm = new RegExp(data,"gi")
        const hoxy = city.city.match(searchTerm) || city.state.match(searchTerm)
        return hoxy;
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const handleSearch = (e)=>{
    const getCity = matchWithSearch(e.target.value)
    const html = getCity.map(item=>{
        const searchTerm = new RegExp(e.target.value,"gi");
        const searchedCity = item.city.replace(searchTerm,`<span class="hl">${e.target.value}</span>`)
        const searchedState = item.state.replace(searchTerm,`<span class="hl">${e.target.value}</span>`)
        return `
        <li class="list__item" >
            <span>${searchedCity}  , ${searchedState}</span>
            <span>${numberWithCommas(item.population)}</span>
        </li>
        `
    }).join("")
    list.innerHTML=html;
}

search.addEventListener("input",handleSearch)

const init=()=>{
    getData();
}
init()
