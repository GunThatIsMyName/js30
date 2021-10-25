const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

const Walk = 100;

const handleMove=(e)=>{
    const {offsetX:X,offsetY:Y}=e;
    const {clientWidth:XX,clientHeight:YY}=e.target;

    const Xwalk = Math.round((X/XX)*Walk-(Walk/2));
    const Ywalk = Math.round((Y/YY)*Walk-(Walk/2));

    console.log(Xwalk,Ywalk)
    text.style.textShadow=`
        ${Xwalk}px ${Ywalk}px 0 rgba(255,0,255,0.7),
        ${Xwalk * -1}px ${Ywalk}px 0 rgba(0,255,255,0.7)
    `;

}
const handleLeave=()=>{
    text.style.textShadow=`
    10px 10px 0 rgba(255,0,255,0.7),
    11px 11px 0 rgba(0,255,255,0.7)
`;
}
hero.addEventListener("mousemove",handleMove)
hero.addEventListener("mouseleave",handleLeave)
