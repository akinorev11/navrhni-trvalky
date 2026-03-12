const plants = [

{
cz:"Levandule úzkolistá",
lat:"Lavandula angustifolia 'Hidcote'",
img:"img/lavandula.jpg",
layer:"front"
},

{
cz:"Šanta kočičí",
lat:"Nepeta × faassenii 'Walker's Low'",
img:"img/nepeta.jpg",
layer:"front"
},

{
cz:"Šalvěj hajní",
lat:"Salvia nemorosa 'Caradonna'",
img:"img/salvia.jpg",
layer:"middle"
},

{
cz:"Třapatka nachová",
lat:"Echinacea purpurea 'Magnus'",
img:"img/echinacea.jpg",
layer:"middle"
},

{
cz:"Dochan psárkovitý",
lat:"Pennisetum alopecuroides 'Hameln'",
img:"img/pennisetum.jpg",
layer:"back"
},

{
cz:"Třtina ostrokvětá",
lat:"Calamagrostis × acutiflora 'Karl Foerster'",
img:"img/calamagrostis.jpg",
layer:"back"
}

];


function navrhni(){

// náhodné zamíchání rostlin
let shuffled=[...plants].sort(()=>Math.random()-0.5);

// výběr rostlin podle vrstev
let front=shuffled.filter(p=>p.layer==="front").slice(0,1);
let middle=shuffled.filter(p=>p.layer==="middle").slice(0,2);
let back=shuffled.filter(p=>p.layer==="back").slice(0,1);

let selected=[...front,...middle,...back];


// ------------------------------------------------
// KARTY ROSTLIN
// ------------------------------------------------

let plantHTML="";

selected.forEach(p=>{

plantHTML+=`
<div class="card">

<img src="${p.img}" alt="${p.cz}">

<h3>${p.cz}</h3>

<p class="latin">${p.lat}</p>

</div>
`;

});

let plantsContainer=document.getElementById("plants");

if(plantsContainer){
plantsContainer.innerHTML=plantHTML;
}



// ------------------------------------------------
// VIZUALIZACE ZÁHONU
// ------------------------------------------------

let planHTML="";

selected.forEach(p=>{

let count=4;

if(p.layer==="middle") count=5;
if(p.layer==="back") count=3;

for(let i=0;i<count;i++){

planHTML+=`

<div class="cell">

<img src="${p.img}" alt="${p.cz}">

<div class="label">${p.cz.split(" ")[0]}</div>

</div>

`;

}

});

let planContainer=document.getElementById("plan");

if(planContainer){
planContainer.innerHTML=planHTML;
}

}
