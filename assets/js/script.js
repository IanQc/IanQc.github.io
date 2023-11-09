//Chapitre
const chapters = {
	//Introduction
	intro: {
		titre: "Que la force soit avec toi",
		description: "Anakin Skywalker, vous venez tout juste de recevoir une mission d'une importance capitale. Le Chancelier Suprême a été capturé en orbite de Coruscant. Votre tâche cruciale consiste à infiltrer et à extraire le dirigeant éminent de la République Galactique. L'avenir de la galaxie repose entre vos mains, Maître Jedi. Votre expertise et votre bravoure seront mises à l'épreuve dans cette mission périlleuse, où chaque décision pourrait sceller le sort de la République et de la Force elle-même. Que la Force soit avec vous.",
		image: "./assets/images/jeux.jpeg",
		boutons: [
			{titre: "Continuer", destination: "debut"}
		]
	},
	//Chapitre2
	debut: {
		titre: "C'est parti",
		description: "Vous et Obi-Wan Kenobi prenez chacun un vaisseau afin d'infiltrer le vaisseau en orbite.",
		image: "./assets/images/debut.webp",
		audio:"./assets/audio/flyby.mp3",
		boutons: [
			{titre: "Atterrir par un trou dans la coque", destination: "trou"}, {titre: "Foncer dans le Hanguar",destination: "atterir"},
		],
	},
	//Chapitre3
	atterir: {
		titre: "Vous atterrissez dans le hangar",
		description: "Vous déchaînez votre pouvoir, anéantissant chaque droïde qui ose se mettre en travers de votre chemin. Votre détermination est palpable alors que vous continuez d'avancer, laissant derrière vous un sillage de débris mécaniques fumants. Maintenant, il vous faut vous frayer un chemin jusqu'au cockpit, là où se joue le destin de cette mission. Chaque pas que vous faites résonne dans les coursives métalliques du vaisseau ennemi, rappelant à tous que vous êtes la tempête qui s'abat sur eux.",
		image: "./assets/images/attérissage.webp",
		audio:"./assets/audio/lightsaber-ignition.mp3",
		boutons: [
			{titre: "Aller dans le couloir", destination: "couloir"}, {titre: "Aller dans le bureau de sécurité", destination: "bureau"}, {titre: "Prendre l'ascenseur", destination: "ascenceur"},
		],
	},
	//Chapitre4
	ascenceur: {
		titre: "Attente sereine dans l'ascenseur",
		description: "À mi-chemin l'ascenseur bloque et vous êtes coincé",
		image: "./assets/images/ascenceur.jpg",
		audio:"./assets/audio/lightsaber-extinguish.mp3",
		boutons: [
			{titre: "Forcez les portes", destination: "forcez"}, {titre: "Passez par-dessus l'ascenseur", destination: "fosse"},
		],
	},
	//Chapitre Information Twist
	bureau: {
		titre: "Vous trouvez l'information!",
		description: "Vos yeux scrutent intensément les écrans du cockpit, révélant l'impensable : le Chancelier Palpatine, en qui vous aviez placé une confiance aveugle, se révèle être un traître de la pire espèce. Son visage bienveillant dissimulait l'ombre d'une sinistre vérité : sa véritable identité est celle de Darth Sidious, le maître des Siths, orchestrant depuis l'ombre le chaos qui menace la galaxie.",
		image: "./assets/images/information.jpg",
		audio: "./assets/audio/i-am-the-senate.mp3",
		audio2: "./assets/audio/musique_bad_palp.mp4",
		boutons: [
			{titre: "Prendre le couloir", destination: "couloir"}, {titre: "Prendre l'ascenseur", destination: "ascenceur"},
		],
	},
	//Chapitre6
	fosse: {
		titre: "Vous entrez dans le cockpit du vaisseau",
		description: "Lorsque vous pénétrez dans la salle, une scène des plus saisissantes s'offre à vos yeux. Le Chancelier Suprême est là, menotté, retenu de force sur la chaise du capitaine. Ses yeux portent la lueur de la détresse, emprisonnés par les chaînes de son ravisseur impitoyable, Dooku, qui se tient là, intransigeant, entouré de ses gardes, tels des ombres menaçantes.",
		image: "./assets/images/cockpit.jpeg",
		audio:"./assets/audio/hello-there.mp3",
		boutons: [
			{titre: "Continuer", destination: "dooku"}
		],
	},
	//Chapitre7
	dooku: {
		titre: "Dooku vous engage en combat",
		description: "Vous et votre vénérable Maître Obi-Wan Kenobi êtes lancés dans un duel d'une intensité rare contre le redoutable Comte Dooku. L'air est électrifié par les éclairs de sabres laser qui s'entrechoquent, créant une danse mortelle de lumières écarlates et bleues.",
		video: "./assets/video/combat1.mp4",
		audio: "./assets/audio/choke.mp3",
		boutons: [
			{titre: "Continuer", destination: "combat"}
		],
	},
	//Chapitre8
	combat: {
		titre: "C'est le temps d'en finir",
		description: "Dans un instant de pure puissance, Dooku met Maître Kenobi hors d'état de combattre, le projetant au sol dans une torsion spectaculaire. La salle résonne du fracas de métal, annonçant une pause fatale dans le duel. La rage vous envahit, colère pure qui alimente chaque mouvement, chaque coup de sabre laser. Finalement, avec une habileté foudroyante, vous parvenez à prendre l'avantage. Dooku, dépassé par la furie qui brûle en vous, est contraint de s'incliner devant votre force implacable. Maintenant, la tâche qui se dresse devant vous est cruciale. Vous devez décider du sort de Dooku...",
		video: "./assets/video/combat2.mov",
		audio:"./assets/audio/kill.mp3",
		boutons: [
			{titre: "Exécuter Dooku pour ses crimes", destination: "justice"}, {titre: "L'arrêter pour ses crimes", destination: "arrestation"},
		],
	},
	//Perdre
	justice: {
		titre: "Vous exécutez le compte Dooku et mettez fin à la guerre",
		description: "Vous êtes acclamé comme un héros en arrivant au temple Jedi. Cependant, l'Ordre 66 est donné par le Chancelier Palpatine/Darth Sidious, causant la mort de tous les Jedi, incluant vous.",
		image: "./assets/images/order66.jpg",
		audio: "./assets/audio/order66.mp3",
		audio2:"./assets/audio/musique_bad_dooku.mp4",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},
	//Victoire
	traitre: {
		titre: "The Chosen One",
		description: "Porté par la révélation, une rage inflexible vous envahit. Il est temps de clore l'oppression des Siths qui saigne la galaxie. Vous faites faites volte-face et d'un geste résolu vous exécutez le Chancelier encore enchaîné à son siège. Un silence lourd et horrifiant pèse dans la salle. Dooku, sous le choc de sa défaite et de la mort de son Maître demeure figé sur place, son regard empreint d'une terreur glaciale. Sans hésiter, vous exécutez la sentence, mettant fin pour de bon à sa menace. La galaxie respire enfin, délivrée de l'ombre qui l'accablait depuis trop longtemps.",
		image: "./assets/images/trashison.webp",
		audio: "./assets/audio/so-be-it.mp3",
		boutons: [
			{titre: "Vous Gagnez", destination: "outro"}
		],
	},
	//Outro
	outro: {
		titre: "A new hope",
		description: "Maintenant que les Siths et leurs sinistres empire ont été irrémédiablement éradiqués de la galaxie, la République peut enfin renaître et s'épanouir pleinement. Pour votre courage et les services inestimables rendus à la galaxie, vous êtes élevé au rang honorifique de Maître Jedi, et votre dévouement sera gravé dans la mémoire collective de tous les systèmes occupés, pour l'éternité.",
		image: "./assets/images/outro.png",
		audio: "./assets/audio/lightsaber-extinguish.mp3",
		audio2: "./assets/audio/musique_final.mp3",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},

	//Mort
	trou: {
		titre: "Vous mourrez",
		description: "Vous subissez un violent choc en percutant le vaisseau, la force de l'impact vous emportant dans la mort.",
		image: "./assets/images/impact.png",
		audio:"./assets/audio/exploding.mp3",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},
	//Mort
	couloir: {
		titre: "Vous mourrez",
		description: "Vous tombez dans une embuscade tendue par une multitude de droïdes, leur nombre écrasant vous submerge rapidement.",
		image: "./assets/images/coridor.webp",
		audio:"./assets/audio/blast-em.mp3",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},
	//Mort
	forcez: {
		titre: "Vous mourrez",
		description: "À peine les portes s'entrouvrent, qu'un duo de Droideka vous pulvérise instantanément.",
		image: "./assets/images/forcez.png",
		audio:"./assets/audio/droidekas.mp3",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},
	//Mort
	arrestation: {
		titre: "Trahison",
		description: "Lors de votre tentative d'arrestation, Dooku révèle que le chancelier est en réalité Darth Sidious, mais l'information arrive trop tard. Le chancelier, dans un geste soudain, vous prend au dépourvu et décime impitoyablement tous ceux présents dans la pièce.",
		image: "./assets/images/sidious.jpg",
		audio: "./assets/audio/treason.mp3",
		audio2:"./assets/audio/musique_bad_palp.mp4",
		boutons: [
			{titre: "Recommencez", destination: "intro"}
		],
	},
};

//Variables
const son = document.createElement('audio');
const musique = document.createElement('audio');
let change_image = document.querySelector("img");
let change_video = document.querySelector("video");
let change_titre = document.querySelector("#titre");
let change_description = document.querySelector("p");
let change_bouton = document.querySelector('.boutons');
let information = false;
musique.loop = true;

function goToChapter(chapitre) {
	if (chapters[chapitre]) {
		//Changement de texte
		change_titre.innerText = chapters[chapitre].titre;
		change_description.innerText = chapters[chapitre].description;
		//Changement d'image
		if (chapters[chapitre].image) {
			change_image.classList.remove("hidden");
			change_image.src = chapters[chapitre].image;
		} else {
			change_image.classList.add("hidden");
		}
		//Changement de vidéo
		if (chapters[chapitre].video) {
			change_video.classList.remove("hidden");
			change_video.src = chapters[chapitre].video;
			change_video.play();
		} else {
			change_video.classList.add("hidden");
			change_video.pause();
			change_video.currentTime = 0;
		}
		//Changement d'audio
		if (chapters[chapitre].audio) {
			son.src = chapters[chapitre].audio;
			son.play();
		} else {
			son.pause();
			son.currentTime = 0;
		}
		//Changement d'audio
		if (chapters[chapitre].audio2) {
			musique.src = chapters[chapitre].audio2;
			musique.play();
		} else {
			musique.pause();
			musique.currentTime = 0;
		}
		
		//Audio recommencer
		if (chapters[chapitre] == chapters.debut) {
			chapters.intro = {
				titre: "Que la force soit avec toi",
				description: "Anakin Skywalker, vous venez tout juste de recevoir une mission d'une importance capitale. Le Chancelier Suprême a été capturé en orbite de Coruscant. Votre tâche cruciale consiste à infiltrer et à extraire le dirigeant éminent de la République Galactique. L'avenir de la galaxie repose entre vos mains, Maître Jedi. Votre expertise et votre bravoure seront mises à l'épreuve dans cette mission périlleuse, où chaque décision pourrait sceller le sort de la République et de la Force elle-même. Que la Force soit avec vous.",
				image: "./assets/images/jeux.jpeg",
				audio:"./assets/audio/you-can-do-better.mp3",
				boutons: [
					{titre: "Continuer", destination: "debut"}
				]
			};
		}
		//Changement de la classe du background et retirer audio
		if (chapters[chapitre] == chapters.outro){
			let background = document.getElementById("jeu");
			background.classList.remove("jeux");
			background.classList.add("jeux2");
			chapters.intro =  {
				titre: "Que la force soit avec toi",
				description: "Anakin Skywalker, vous venez tout juste de recevoir une mission d'une importance capitale. Le Chancelier Suprême a été capturé en orbite de Coruscant. Votre tâche cruciale consiste à infiltrer et à extraire le dirigeant éminent de la République Galactique. L'avenir de la galaxie repose entre vos mains, Maître Jedi. Votre expertise et votre bravoure seront mises à l'épreuve dans cette mission périlleuse, où chaque décision pourrait sceller le sort de la République et de la Force elle-même. Que la Force soit avec vous.",
				image: "./assets/images/jeux.jpeg",
				audio:"./assets/audio/game_over.mp3",
				boutons: [
					{titre: "Continuer", destination: "debut"}
				]
			};
		}
		//Twist

		if (chapters[chapitre] == chapters.debut) {
			information = false;
			console.log("false")
		}


		if (chapters[chapitre] == chapters.bureau) {
			information = true;
			console.log("true")
		}
		
		if (information == true) {
			console.log("vraie")
			chapters.combat = {
				titre: "C'est le temps d'en finir",
				description: "Dans un instant de pure puissance, Dooku met Maître Kenobi hors d'état de combattre, le projetant au sol dans une torsion spectaculaire. La salle résonne du fracas de métal, annonçant une pause fatale dans le duel. La rage vous envahit, colère pure qui alimente chaque mouvement, chaque coup de sabre laser. Finalement, avec une habileté foudroyante, vous parvenez à prendre l'avantage. Dooku, dépassé par la furie qui brûle en vous, est contraint de s'incliner devant votre force implacable. Maintenant, la tâche qui se dresse devant vous est cruciale. Vous devez décider du sort de Dooku...",
				video: "./assets/video/combat2.mov",
				audio:"./assets/audio/kill.mp3",
				boutons: [
					{titre: "Exécuter Dooku pour ses crimes", destination: "justice"}, {titre: "L'arrêter pour ses crimes", destination: "arrestation"}, {titre: "Éliminez Sidious", destination: "traitre"}
				],
			};
		} else {
			chapters.combat = {
				titre: "C'est le temps d'en finir",
				description: "Dans un instant de pure puissance, Dooku met Maître Kenobi hors d'état de combattre, le projetant au sol dans une torsion spectaculaire. La salle résonne du fracas de métal, annonçant une pause fatale dans le duel. La rage vous envahit, colère pure qui alimente chaque mouvement, chaque coup de sabre laser. Finalement, avec une habileté foudroyante, vous parvenez à prendre l'avantage. Dooku, dépassé par la furie qui brûle en vous, est contraint de s'incliner devant votre force implacable. Maintenant, la tâche qui se dresse devant vous est cruciale. Vous devez décider du sort de Dooku...",
				video: "./assets/video/combat2.mov",
				audio:"./assets/audio/kill.mp3",
				boutons: [
					{titre: "Exécuter Dooku pour ses crimes", destination: "justice"}, {titre: "L'arrêter pour ses crimes", destination: "arrestation"}
				],
			};
		}

		//Changement boutons
		const boutons = document.querySelector('.boutons');
		while (boutons.firstChild) {
			boutons.removeChild(boutons.firstChild);
		}
		for (let i = 0; i < chapters[chapitre].boutons.length; i++) {
			const nouveauBtn = document.createElement('button');
			nouveauBtn.textContent = chapters[chapitre].boutons[i].titre;
			nouveauBtn.addEventListener('click', function () {
				goToChapter(chapters[chapitre].boutons[i].destination);
			});
			boutons.appendChild(nouveauBtn);
		};
	}
}

goToChapter("intro");