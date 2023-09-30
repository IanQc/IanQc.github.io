//Copie de la final sauf que celle-ci utilise Prettier
//Cette page me servait de test pour mes gros code compliquer surtout pour la twist.


let chapters = {
	//Introduction
	intro: {
		titre: "Que la force soit avec toi",
		description:
			"Vous, Anakin Skywalker venez tout juste de recevoir une mission d'importance capital, le chancelier c'est fait capturer en orbite de Coruscant. Votre Mission: Infiltrer et extraire le chancelier de la République Galactique.",
		image: "./assets/jeux.jpeg",
		boutons: [{ titre: "Continuer", destination: function() {
            goToChapter("debut");
        },}],
	},
	//Chapitre2
	debut: {
		titre: "C'est parti",
		description:
			"Vous et Obi-Wan Kenobi prenez chacun un vaisseau afin d'infiltrer le vaisseau en orbite.",
		image: "./assets/images/debut.webp",
		boutons: [
			{
				titre: "Atterrir par un trou dans la coque du vaisseau",
				destination: function() {
					goToChapter("trou");
				},
			},
			{
				titre: "Foncer dans le Hanguar",
				destination: function() {
					goToChapter("atterir");
				},
			},
		],
	},
	//Chapitre3
	atterir: {
		titre: "Vous atterrissez dans le hangar",
		description:
			"Vous détruisez tous les droïdes sur votre chemin. Vous devez maintenant vous dirigez vers le cockpit.",
		image: "./assets/images/attérissage.webp",
		boutons: [
			{
				titre: "Aller dans le couloir",
				destination: function() {
					goToChapter("couloir");
				},
			},
			{
				titre: "Aller dans le bureau de sécurité",
				destination: function() {
					goToChapter("bureau");
				},
			},
			{
				titre: "Prendre l'ascenseur",
				destination: function() {
					goToChapter("ascenceur");
				},
			},
		],
	},
	//Chapitre4
	ascenceur: {
		titre: "Vous attendez tranquillement dans l'ascenseur",
		description: "À mi-chemin l'ascenseur bloque et vous êtes coincé",
		image: "./assets/images/ascenceur.jpg",
		boutons: [
			{ titre: "Forcez les portes", destination: function() {
				goToChapter("forcez");
			} },
			{
				titre: "Passez par-dessus l'ascenseur",
				destination: function() {
					goToChapter("fosse");
				},
			},
		],
	},
	//Chapitre Information Twist
	bureau: {
		titre: "Vous trouvez l'information!",
		description:
			"Vous regardez les caméras du cockpit et découvrez que le chancelier Palpatine est un traître et que sa vraie identité est Darth Sidious ",
		image: "./assets/images/information.jpg",
		boutons: [
			{
				titre: "Prendre le couloir",
				destination: function() {
					goToChapter("couloir");
				},
			},
			{
				titre: "Prendre l'ascenseur",
				destination: function() {
					goToChapter("ascenceur");
				},
			},
		],
	},
	//Chapitre6
	fosse: {
		titre: "Vous entrez dans le cockpit du vaisseau",
		description:
			"Lorsque vous y entrez, vous remarquer que le Chancelier est menotté sur la chaise du capitaine, il est tenu en otage par Dooku et ses gardes.",
		image: "./assets/images/cockpit.jpeg",
		boutons: [{ titre: "Continuer", destination: function() {
            goToChapter("dooku");
        } }],
	},
	//Chapitre7
	dooku: {
		titre: "Dooku vous engage en combat",
		description:
			"Vous et votre Maître Obi-Wan Kenobi affrontez le Compte Dooku dans un combat intense",
		video: "./assets/video/combat1.mov",
		boutons: [{ titre: "Continuer", destination: function() {
            goToChapter("combat");
        } }],
	},
	//Chapitre8
	combat: {
		titre: "C'est le temps d'en finir",
		description:
			"Dooku met Kenobi hors d'état de combattre, vous l'affrontez alors en solo avec rage et férocité et parvenez à le vaincre. Maintenant que faites-vous?",
		video: "./assets/video/combat2.mov",
		boutons: [
			{
				titre: "Exécuter Dooku pour ses crimes",
				destination: function() {
					goToChapter("justice");
				},
			},
			{
				titre: "L'arrêter pour ses crimes",
				destination: function() {
					goToChapter("arrestation");
				},
			},
		],
	},
	//Perdre
	justice: {
		titre: "Vous exécutez le compte Dooku et mettez fin à la guerre",
		description:
			"Lors de votre arrivé au temple, vous êtes accueillis en héros, jusqu'à ce que l'ordre 66 soit ordonné par le Chancelier Palpatine/Darth Sidious. Tous les Jedis de la Galaxie meurent, incluant vous.",
		image: "./assets/images/order66.jpg",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			}},
		],
	},
	//Victoire
	traitre: {
		titre: "The Chosen One",
		description:
			"Grâce à l'information trouvée plus tôt, vous décidez d'en finir une fois pour toutes et d'exterminer les siths de la Galaxie. Vous vous retournez et exécuter le chancelier encore menotté à son siège, puis vous rendez la pareille a Dooku pour ses crimes commis contre la galaxie.",
		image: "./assets/images/trashison.webp",
		boutons: [
			{ titre: "Vous Gagnez", destination: function() {
				goToChapter("outro");
			} },
		],
	},
	//Outro
	outro: {
		titre: "A new hope",
		description:
			"Maintenant que les Siths et leurs plans ont été définitivement décimer de la galaxie, la République peut afin renaître à son plein potentiel. Pour votre courage et service rendu a la galaxie, vous êtes attribué le rang de Maître Jedi ainsi que d'une reconnaissance éternelle à travers tous les systèmes occupés.",
		image: "./assets/images/outro.png",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			}},
		],
	},

	//Mort
	trou: {
		titre: "Vous mourrez",
		description: "Vous vous écrasez dans le vaisseau et mourrez par l'impact",
		image: "./assets/images/impact.png",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			} },
		],
	},
	//Mort
	couloir: {
		titre: "Vous mourrez",
		description:
			"Des droïdes vous prennent en embuscade, ils sont trop nombreux  pour vous.",
		image: "./assets/images/coridor.webp",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			} },
		],
	},
	//Mort
	forcez: {
		titre: "Vous mourrez",
		description:
			"Dès que vous entrouvrez les portes, un duo de Droideka vous pulvérise.",
		image: "./assets/images/forcez.png",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			} },
		],
	},
	//Mort
	arrestation: {
		titre: "Trahison",
		description:
			"Lors de l'arrestation, Dooku vous dévoile que le chancelier est Darth Sidious, mais il est trop tard. Le chancelier en question vous prend par surprise et extermine toutes les personnes présentes dans la pièce",
		image: "./assets/images/sidious.jpg",
		boutons: [
			{ titre: "Recommencez", destination: function() {
				goToChapter("intro");
			} },
		],
	},
};
let information = false;
function goToChapter(chapitre) {
	if (chapters[chapitre]) {
		document.querySelector("#titre").innerText = chapters[chapitre].titre;
		document.querySelector("p").innerText = chapters[chapitre].description;
		document.querySelector("img").src = chapters[chapitre].image;
		document.querySelector("video").src = chapters[chapitre].video;

		if (chapters[chapitre].image) {
            document.querySelector("img").style.display = "block";
            document.querySelector("img").src = chapters[chapitre].image;
        } else {
            document.querySelector("img").style.display = "none";
        }
		if (chapters[chapitre].video) {
            document.querySelector("video").style.display = "block";
            document.querySelector("video").src = chapters[chapitre].video;
        } else {
            document.querySelector("video").style.display = "none";
        }
            
		if (chapitre === "bureau") {
			information = true;
		}

		if (information == true) {
			chapters.combat = chapters.combatre;
			chapters.combatre = {
				titre: "C'est le temps d'en finir",
				description:
					"Dooku met Kenobi hors d'état de combattre, vous affrontez Dooku en solo avec rage et férocité et parvenez a le battre. Maintenant que faites-vous",
				video: "./assets/video/combat2.mov",
				boutons: [
					{
						titre: "Exécuter Dooku pour ses crimes",
						destination: function() {
							goToChapter("justice");
						},
					},
					{
						titre: "L'arrêter pour ses crimes",
						destination: function() {
							goToChapter("arrestation");
						},
					},
					{
						titre: "Éliminez Sidious",
						destination: function() {
							goToChapter("traitre");
						},
					},
				],
			};
		}
		const boutons = document.querySelector('.boutons'); 
		while (boutons.firstChild) { 
  		boutons.removeChild(boutons.firstChild); 
		} 
		for (let i = 0; i < chapters[chapitre].boutons.length; i++) { 
			const nouveauBtn = document.createElement('button'); 
			nouveauBtn.textContent = chapters[chapitre].boutons[i].titre; 
			nouveauBtn.addEventListener('click', chapters[chapitre].boutons[i].destination);
			boutons.appendChild(nouveauBtn); 
		  }; 
	}
}

goToChapter("intro");




  




