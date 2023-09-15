
/* Utilisez querySelector pour récupérer le premier élément ul
 puis affectez le contenu à une variable appelée ul*/

 let ul = document.querySelector("#list");

//**********Ajouter une note
document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
 
  let addInput = document.querySelector("#add-input")
if(addInput.value !== ""){
    const li = document.createElement("li");
    const para1 = document.createElement("p")
    const node = document.createTextNode(addInput.value)
    para1.appendChild(node)
    const para2 = document.createElement("p")
    const i = document.createElement("i");
    i.setAttribute("class", "fa fa-times");
    ul.appendChild(li);
    li.appendChild(para1);
    li.appendChild(para2);
    para2.appendChild(i);
    console.log('Hello');
    addInput.value = ""

}
  //**************à compléter**********
  //vérifier que addInput n'est pas vide
  // S'il n'est pas vide créer l'élément li ainsi que tous ses enfants et leurs attributs nécessaires 
  // Ajouter li à l'élément ul puis remettre addInput à une chaîne de caractères vide.
});



ul.addEventListener("click", function(e){
console.log("ok")
setTimeout(function(){if (e.target.classList[1] === "fa-times") {
  let list = e.target.parentNode.parentNode;
  ul.removeChild(list)
    }
  },2000)
})

//**********Supprimer une note
// Ajouter un événement de click de l'élément ul en utilisant addEventListener
// cet évènement déclenche une fonction ayant e comme paramètre : function(e) 
// comme ceci ....eventListener("click", function (e) {

//Ajouter ce qui suit dans la fonction déclenchée par l'eventListener:
  // e.target est l'element selectionné du DOM
 //   if (e.target.classList[1] === "fa-times") {
  //    let list = e.target.parentNode.parentNode;
    //*************supprimer l'élément list (utiliser list.parentNode pour avoir le parent de list)*************


    
    
    
    
    /*Ajouter La méthode setTimeout () pour que la suppression de note s'exécute après 2 secondes.*/
0