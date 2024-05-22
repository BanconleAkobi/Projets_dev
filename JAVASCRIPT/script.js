
/***********************1ère partie **************************
//Comment accéder une balise(élément) html

const h1 = document.querySelector('h1');  
console.log(h1); 

const para= document.querySelector('p'); 
console.log(para);

//selectionner une class; 

const classe =document.querySelector('.erreur'); 
console.log(classe);

//ou on peut aussi faire clic droit et copier le query selector dans inspecter

//pour tout sélectionner ou prendre un n-ième
const tout=document.querySelectorAll('p');
console.log(tout);
console.log(tout[1]);

tout.forEach(para=>{
    console.log(para)
})
*/



/*********************************2eme partie ***********************
//Get element By ID

const titre=document.getElementById('titre-principale'); 
console.log(titre); 

const titre2=document.getElementById('titre-secondaire'); 
console.log(titre2); 

//Get elements by class name  , il y a s car on peut avoir plusieurs element ayant la meme classe
const paras= document.getElementsByClassName('p');
console.log(paras); 
const element = document.getElementsByClassName('contenu'); 
console.log(element); 

//get elements by tag name

const tags=document.getElementsByTagName('h1'); 
console.log(tags[1]);
*/

/*********************************3eme partie **********************

const h1 = document.querySelector('.contenu');
let text =h1.innerText; 
const maj =text.toUpperCase(); 
console.log(maj); 
h1.innerText=maj; 

//recuperer l'element html via une htlk
const div = document.querySelector('.contenu');
console.log(div.innerHTML);

const personnes =['banconle', 'AKOBI', 'Ismaeil']; 
personnes.forEach(personne =>{
    div.innerHTML+= `<p> ${personne}</p>`; 
})
console.log(div.innerHTML);


//creer un element
const link = document.createElement('a'); 
link.href ='https://google.com'; 
link.innerText ='Aller à Google'; 
const body=document.querySelector('body'); 
//ajouter à la fin
body.appendChild(link); 


*/

/*********************************3eme partie *********************

//recuper des atttributs ou recuperer des attribuer


const lien = document.querySelector('a'); 
const att = lien.getAttribute('href'); 
lien.setAttribute('href', 'https://bproo.fr')
lien.innerText='Aller à bproo.fr '
console.log(att);


const h1= document.querySelector('h1'); 
h1.setAttribute('style','color:blue; font-size:40px' ); 

//autremethode d'ajout de css
h1.style.color = 'red';
//mais ici on me met pas de tiret
h1.style.textTransform='uppercase';  
*/







/******************mini projet*************** 

//ajouter des class: p.classList: retourne toute les classes mais pour ajouter on fait P.classList.add(); 

const p=document.querySelector('p'); 
const myClassList =['error', 'succes', 'attention']; 

let index =0;

changeClass=() => {
    console.log(index); 
    if(index > myClassList.length-1){
        index=0; 
        p.setAttribute("class", ""); 
        p.classList.add(myClassList[index]); 
    }
    p.classList.add(myClassList[index]); 
    index++; 
}

//exectuer une fonction apres un certain nombre de temps; 
// setTimeOut(function, temps); 
//ecuter une fonction à intervalle t: 

setInterval(changeClass, 2000); //2ms
*/

/*******autre mini **********
const list_para=document.querySelectorAll('p'); 
list_para.forEach((p)=>{
    if(p.innerText.includes('erreur')){
       p.classList.add('error'); 
    }
    if(p.innerText.includes('succes')){
        p.classList.add('succes'); 
     }
     if(p.innerText.includes('attention')){
        p.classList.add('attention'); 
     }
})
*/

/************10 astuces JS*********************

//spread operator

let condition = true; 

let personne ={
    id: 1, 
    nom:'AKOBI',
    ...(condition &&{age: 25})// si condition verifiée c'est bon sinon n'affiche  pas
}
console.log(personne); 


//verifier si un propriete existe dans un objet
let perso={
    nom:'kamdjou', 
    salaire: 10000
}

console.log('salaire' in perso); //retorune vrai si ca contient
//ajouter un nom de propriétés de facon dynamique dans un objet
const dynamic='favorite'; 

let item={
    nom: 'Biscuit',
    [dynamic]:'Chocolat'
}

console.log(item);

//desctructurer les proprites d'un objet javascript

const person ={id: 1,
     name: 'John Doe'}; 

const {id, name}=person//on creer  des variables qui derivent des propriétés. 
console.log(id) ; //affichage car ca été destructurer
console.log(person); 


// nullish coalescing operateur: ??
const foo = null ?? 'Hello'; //donc elle evalue ce qui est à gauche et si cette valeur est null ou undifined, ca retourne la valeur à droite sinon elle retourne la valeur elle meme
console.log(foo); 
const bar = 'Not null' ?? 'Hello'; 


//chainage optionnel:  ?.

const book={ 
    id:1,
    title: 'Title', 
    author: null
}

console.log(book.author?.age); // si age existe sous author , si oui on retourne le city sinon on retourne undefined

const person={
    firstName:'bANCONLE', 
    lastName: 'AKOBI', 
    printName: function(){
        return `$(this.firstName) ${this.lastName}`;
    }
}

console.log(person.doesNotExist?.() ); 

//double exclamation operator !! convertir expression en un booleane
const greeting='hello'; 
console.log(!!greeting); 
const noGreeting=''; 
console.log(!!noGreeting); 

//converir chaine et entier  donc si c'est une chaine en nombre, suffit de mettre un plus à coté pour qu'il devienne un +

const stringNumber ='123'; 
console.log(+stringNumber); 
console.log(typeof +stringNumber); 

//convertir nombre en chaine: ajouter +''
const myString =25 +''; 
console.log(typeof myString); 
*/
// verifier fausses d'un tableau : 

//methodes filter(), some(), every()

const monArray=[null, false, 'Hello', undefined, 0] ;

console.log(monArray.filter(Boolean));//verfier celui qui est vrai
console.log(monArray.some(Boolean));//retourne si au moins une qui vrai
console.log(monArray.every(Boolean)); //retourne vrai si tout est vrai, faux sinon. 

//aplatir un tableau,, on fait :  tableau.flat(); 

