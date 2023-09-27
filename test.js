
let chapters = {
    intro : {
       
        titre: "Que la force soit avec toi", 
        
        description: "Vous, Anakin Skywalker venez tout juste de recevoir un mission d'importance capital, le chancelier c'est fait capturer en orbite. Votre Mission: Infiltrer et extraire le chancelier.",
        image: "",
        bouton: [{titre: 'Continuer', 'destination': 'Type goToChapter("debut")'}, ] 
    
    },

    debut : {
        titre: "C'est partie",
        description: "Vous et Obi-Wan Kenobi prenez chacun un vaisseaux afin d'infiltrer le vaisseau en orbite.",
        image: "",
        bouton: [
            {titre: 'Atterir vaisseaux par trou dans la coque du vaisseau', 'destination': 'Type goToChapter("Impact")'}, 
            {titre: 'Foncer dans le Hanguar', 'destination': 'Type goToChapter("Atterir")'} ]
    },

    Atterir : {
        titre: "Vous attérisez dans le hanguar",
        description: "Vous détruisez tous les droides sur votre chemin. Vous devez maintenant vous dirigez vers le cockpit.",
        image: "",
        bouton: [
        {titre: 'Aller dans le couloir', 'destination': 'Couloir'}, 
        {titre: 'Aller dans le bureau de sécurité', 'destination': 'Type goToChapter("Information")'},
        {titre: "Prendre l'ascenceur", 'destination': 'Type goToChapter("Ascenceur")'}
    ]
    },
    
    Ascenceur : {
        titre: "Vous attendez tranquillement dans l'ascenceur",
        description: "A mi-chemin l'ascenceur bloque et vous êtes coincé",
        image: "",
        bouton: [
            {titre: 'Forcez les portes', 'destination': 'Type goToChapter("ForcezAscenceur")'}, 
            {titre: "Passez par dessus l'ascenceur", 'destination': 'Type goToChapter("Cockpit")'},
        ]
    },
    //Trouver l'info
    Information : {
        titre: "Vous trouvez l'information!",
        description: "Vous regardez les caméras du cockpit et découvrez que le chancelier est un traitre et que sa vraie identité est Darth Sidious ",
        image: "",
        bouton: [
            {titre: 'Prendre le couloir', 'destination': 'Type goToChapter("Couloir")'}, 
            {titre: "Prendre l'ascenceur", 'destination': 'Type goToChapter("Ascenceur")'}
    ]
    },
    //Rentrer dans le cockpit
    Cockpit : {
        titre: "Vous entrez dans le cockpit du vaisseau",
        description: "Lorsque vous entrez dans le cockpit vous remarqué que le Chancelier est enchainé sur la chaise du capitaine, il est tenu en otage par Dooku et ses guardes.",
        image: "",
        bouton: [
            {titre: "Continuer", 'destination': 'Type goToChapter("Dooku")'}
        ]
    },
    //Combatre Dooku1
    Dooku : {
        titre: "Dooku vous engage en combat",
        description: "Vous et votre Maître Kenobi affrontez dans le Compte Dooku dans un combat intense",
        image: "video 1",
        bouton: [
            {titre: "Continuer", 'destination': 'Type goToChapter("Combat")'}
        ]
    },
    //Combatre Dooku2
    Combat : {
        titre: "C'est le temps d'en finir",
        description: "Dooku met Kenobi hors d'état de combattre, vous affrontez Dooku en solo avec rage et férocitez et parvenez a le battre. Maintenant que faites vous",
        image: "",
        bouton: [
            {titre: 'Exécuter Dooku pour ses crimes', 'destination': 'Type goToChapter("Justice")'}, 
            {titre: "L'arrêter pour ses crimes", 'destination': 'Type goToChapter("Arrestation")'},
            {titre: "Éliminer Sidious", 'destination': 'Type goToChapter("Traitre")'}
        ]
    },
    //Perdre
    Justice : {
        titre: "Vous exécutez le compte Dooku et mettez fin a la guerre",
        description: "Lors de votre arrivé au temple, vous êtes acceuilies en héros, jusqu'a ce que l'ordre 66 soit ordonné par le Chancelier Palpatine/Darth Sidious. Tous les Jedis de la Galaxie meurt, incluant vous.",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("Intro")'}
        ]
    },
    //Victoire
    Traitre : {
        titre: "The Chosen One",
        description: "Grace a l'information trouvée plus tôt vous décidez d'en finir une fois pour toute et d'exterminer les siths de la Galaxie. Vous vous retournez et exécuter le chancelier encore monoté à son siège, puis vous rendez la pareil a Dooku pour ses crimes comis contre la galaxie.",
        image: "",
        bouton: [
            {titre: "Vous Gagnez", 'destination': 'Type goToChapter("Outro")'}
        ]
    },
    //Outro
    Outro : {
        titre: "The Chosen One",
        description: "Maitenant que les Siths et leurs plans ont été définitivement exterminer de la galaxie, la République peut afin renaître a son plein potentiel. Pour votre courage et service rendu a la galaxie, vous êtes attribuer le rang de Maître Jedi ainsi que d'une reconnaissance éternel a travers tous les systemes occupés.",
        image: "",
        bouton: []
    },

    //Mort
    Impact : {
        titre: "Vous mourrez",
        description: "Vous vous écrasez dans le vaisseau et mourrez a l'impact",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("Intro")'}
        ]
    },
    //Mort
    Couloir: {
        titre: "Vous mourrez",
        description: "Des droides vous prennent en ambuscade, ils sont trop nombreux  pour vous.",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("Intro")'}
        ]
    },
    //Mort
    ForcezAscenceur : {
        titre: "Vous mourrez",
        description: "Dès que vous entre-ouvrez les portes, une escadron de droide vous brule vivant avec des lance-flammes",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("Intro")'}
        ]
    },
    //Mort
    Arrestation : {
        titre: "Trahison",
        description: "Lors de l'arrestation Dooku vous dévoile que le chancelier est Darth Sidious, mais il est trop tard. Le chancelier en question vous prend par surprise et extermine toutes les personnes présentes dans la pièces",
        image: "",
        bouton: [
            {titre: "Recommencez", 'destination': 'Type goToChapter("Intro")'}
        ]
    },


}


function goToChapter(chapter) {
    if(chapter){
        console.log(`${chapters[chapter].titre}`);
        console.log(`${chapters[chapter].description}`);
        console.log("options:")
        for (const i in chapters[chapter].bouton) {
            console.log(`--> ${chapters[chapter].bouton[i].titre} \n ${chapters[chapter].bouton[i].destination} `)
        }
    }else {
        console.log("Chemin existe pas")
    };
};

goToChapter("intro")