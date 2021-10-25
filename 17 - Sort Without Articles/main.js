const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// const removeArticle=(title)=>{
//     let words = title.split(" ");
//     if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' ){
//         return words.splice(1).join(" ");
//     }
//     return title;
// }

// const alphabet = bands.sort((a,b)=>{
//     const aTitle=a.toLowerCase();
//     const bTitle=b.toLowerCase();
//     const aRemoveArticle = removeArticle(aTitle)
//     const bRemoveArticle = removeArticle(bTitle)
//     return aRemoveArticle > bRemoveArticle? 1:-1;
// })

// console.log(alphabet,"alphabet")

// const strap=(title)=>{
//     return title.replace(/^(a |the |an )/i,"").trim();
// }

// const leopold = bands.sort((a,b)=>{
//     return strap(a)>strap(b)?1:-1;
// })
// document.querySelector("#bands").innerHTML=leopold.map(item=>{
//     return `<li>${item}</li>`
// }).join("");
// console.log(leopold,"leopold")

filtering=(text)=>{
    let words = text.split(" ");
    if(words[0]==="the" || words[0]==="a" || words[0]==="an"){
        console.log(words)
        // return words.splice(1).join(" ");
        return words.splice(1).join(" ");
    }
    return text
}

const mac = bands.sort((a,b)=>{
    const A=a.toLowerCase()
    const B=b.toLowerCase()
    const filterA=filtering(A)
    const filterB=filtering(B)

    return filterA>filterB?1:-1;
})


const strap=(title)=>{
    return title.replace(/^(a |the |an )/i,"").trim();
}

// return title.replace(/^(a |the |an )/i,"").trim();

const macc = bands.sort((a,b)=>{
    return strap(a)>strap(b)?1:-1
})
console.log(macc)