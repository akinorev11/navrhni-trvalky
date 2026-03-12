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

let shuffled=[...plants].sort(()=>0.5-Math.random());

let selected=shuffled.slice(0,4);

let plantHTML="";

selected.forEach(p=>{

plantHTML+=`

<div class="card">
<img src="${p.img}">
<h3>${p.cz}</h3>
<p>${p.lat}</p>
</div>
`;

});

document.getElementById("plants").innerHTML=plantHTML;

let planHTML="";

for(let i=0;i<15;i++){

let p=selected[i%selected.length];

planHTML+=`

<div class="cell">
<img src="${p.img}">
<div>${p.cz.split(" ")[0]}</div>
</div>
`;

}

document.getElementById("plan").innerHTML=planHTML;

}

