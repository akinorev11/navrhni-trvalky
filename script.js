const plants=[

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
lat:"Calamagrostis 'Karl Foerster'",
img:"img/calamagrostis.jpg",
layer:"back"
}

];



function navrhni(){

let sirka=document.getElementById("sirka").value;
let delka=document.getElementById("delka").value;

let plocha=sirka*delka;

let shuffled=[...plants].sort(()=>Math.random()-0.5);


let front=shuffled.filter(p=>p.layer==="front")[0];
let middle=shuffled.filter(p=>p.layer==="middle").slice(0,2);
let back=shuffled.filter(p=>p.layer==="back")[0];

let selected=[front,...middle,back];



let plantHTML="";

selected.forEach(p=>{

let count=Math.round((plocha*5)/selected.length);

plantHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.cz}</h3>

<p>${p.lat}</p>

<p>Počet: ${count} ks</p>

</div>

`;

});

document.getElementById("plants").innerHTML=plantHTML;



let planHTML="";

selected.forEach(p=>{

let count=6;

if(p.layer==="middle") count=8;
if(p.layer==="back") count=4;

for(let i=0;i<count;i++){

planHTML+=`

<div class="plant">

<img src="${p.img}">

<div class="plant-name">${p.cz.split(" ")[0]}</div>

</div>

`;

}

});

document.getElementById("plan").innerHTML=planHTML;

}
