
let chapters = {
    intro : {
       
        titre: "Que la force soit avec toi", 
        
        description: "Vous, Anakin Skywalker venez tout juste de recevoir un mission d'importance capital, le chancelier c'est fait capturer en orbite. Votre Mission: Infiltrer et extraire le chancelier.",
        image: "",
        bouton: [{titre: 'Continuer', 'destination': 'Type goToChapter("debut")'}, ] 
    
    },

    debut : {
        titre: "C'est parti",
        description: "Vous et Obi-Wan Kenobi prenez chacun un vaisseau afin d'infiltrer le vaisseau en orbite.",
        image: "",
        bouton: [
            {titre: 'Atterrir vaisseaux par trou dans la coque du vaisseau', 'destination': 'Type goToChapter("trou")'}, 
            {titre: 'Foncer dans le Hanguar', 'destination': 'Type goToChapter("atterir")'} ]
    },

    atterir : {
        titre: "Vous atterrissez dans le hangar",
        description: "Vous détruisez tous les droïdes sur votre chemin. Vous devez maintenant vous dirigez vers le cockpit.",
        image: "",
        bouton: [
        {titre: 'Aller dans le couloir', 'destination': 'couloir'}, 
        {titre: 'Aller dans le bureau de sécurité', 'destination': 'Type goToChapter("bureau")'},
        {titre: "Prendre l'ascenseur", 'destination': 'Type goToChapter("ascenseur")'}
    ]
    },
    
    ascenseur : {
        titre: "Vous attendez tranquillement dans l'ascenseur",
        description: "À mi-chemin l'ascenseur bloque et vous êtes coincé",
        image: "",
        bouton: [
            {titre: 'Forcez les portes', 'destination': 'Type goToChapter("forcez")'}, 
            {titre: "Passez par-dessus l'ascenseur", 'destination': 'Type goToChapter("cockpit")'},
        ]
    },
    //Trouver l'info
    bureau : {
        titre: "Vous trouvez l'information!",
        description: "Vous regardez les caméras du cockpit et découvrez que le chancelier est un traitre et que sa vraie identité est Darth Sidious ",
        image: "",
        bouton: [
            {titre: 'Prendre le couloir', 'destination': 'Type goToChapter("couloir")'}, 
            {titre: "Prendre l'ascenseur", 'destination': 'Type goToChapter("ascenceur")'}
    ]
    },
    //Rentrer dans le cockpit
    cockpit : {
        titre: "Vous entrez dans le cockpit du vaisseau",
        description: "Lorsque vous entrez dans le cockpit vous remarquer que le Chancelier est enchainé sur la chaise du capitaine, il est tenu en otage par Dooku et ses gardes.",
        image: "",
        bouton: [
            {titre: "Continuer", 'destination': 'Type goToChapter("dooku")'}
        ]
    },
    //Combatre Dooku1
    dooku : {
        titre: "Dooku vous engage en combat",
        description: "Vous et votre Maître Kenobi affrontez le Compte Dooku dans un combat intense",
        image: "video 1",
        bouton: [
            {titre: "Continuer", 'destination': 'Type goToChapter("combat")'}
        ]
    },
    //Combatre Dooku2
    combat : {
        titre: "C'est le temps d'en finir",
        description: "Dooku met Kenobi hors d'état de combattre, vous affrontez Dooku en solo avec rage et férocité et parvenez a le battre. Maintenant que faites-vous",
        image: "",
        bouton: [
            {titre: 'Exécuter Dooku pour ses crimes', 'destination': 'Type goToChapter("justice")'}, 
            {titre: "L'arrêter pour ses crimes", 'destination': 'Type goToChapter("arrestation")'},
            
        ]
    },
    //Perdre
    justice : {
        titre: "Vous exécutez le compte Dooku et mettez fin a la guerre",
        description: "Lors de votre arrivé au temple, vous êtes accueillis en héros, jusqu'à ce que l'ordre 66 soit ordonné par le Chancelier Palpatine/Darth Sidious. Tous les Jedis de la Galaxie meurent, incluant vous.",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("intro")'}
        ]
    },
    //Victoire
   traitre : {
        titre: "The Chosen One",
        description: "Grâce à l'information trouvée plus tôt, vous décidez d'en finir une fois pour toutes et d'exterminer les siths de la Galaxie. Vous vous retournez et exécuter le chancelier encore menotté à son siège, puis vous rendez la pareille a Dooku pour ses crimes commis contre la galaxie.",
        image: "",
        bouton: [
            {titre: "Vous Gagnez", 'destination': 'Type goToChapter("outro")'}
        ]
    },
    //Outro
    outro : {
        titre: "The Chosen One",
        description: "Maintenant que les Siths et leurs plans ont été définitivement exterminés de la galaxie, la République peut afin renaître a son plein potentiel. Pour votre courage et service rendu a la galaxie, vous êtes attribué le rang de Maître Jedi ainsi que d'une reconnaissance éternelle à travers tous les systèmes occupés.",
        image: "",
        bouton: []
    },

    //Mort
    trou : {
        titre: "Vous mourrez",
        description: "Vous vous écrasez dans le vaisseau et mourrez par l'impact",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("intro")'}
        ]
    },
    //Mort
    couloir: {
        titre: "Vous mourrez",
        description: "Des droïdes vous prennent en embuscade, ils sont trop nombreux  pour vous.",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("intro")'}
        ]
    },
    //Mort
    forcez : {
        titre: "Vous mourrez",
        description: "Dès que vous entrouvrez les portes, un escadron de droïde vous brule vivant avec des lance-flammes",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("intro")'}
        ]
    },
    //Mort
    arrestation : {
        titre: "Trahison",
        description: "Lors de l'arrestation, Dooku vous dévoile que le chancelier est Darth Sidious, mais il est trop tard. Le chancelier en question vous prend par surprise et extermine toutes les personnes présentes dans la pièce",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("intro")'}
        ]
    },


}

let information = false

function goToChapter(chapitre) {
    if(chapters[chapitre]){
        console.log(chapters[chapitre].titre);
        console.log(chapters[chapitre].description);
        console.log("Options:")
        if(chapitre === "bureau"){
            information = true
        }
        if(information == true){
            chapters.combat = chapters.combat2
            chapters.combat2 = {
                titre: "C'est le temps d'en finir",
                description: "Dooku met Kenobi hors d'état de combattre, vous affrontez Dooku en solo avec rage et férocité et parvenez a le battre. Maintenant que faites-vous",
                image: "",
                bouton: [
                    {titre: 'Exécuter Dooku pour ses crimes', 'destination': 'Type goToChapter("justice")'}, 
                    {titre: "L'arrêter pour ses crimes", 'destination': 'Type goToChapter("arrestation")'},
                    {titre: "Éliminez Sidious", 'destination': 'Type goToChapter("traitre")'}
                ]
            }
        }
        
        for (const i in chapters[chapitre].bouton) {
            console.log(`-->> ${chapters[chapitre].bouton[i].titre} \n ${chapters[chapitre].bouton[i].destination} `)
        }
    }else {
        console.log(`Bruh apprend à écrire`)
    };
};

goToChapter("intro")
