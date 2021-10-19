const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


const cites = [];

const get = async ()=>{
    const data = await (await fetch(endpoint)).json();
    const hello = cites.push(...data)
    return hello;
}

const init = ()=>{
  get()
}
init()


const findData = (search)=>{
  const filterdData = cites.filter(city=>{
      const searchTerm = new RegExp(search,"gi")
      return getCity = city.city.match(searchTerm)|| city.state.match(searchTerm)
    })
  return filterdData
}

const numberWithCommas=(x)=> {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const handleChange = (e)=>{
  const {value} = e.target
  const getData= findData(value)
  const html = getData.map(item=>{
    const searchData = new RegExp(value,"gi");
    const cityName = item.city.replace(searchData,`<span class="hl">${value}</span>`)
    const stateName = item.state.replace(searchData,`<span class="hl">${value}</span>`)
    return `
      <li>
        <span class="name" >${cityName} ,${stateName} </span>
        <span class="population" >${numberWithCommas(item.population)}</span>
      </li>
    `;
  }).join("")
  suggestions.innerHTML = html
}

search.addEventListener("input",handleChange)