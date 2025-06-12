// Données pour les sous-classes
const subclasses = {
    "Barbare": ["Voie de l'Arbre-Monde", "Voie du Berserker", "Voie du Cœur sauvage", "Voie du Zélateur"],
    "Barde": ["Collège de la Dance", "Collège du Savoir", "Collège de la Séduction", "Collège de la Vaillance"],
    "Clerc": ["Domaine de la Guerre", "Domaine de la Lumière", "Domaine de la Ruse", "Domaine de la Vie"],
    "Druide": ["Cercle des Astres", "Cercle de la Lune", "Cercle des Mers", "Cercle de la Terre"],
    "Guerrier": ["Champion", "Chevalier Occulte", "Maître de Guerre", "Soldat Psi"],
    "Moine": ["Credo des Éléments", "Credo de la Miséricorde", "Credo de l'Ombres", "Credo da la Paume"],
    "Paladin": ["Serment des Anciens", "Serment de Dévotion", "Serment de Gloire", "Serment de Vengeance"],
    "Rôdeur": ["Belluaire", "Chasseur", "Traqueur des Ténèbres", "Vagabond Féerique"],
    "Ensorceleur": ["Sorcellerie Aberrante", "Sorcellerie Draconique", "Sorcellerie Mécanique", "Sorcellerie Sauvage"],
    "Magicien": ["Abjurateur", "Devin", "Evocateur", "Illusionniste"],
    "Occultiste": ["Protecteur Archifée", "Protecteur Céleste", "Protecteur Fiélon", "Protecteur Grand Ancien"],
    "Roublard": ["Âme Acérée", "Arnaqueur Arcanique", "Assassin", "Voleur"],
};

// Maîtrises d'équipement par classe
const classProficiencies = {
    "Barbare": {
        armor: ["Armures légères", "Armures intermédiaires", "Boucliers"],
        weapons: ["Armes courantes", "Armes de guerre"],
        tools: ["Aucun"]
    },
    "Barde": {
        armor: ["Armures légères"],
        weapons: ["Armes courantes"],
        tools: ["Trois instruments de musique de votre choix"]
    },
    "Clerc": {
        armor: ["Armures légères", "Armures intermédiaires", "Boucliers"],
        weapons: ["Armes courantes"],
        tools: ["Aucun"]
    },
    "Druide": {
        armor: ["Armures légères", "Boucliers"],
        weapons: ["Armes courantes"],
        tools: ["Outils d'herboriste"]
    },
    "Guerrier": {
        armor: ["Armures légères", "Armures intermédiaires", "Armures lourdes", "Boucliers"],
        weapons: ["Armes courantes", "Armes de guerre"],
        tools: ["Aucun"]
    },
    "Moine": {
        armor: ["Aucune"],
        weapons: ["Armes courantes", "Armes de guerre doté de la propriété légère"],
        tools: ["Un type d'outils d'artisan ou un instrument de musique de votre choix"]
    },
    "Paladin": {
        armor: ["Armures légères", "Armures intermédiaires", "Armures lourdes", "Boucliers"],
        weapons: ["Armes courantes", "Armes de guerre"],
        tools: ["Aucun"]
    },
    "Rôdeur": {
        armor: ["Armures légères", "Armures intermédiaires", "Boucliers"],
        weapons: ["Armes courantes", "Armes de guerre"],
        tools: ["Aucun"]
    },
    "Ensorceleur": {
        armor: ["Aucune"],
        weapons: ["Armes courantes"],
        tools: ["Aucun"]
    },
    "Magicien": {
        armor: ["Aucune"],
        weapons: ["Armes courantes"],
        tools: ["Aucun"]
    },
    "Occultiste": {
        armor: ["Armures légères"],
        weapons: ["Armes courantes"],
        tools: ["Aucun"]
    },
    "Roublard": {
        armor: ["Armures légères"],
        weapons: ["Armes courantes", "Armes de guerre doté de la propriété finesse ou légère"],
        tools: ["Outils de voleur"]
    }
};

// Maîtrises d'équipement par historique
const backgroundProficiencies = {
    "Acolyte": {
        tools: ["Outils de calligraphe"]
    },
    // Ajoutez d'autres historiques ici
    "Artiste": {
        tools: ["Un instrument de musique de votre choix"]
    },
    "Artisan": {
        tools: ["Un outil d'artisan de votre choix"]
    },
    "Charlatan": {
        tools: ["Matériel de contrefaçon"]
    },
    "Criminel": {
        tools: ["Outils de voleur"]
    },
    "Ermite": {
        tools: ["Outils d'herboriste"]
    },
    "Fermier": {
        tools: ["Outils de charpentier"]
    },
    "Garde": {
        tools: ["Un type de jeu de société de votre choix"]
    },
    "Guide": {
        tools: ["Outils de cartographe"]
    },
    "Marin": {
        tools: ["Outils de navigateur"]
    },
    "Marchand": {
        tools: ["Outils de navigateur"]
    },
    "Noble": {
        tools: ["Un jeu de société de votre choix"]
    },
    "Sage": {
        tools: ["Outils de calligraphe"]
    },
    "Scribe": {
        tools: ["Outils de calligraphe"]
    },
    "Soldat": {
        tools: ["Un jeu de société de votre choix"]
    },
    "Voyageur": {
        tools: ["Outils de voleur"]
    },
};


// Niveaux d'XP pour chaque niveau de personnage
const xpLevels = [
    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

// Bonus de maîtrise par niveau
const proficiencyBonusByLevel = [
    2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6
];

// Définition des compétences avec leur caractéristique associée en anglais et français
const skills = {
    "Acrobaties": { stat: "dexterity", statFr: "Dextérité" },
    "Arcanes": { stat: "intelligence", statFr: "Intelligence" },
    "Athlétisme": { stat: "strength", statFr: "Force" },
    "Discrétion": { stat: "dexterity", statFr: "Dextérité" },
    "Dressage": { stat: "wisdom", statFr: "Sagesse" },
    "Escamotage": { stat: "dexterity", statFr: "Dextérité" },
    "Histoire": { stat: "intelligence", statFr: "Intelligence" },
    "Intimidation": { stat: "charisma", statFr: "Charisme" },
    "Investigation": { stat: "intelligence", statFr: "Intelligence" },
    "Médecine": { stat: "wisdom", statFr: "Sagesse" },
    "Nature": { stat: "intelligence", statFr: "Intelligence" },
    "Perception": { stat: "wisdom", statFr: "Sagesse" },
    "Perspicacité": { stat: "wisdom", statFr: "Sagesse" }, // Intuition
    "Persuasion": { stat: "charisma", statFr: "Charisme" },
    "Religion": { stat: "intelligence", statFr: "Intelligence" },
    "Représentation": { stat: "charisma", statFr: "Charisme" },
    "Survie": { stat: "wisdom", statFr: "Sagesse" },
    "Tromperie": { stat: "charisma", statFr: "Charisme" },
};

// Vitesse de base par race (en mètres, selon les règles françaises de D&D 5e)
const raceSpeeds = {
    "Aasimar": 9, "Drakéide": 9, "Elfe": 9, "Gnome": 9, // Gnome: 9m (30 pieds)
    "Goliath": 10.5, // Goliath: 10.5m (35 pieds)
    "Halfelin": 9, "Humain": 9, "Nain": 9, "Orc": 9, "Tieffelin": 9, // Toutes les autres races: 9m (30 pieds)
};

// Détails spécifiques aux sous-races de Gnomes
const gnomeLineageDetails = {
    "Gnome des Forêts": {
        cantrips: ["Illusion mineure", "Communication avec les animaux"],
        description: "Vous connaissez les sorts mineurs illusion mineure et communication avec les animaux. Vous pouvez les lancer sans emplacement de sort autant de fois que votre bonus de maîtrise, et récupérez ce quota en terminant un Repos long. Vous pouvez dépenser les emplacements de sort adaptés dont vous disposez pour lancer ces sorts."
    },
    "Gnome des Roches": {
        cantrips: ["Prestidigitation", "Réparation"],
        description: "Vous connaissez les sorts mineurs prestidigitation et réparation. Vous pouvez consacrer 10 minutes à lancer prestidigitation pour créer un appareil mécanique de taille TP (CA 5, PV 1) tel qu'un jouet, un allume-feu ou une boîte à musique. Quand vous créez l'appareil, vous déterminez sa fonction en choisissant un effet parmi ceux de prestidigitation ; L'appareil produit cet effet chaque fois que vous ou une créature entreprenez une action Bonus pour l'activer par simple contact. Quand l'effet comporte des options, vous devez en choisir une pour l'appareil à sa création (par exemple si vous choisissez l'effet \"allumage/extinction\" du sort, vous devez déterminer si l'appareil allume ou éteint le feu, il ne peut pas faire les 2). Vous pouvez avoir 3 appareils actifs de ce type à la fois, et chacun tombe en morceaux 8 heures après sa création ou quand vous le démantelez par contact avec une action."
    }
};

// Détails spécifiques aux ascendances de Goliaths
const giantAncestryDetails = {
    "Géant du Givre": {
        description: "<strong>Froid mordant :</strong> Quand vous touchez une cible avec un jet d'attaque et lui infligez des dégâts, vous pouvez infliger 1d6 dégâts de froid supplémentaires à cette cible et rude sa Vitesse de 3m(2pouces) jusqu'au début de votre tour suivant."
    },
    "Géant du Feu": {
        description: "<strong>Brulure ignée :</strong> Quand vous touchez une cible avec un jet d'attaque et lui infliger des dégâts, vous pouvez infliger 1d10 dégâts de feu supplémentaire a la cible."
    },
    "Géant des Collines": {
        description: "<strong>Renversement des coteaux:</strong> Quand vous touchez une créature de taille G ou inférieur avec un jet d'attaque et lui infligez des dégâts, vous ouvez faire subir à cette cible l'état à terre."
    },
    "Géant des Nuages": {
        description: "<strong>Saut des nuées:</strong> Par une action Bonus, vous pouvez vous téléporter magiquement d'un maximum de 9m(6 pouces) dans un espace inoccupé que vous voyez."
    },
    "Géant des Pierres": {
        description: "<strong>Endurance de la pierre:</strong> Quand vous subissez des dégâts, vous pouvez jouer votre Réaction pour lancer 1d12. Ajoutez votre modificateur de CON au résultat du dé et réduisez les dégâts de la somme obtenue."
    },
    "Géant des Tempêtes": {
        description: "<strong>Tonnerre des cieux:</strong> Quand vous subissez des dégâts de la part d'une créature dans un rayon de 18m(12 pouces), vous pouvez jouer votre Réaction pour lui infliger 1d8 dégâts de tonnerre."
    }
};

// Détails spécifiques aux héritages fiélons des Tieffelins
const fiendishHeritageDetails = {
    "Abyssale": {
        resistance: "poison",
        level1Spell: "Bouffée de poison",
        level3Spell: "Rayon empoisonné",
        level5Spell: "Immobilisation de personne"
    },
    "Chtonien": {
        resistance: "nécrotiques",
        level1Spell: "Contact glacial",
        level3Spell: "Simulacre de vie",
        level5Spell: "Rayon affaiblissant"
    },
    "Infernal": {
        resistance: "feu",
        level1Spell: "Trait de feu",
        level3Spell: "Représailles infernales",
        level5Spell: "Ténèbres"
    }
};


// Définition des traits raciaux (définitions de base, les détails dynamiques sont gérés dans updateCharacterSheet)
const racialTraits = {
    "Aasimar": [
        { name: "Mains Guérisseuses", description: "Au prix d'une action, vous touchez physiquement une créature et jetez autant de d4 que votre bonus de maîtrise. La créature récupère autant de PV que le total obtenue. Une fois que vous avez utilisez ce trait, vous devez terminer un repos long pour y recourir à nouveau." },
        { name: "Porte-lumiére", description: "Vous  connaisssez le sort mineur lumière. Le CHA est la caractéristique d'incantation associée." },
        { name: "Résistance céleste", description: "Vous bénéficiez de la Résistance aux dégâts nécrotiques et radiants." },
        { name: "Vision dans le noir", description: "Vision dans le noir sur 18m (12 pouces)." },
        { name: "Révélation céleste", description: "" }, // Description dynamique
    ],  
    "Drakéide": [
        { name: "Ascendance draconique", description: "" }, // Description dynamique
        { name: "Souffle", description: "" }, // Description dynamique
        { name: "Résistance aux dégâts", description: "" }, // Description dynamique
        { name: "Vision dans le noir", description: "Vision dans le noir sur 18m (12 pouces)." },
        { name: "Vol draconique", description: "Lorsque vous atteignez le niveau 5, vous pouvez canaliser la magie draconique pour vous octroyer le vol de façon temporaire. Par une action Bonus, il vous pousse des ailes spectrales dans le dos qui persistent 10 minutes ou jusqu'à ce que vous rétractiez ces ailes (pas d'action requise) ou subissiez l'état Neutralisé. Pour toute la durée, vous disposez d'une Vitesse de vol égale à votre Vitesse. Vos ailes semblent être faites de la même énergie que votre souffle. Une fois ce trait utilisé, vous devez terminer un Repos long pour pouvoir y recourir de nouveau." },
    ],
    "Elfe": [
        { name: "Ascendance féerique", description: "Vous avez l'Avantage aux jets de sauvegarde contre l'état Charmé." },
        { name: "Vision dans le noir", description: "" }, // Description dynamique
        { name: "Sens aiguisés", description: "" }, // Description dynamique
        { name: "Transe", description: "La magie ne peut pas vous endormir et vous pouvez terminer un Repos long en 4h si vous les passez en transe méditative durant laquelle vous restez en éveil." },
        { name: "Lignage elfique", description: "" } // Description dynamique
    ],
    "Gnome": [
        { name: "Ruse Gnome", description: "Vous avez l'Avantage aux jets de sauvegarde d'INT, de SAG et de CHA." },
        { name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 18m (12 pouces)." },
        { name: "Lignage gnome", description: "" } // Description dynamique
    ],
    "Goliath": [
        { name: "Ascendance gigante", description: "" }, // Description dynamique
        { name: "Forte carrure", description: "Vous avez l'Avantage à tous les tests de caractéristique que yous effectuez pour vous libérer de l'état Agrippé. Votre catégorie de taille est en outre considérée comme un cran supérieur pour définir votre capacité de charge." },
        { name: "Forme de géant", description: "" } // Description dynamique et conditionnelle
    ],
    "Halfelin": [
        { name: "Agilité halfeline", description: "Vous pouvez vous déplacer dans l'espace de toute créature d'une catégorie de taille supérieure à la vôtre, mais ne pouvez pas vous arrêter dans le même espace que celle-ci." },
        { name: "Brave", description: "Vous avez l'Avantage aux jets de sauvegarde contre l'état Effrayé." },
        { name: "Chance", description: "Quand vous obtenez un 1 lors d'un Test d20, vous pouvez relancer le dé, mais devez utiliser le nouveau résultat." },
        { name: "Discrétion naturelle", description: "Il vous suffit d'être dans l'ombre d'une créature de catégorie de taille supérieure à la vôtre pour pouvoir entreprendre l'action Furtivité." }
    ],
    "Humain": [
        { name: "Compétent", description: "Vous recevez la maîtrise d'une compétence de votre choix." },
        { name: "Ingénieux", description: "Vous recevez L'Inspiration Chaque fois que vous terminez un Repos long." },
        { name: "Polyvalent", description: "Vous recevez un don d'origines de votre choix." }
    ],
    "Nain": [
        { name: "Connaissance de la pierre", description: "Par une action Bonus, vous recevez la Perception des vibrations à 18m(12 pouces) pendant 10 minutes. Cette Perception des vibrations nécessite que vous soyez sur une surface en pierre ou en contact physique avec une telle surface. Cette pierre peut-être naturelle ou façonnée. Vous pouvez recourir à ce trait autant de fois que votre bonus de maîtrise, et récupérez ce quota en terminant un Repos long." },
        { name: "Résistance naine", description: "Vous bénéficiez de la Résistance aux dégâts de poison et vous avez l'Avantage aux jets de sauvegarde contre l'état Empoisonné." },
        { name: "Ténacité naine", description: "Votre maximum de PV augmente de 1, et encore de 1 à chaque niveau que vous gagnez." },
        { name: "Vision dans le noir", description: "Vous disposez de la Vision dans le noir sur 36m(24 pouces)." }
    ],
    "Orc": [
        { name: "Acharnement", description: "Si vous tombez à 0 PV, vous pouvez vous retrouvez à 1 PV. Une fois ce trait utilisé, vous devez terminer un Repos long pour y recourir de nouveau." },
        { name: "Poussée d'adrénaline", description: "" }, // Description dynamique
        { name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 36m(24 pouces)." }
    ],
    "Tieffelin": [
        { name: "Héritage fiélon", description: "" }, // Description dynamique
        { name: "Présence d'outre-monde", description: "Vous connaissez le sort mineur thaumaturgie. Quand vous le lancez , il utilise la meême caractéristique d'incantation que celle de votre héritage fiélon." },
        { name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 18m(12 pouces)." }
    ]
};

const elvenLineageDetails = {
    "Drow": {
        baseCantrip: "Lumières dansantes",
        level3Spell: "Lueurs féeriques",
        level5Spell: "Ténèbres",
        visionRange: 36,
        speedModifier: 0 
    },
    "Elfe Sylvestre": {
        baseCantrip: "Druidisme",
        level3Spell: "Grande foulée",
        level5Spell: "Passage sans trace",
        visionRange: 18,
        speedModifier: 1.5 
    },
    "Haut Elfe": {
        level3Spell: "Détection de la magie",
        level5Spell: "Foulée brumeuse",
        visionRange: 18,
        speedModifier: 0
    }
};

const wizardCantrips = [
    "Acide artificiel", "Illusion mineure", "Lumière", "Main de mage", "Message", 
    "Prestidigitation", "Protection contre les armes", "Rayon de givre", "Réparation", "Trait de feu" 
    // Ajoutez d'autres sorts mineurs de magicien ici si vous le souhaitez
];


// ***** NOUVELLES DONNÉES : APTITUDES DE CLASSE ET SOUS-CLASSE *****
const classFeatures = {
    "Barbare": {
        1: [
            { name: "Rage", description: "Vous pouvez vous animer d'une force primitive appelée Rage, qui vous investit d'une puissance et d'une résistance accrues. Vous pouvez entrer en Rage, par une action Bonus, si vous ne portez pas d'armure lourde. <br> Vous pouvez entrer en Rage 2 fois par jour ( selon le niveau ). Vous en regagnez une utilisation lorsque vous terminez un Repos court, et récupérez tout le quota en terminant un Repos long. <br> Tant que votre Rage est active, les règles suivantes s'appliquent.<br><br> <strong>Résistance aux dégâts.</strong> Vous bénéficiez de la Résistance aux dégâts contondants, perforants et tranchants.<br><br> <strong> Dégâts de Rage. </strong> Lorsque vous effectuez une attaque basée sur la Force, que ce soit avec une arme ou à mains nues, et que vous infligez des dégâts à la cible, vous bénéficiez pour ces dégâts d'un bonus de +2 dégâts de rage (selon le niveau) . <br><br> <strong> Avantage en Force.</strong> Vous avez l'Avantage aux tests de Force et aux jets de sauvegarde de Force. <br><br> <strong> Ni Concentration ni sorts. </strong> Vous ne pouvez pas maintenir votre Concentration ni lancer de sorts. <br><br> <strong> Durée. </strong> La Rage persiste jusqu'à la fin de votre tour suivant, mais se termine prématurément si vous enfilez une armure lourde ou subissez l'état Neutralisé. Si votre Rage est encore active lorsque votre tour suivant intervient, vous pouvez la prolonger d'un round par n'importe laquelle des choses suivantes: <br><br>• Effectuer un jet d'attaque contre un ennemi. <br><br>• Contraindre un ennemi à effectuer un jet de sauvegarde. <br><br>• Entreprendre une action Bonus pour prolonger votre Rage. <br><br> Chaque fois que la Rage est prolongée, elle persiste jusqu'à la fin de votre tour suivant. <br> Vous pouvez maintenir votre Rage pendant un maximum de 10 minutes." },
            { name: "Défense sans armure", description: "Tant que vous ne portez aucune armure, votre Classe d'Armure est égale à 10 + votre modificateur de Dextérité + votre modificateur de Constitution. <br> Vous pouvez utiliser un bouclier et bénéficier quand même de cet avantage." }
        ],
        2: [
            { name: "Attaque téméraire", description: "Vous pouvez décider de faire vos attaques de corps à corps avec avantage. Si vous le faites, les attaques contre vous ont l'avantage jusqu'à votre prochain tour." },
            { name: "Sens du danger", description: "Vous avez l'avantage aux jets de sauvegarde de Dextérité contre les effets que vous pouvez voir, comme les pièges et les sorts." }
        ],
        3: [{ name: "Voie primitive", description: "Vous choisissez une voie qui façonne la nature de votre rage. (Sélectionnez une sous-classe)." }],
        4: [{ name: "Amélioration de caractéristiques", description: "Vous pouvez augmenter une caractéristique de 2 points, ou deux caractéristiques de 1 point." }],
        5: [
            { name: "Attaque supplémentaire", description: "Vous pouvez attaquer deux fois, au lieu d'une, chaque fois que vous réalisez l'action Attaquer durant votre tour." },
            { name: "Déplacement rapide", description: "Votre vitesse augmente de 3 mètres tant que vous ne portez pas d'armure lourde." }
        ],
        7: [{ name: "Instinct sauvage", description: "Vous avez l'avantage sur les jets d'initiative." }],
        9: [{ name: "Critique brutal", description: "Vous pouvez lancer un dé de dégâts d'arme supplémentaire lorsque vous déterminez les dégâts supplémentaires pour un coup critique avec une attaque de corps à corps." }],
        11: [{ name: "Rage implacable", description: "Si vous tombez à 0 point de vie alors que vous êtes en rage et que vous ne mourez pas sur le coup, vous pouvez faire un jet de sauvegarde de Constitution DD 10. Si vous réussissez, vous tombez à 1 point de vie à la place." }],
        13: [{ name: "Critique brutal (Amélioration)", description: "Vous pouvez lancer deux dés de dégâts d'arme supplémentaires." }],
        15: [{ name: "Rage persistante", description: "Votre rage ne prend fin prématurément que si vous tombez inconscient ou si vous choisissez d'y mettre fin." }],
        17: [{ name: "Critique brutal (Amélioration)", description: "Vous pouvez lancer trois dés de dégâts d'arme supplémentaires." }],
        18: [{ name: "Puissance indomptable", description: "Si le total de votre test de Force est inférieur à votre valeur de Force, vous pouvez utiliser votre valeur de Force à la place du résultat." }],
        20: [{ name: "Champion primitif", description: "Vos valeurs de Force et de Constitution augmentent de 4. Votre maximum pour ces caractéristiques est maintenant de 24." }]
    },
    // Ajoutez ici les autres classes...
};

const subclassFeatures = {
    "Voie du Berserker": {
        3: [{ name: "Frénésie", description: "Quand vous êtes en rage, vous pouvez choisir d'entrer en frénésie. Si vous le faites, vous pouvez faire une seule attaque avec une arme de corps à corps en tant qu'action bonus à chacun de vos tours après celui-ci. Quand votre rage prend fin, vous subissez un niveau d'épuisement." }],
        6: [{ name: "Rage aveugle", description: "Vous ne pouvez pas être charmé ou effrayé tant que vous êtes en rage." }],
        10: [{ name: "Présence intimidante", description: "Vous pouvez utiliser votre action pour effrayer quelqu'un avec votre présence menaçante." }],
        14: [{ name: "Rétorsion", description: "Quand vous subissez des dégâts d'une créature qui est à 1,50 mètre ou moins de vous, vous pouvez utiliser votre réaction pour faire une attaque avec une arme de corps à corps contre cette créature." }]
    },
    // Ajoutez ici les autres sous-classes...
};


// Variables globales
let skillProficiencyStates = {};
let inspirationChecked = false;
let hpGains = [];
let spentHitDice = 0;
let currentHP = 0;
let temporaryHP = 0;
let currentAC = 10;
let draconicAncestry = '';
let elvenLineage = '';
let elfKeenSensesChoice = ''; 
let elfSpellcastingAbility = ''; 
let highElfCantripChoice = ''; 
let gnomeLineage = ''; 
let giantAncestry = ''; 
let fiendishHeritage = ''; // Variable globale pour l'héritage fiélon

let acharnementUsed = false; 
let adrenalineUses = 0; 


let advantageEnabled = false;
let disadvantageEnabled = false;
let deathSaveSuccesses = 0;
let deathSaveFailures = 0;
let deathSaveIconsDisplayElement = null;
let deathSaveButtonElement = null;

const hitDice = {
    "Barbare": 12, "Barde": 8, "Clerc": 8, "Druide": 8, "Guerrier": 10, "Moine": 8,
    "Paladin": 10, "Rôdeur": 10, "Ensorceleur": 6, "Magicien": 6, "Roublard": 8, "Occultiste": 8,
};

const sunIconFA = '<i class="fas fa-sun"></i>';
const moonIconFA = '<i class="fas fa-moon"></i>';

function getDamageTypeFromAncestry(ancestryValue) {
    if (!ancestryValue || !ancestryValue.includes('(')) return 'déterminé par votre ascendance';
    const match = ancestryValue.match(/\(([^)]+)\)/);
    return match ? match[1] : 'déterminé par votre ascendance';
}

function getXpForNextLevel(level) {
    return level < xpLevels.length - 1 ? xpLevels[level] : "Niveau Max";
}

// ***** NOUVELLE FONCTION : UTILISATIONS DE LA RAGE DU BARBARE *****
function getBarbarianRageUses(level) {
    if (level >= 17) return 6;
    if (level >= 13) return 5;
    if (level >= 6) return 4;
    if (level >= 3) return 3;
    if (level >= 1) return 2;
    return 0; // Default case
}

// ***** NOUVELLE FONCTION : DÉGÂTS DE RAGE DU BARBARE *****
function getBarbarianRageDamage(level) {
    if (level >= 16) return 4;
    if (level >= 9) return 3;
    if (level >= 1) return 2;
    return 0; // Default case
}


function updateSubclasses() {
    const classSelect = document.getElementById('class');
    const subclassContainer = document.getElementById('subclass-container');
    const subclassSelect = document.getElementById('subclass');
    const levelSelect = document.getElementById('level');

    if (!classSelect || !subclassContainer || !subclassSelect || !levelSelect) {
        return;
    }

    const selectedClass = classSelect.value;
    const level = parseInt(levelSelect.value);
    subclassSelect.innerHTML = '<option value="" disabled selected>Sélectionner une sous-classe</option>';

    if (subclasses[selectedClass] && level >= 3) {
        subclassContainer.classList.remove('hidden');
        subclasses[selectedClass].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subclassSelect.appendChild(option);
        });
    } else {
        subclassContainer.classList.add('hidden');
        subclassSelect.value = '';
    }
}

function updateRaceSpecificVisibility(raceValue, containerId, selectId, globalVarName) {
    const container = document.getElementById(containerId);
    const select = document.getElementById(selectId);
    if (!container || !select) return;

    if (document.getElementById('race').value === raceValue) {
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
        select.value = '';
        if (window.hasOwnProperty(globalVarName)) {
             window[globalVarName] = '';
        }
    }
}

function updateElfSpecificChoicesVisibility() {
    const raceSelect = document.getElementById('race');
    const elvenLineageSelect = document.getElementById('elven-lineage');
    const elfChoicesContainer = document.getElementById('elf-specific-choices-container');
    const highElfCantripContainer = document.getElementById('high-elf-cantrip-container');

    if (!raceSelect || !elfChoicesContainer || !highElfCantripContainer || !elvenLineageSelect) {
        return;
    }

    if (raceSelect.value === "Elfe") {
        elfChoicesContainer.classList.remove('hidden');
        if (elvenLineageSelect.value === "Haut Elfe") {
            highElfCantripContainer.classList.remove('hidden');
        } else {
            highElfCantripContainer.classList.add('hidden');
            const highElfCantripField = document.getElementById('high-elf-cantrip');
            if (highElfCantripField) highElfCantripField.value = ''; 
        }
    } else {
        elfChoicesContainer.classList.add('hidden');
        highElfCantripContainer.classList.add('hidden');
        const keenSensesField = document.getElementById('elf-keen-senses');
        if (keenSensesField) keenSensesField.value = '';
        const spellAbilityField = document.getElementById('elf-spellcasting-ability');
        if (spellAbilityField) spellAbilityField.value = '';
        const highElfCantripField = document.getElementById('high-elf-cantrip');
        if (highElfCantripField) highElfCantripField.value = '';
    }
}


function updateDraconicAncestryVisibility() { updateRaceSpecificVisibility('Drakéide', 'draconic-ancestry-container', 'draconic-ancestry', 'draconicAncestry');}
function updateElvenLineageVisibility() { 
    updateRaceSpecificVisibility('Elfe', 'elven-lineage-container', 'elven-lineage', 'elvenLineage');
    updateElfSpecificChoicesVisibility(); 
}
function updateGnomeLineageVisibility() { 
    updateRaceSpecificVisibility('Gnome', 'gnome-lineage-container', 'gnome-lineage', 'gnomeLineage');
}
function updateGiantAncestryVisibility() { updateRaceSpecificVisibility('Goliath', 'giant-ancestry-container', 'giant-ancestry', 'giantAncestry');}
function updateFiendishHeritageVisibility() { 
    updateRaceSpecificVisibility('Tieffelin', 'fiendish-heritage-container', 'fiendish-heritage', 'fiendishHeritage');
}


function getModifier(abilityScore) {
    return Math.floor((abilityScore - 10) / 2);
}

function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : mod.toString();
}

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function saveCharacterData() {
    const characterData = {
        name: document.getElementById('name')?.value || '',
        race: document.getElementById('race')?.value || '',
        class: document.getElementById('class')?.value || '',
        level: document.getElementById('level')?.value || '1',
        subclass: document.getElementById('subclass')?.value || '',
        alignment: document.getElementById('alignment')?.value || '',
        background: document.getElementById('background')?.value || '',
        size: document.getElementById('size')?.value || 'Moyenne',
        experience: document.getElementById('experience')?.value || '0',
        strength: document.getElementById('strength')?.value || '10',
        dexterity: document.getElementById('dexterity')?.value || '10',
        constitution: document.getElementById('constitution')?.value || '10',
        intelligence: document.getElementById('intelligence')?.value || '10',
        wisdom: document.getElementById('wisdom')?.value || '10',
        charisma: document.getElementById('charisma')?.value || '10',
        skillProficiencyStates,
        inspirationChecked,
        hpGains,
        spentHitDice,
        currentHP,
        temporaryHP,
        deathSaveSuccesses,
        deathSaveFailures,
        currentAC,
        draconicAncestry: document.getElementById('draconic-ancestry')?.value || '',
        elvenLineage: document.getElementById('elven-lineage')?.value || '',
        elfKeenSensesChoice: document.getElementById('elf-keen-senses')?.value || '',
        elfSpellcastingAbility: document.getElementById('elf-spellcasting-ability')?.value || '',
        highElfCantripChoice: document.getElementById('high-elf-cantrip')?.value || '',
        gnomeLineage: document.getElementById('gnome-lineage')?.value || '', 
        giantAncestry: document.getElementById('giant-ancestry')?.value || '',
        fiendishHeritage: document.getElementById('fiendish-heritage')?.value || '',
        acharnementUsed, 
        adrenalineUses, 
        advantageEnabled: document.getElementById('advantage-toggle')?.checked || false,
        disadvantageEnabled: document.getElementById('disadvantage-toggle')?.checked || false,
    };
    localStorage.setItem('characterData', JSON.stringify(characterData));
}

function loadCharacterData() {
    const savedData = localStorage.getItem('characterData');
    if (savedData) {
        try {
            const characterData = JSON.parse(savedData);
            const fields = ['name', 'race', 'class', 'level', 'alignment', 'background', 'size', 'experience', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
            fields.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.value = characterData[id] || (element.tagName === 'SELECT' ? '' : (id === 'level' ? '1' : (id === 'experience' || id.match(/strength|dexterity|constitution|intelligence|wisdom|charisma/) ? '10' : '')));
                     if (id === 'level' && !element.value) element.value = '1'; 
                     if ((id.match(/strength|dexterity|constitution|intelligence|wisdom|charisma/)) && !element.value) element.value = '10';
                }
            });

            skillProficiencyStates = characterData.skillProficiencyStates || {};
            inspirationChecked = characterData.inspirationChecked || false;
            hpGains = Array.isArray(characterData.hpGains) ? characterData.hpGains : [];
            spentHitDice = characterData.spentHitDice || 0;
            temporaryHP = characterData.temporaryHP || 0;
            currentAC = characterData.currentAC || 10; 
            
            window.draconicAncestry = characterData.draconicAncestry || '';
            window.elvenLineage = characterData.elvenLineage || '';
            window.elfKeenSensesChoice = characterData.elfKeenSensesChoice || ''; 
            window.elfSpellcastingAbility = characterData.elfSpellcastingAbility || ''; 
            window.highElfCantripChoice = characterData.highElfCantripChoice || ''; 
            window.gnomeLineage = characterData.gnomeLineage || ''; 
            window.giantAncestry = characterData.giantAncestry || '';
            window.fiendishHeritage = characterData.fiendishHeritage || '';
            
            acharnementUsed = characterData.acharnementUsed !== undefined ? characterData.acharnementUsed : false;
            adrenalineUses = characterData.adrenalineUses !== undefined ? characterData.adrenalineUses : 0;

            advantageEnabled = characterData.advantageEnabled || false;
            disadvantageEnabled = characterData.disadvantageEnabled || false;
            deathSaveSuccesses = characterData.deathSaveSuccesses || 0;
            deathSaveFailures = characterData.deathSaveFailures || 0;

            const initialACInput = document.getElementById('initial-armor-class');
            if (initialACInput) initialACInput.value = currentAC;

            if (document.getElementById('class')?.value && document.getElementById('level')?.value) {
                updateSubclasses(); 
                const subclassSelect = document.getElementById('subclass');
                const subclassContainer = document.getElementById('subclass-container');
                if (subclassSelect && characterData.subclass && subclassContainer && !subclassContainer.classList.contains('hidden')) {
                    let optionExists = Array.from(subclassSelect.options).some(opt => opt.value === characterData.subclass);
                    if (optionExists) {
                        subclassSelect.value = characterData.subclass;
                    } else {
                         console.warn(`Sous-classe sauvegardée "${characterData.subclass}" non trouvée ou non applicable pour la classe/niveau actuel.`);
                    }
                }
            }

            const raceValue = document.getElementById('race')?.value;
            if (raceValue === 'Drakéide') { 
                updateDraconicAncestryVisibility(); 
                const draconicSelect = document.getElementById('draconic-ancestry'); 
                if (draconicSelect) draconicSelect.value = characterData.draconicAncestry;
            }
            if (raceValue === 'Elfe') { 
                const elvenSelect = document.getElementById('elven-lineage'); 
                if (elvenSelect) elvenSelect.value = characterData.elvenLineage; // Charger avant d'appeler updateElvenLineageVisibility
                updateElvenLineageVisibility(); 
                
                const keenSensesSelect = document.getElementById('elf-keen-senses');
                if (keenSensesSelect) keenSensesSelect.value = characterData.elfKeenSensesChoice;
                const spellAbilitySelect = document.getElementById('elf-spellcasting-ability');
                if (spellAbilitySelect) spellAbilitySelect.value = characterData.elfSpellcastingAbility;
                const highElfCantripSelect = document.getElementById('high-elf-cantrip');
                if (highElfCantripSelect) highElfCantripSelect.value = characterData.highElfCantripChoice;
                updateElfSpecificChoicesVisibility(); // S'assurer que la visibilité est correcte après avoir défini toutes les valeurs
            }
            if (raceValue === 'Gnome') { 
                updateGnomeLineageVisibility(); 
                const gnomeSelect = document.getElementById('gnome-lineage'); 
                if (gnomeSelect) gnomeSelect.value = characterData.gnomeLineage;
            }
            if (raceValue === 'Goliath') { 
                updateGiantAncestryVisibility(); 
                const giantSelect = document.getElementById('giant-ancestry'); 
                if (giantSelect) giantSelect.value = characterData.giantAncestry;
            }
            if (raceValue === 'Halfelin') {
                // Halfelin n'a pas de sous-race ou de choix spécifiques à afficher/cacher
            }
            if (raceValue === 'Tieffelin') { 
                updateFiendishHeritageVisibility(); 
                const fiendishSelect = document.getElementById('fiendish-heritage'); 
                if (fiendishSelect) fiendishSelect.value = characterData.fiendishHeritage;
            }

            const advantageToggle = document.getElementById('advantage-toggle');
            if (advantageToggle) advantageToggle.checked = advantageEnabled;
            const disadvantageToggle = document.getElementById('disadvantage-toggle');
            if (disadvantageToggle) disadvantageToggle.checked = disadvantageEnabled;

            const loadedLevel = parseInt(document.getElementById('level').value) || 1;
            let loadedMaxHP = 0;
            while(hpGains.length < loadedLevel && hpGains.length < 20) {
                 const conModForFill = getModifier(parseInt(characterData.constitution || '10'));
                 const hitDieForFill = hitDice[characterData.class || 'Guerrier'] || 10;
                 hpGains.push( (hpGains.length === 0 ? hitDieForFill : rollDie(hitDieForFill)) + conModForFill );
            }
            if (hpGains.length > loadedLevel) {
                hpGains = hpGains.slice(0, loadedLevel);
            }

            for(let i = 0; i < hpGains.length; i++) {
                loadedMaxHP += hpGains[i];
            }
            currentHP = characterData.currentHP !== undefined ? Math.min(characterData.currentHP, loadedMaxHP) : loadedMaxHP;

        } catch (e) {
            console.error("Erreur lors du chargement des données:", e);
            localStorage.removeItem('characterData');
        }
    }
}

// Fonction pour augmenter les PV actuels
function increaseCurrentHP() {
    const maxHPElement = document.getElementById('display-max-hp');
    if (!maxHPElement) return;
    let maxHP = parseInt(maxHPElement.textContent) || 0;
    const previousHP = currentHP; // Store previous HP to check if it was 0 or less
    if (currentHP < maxHP) currentHP++;

    // If HP was 0 or less and is now greater than 0, reset death saves
    if (previousHP <= 0 && currentHP > 0) {
        deathSaveSuccesses = 0;
        deathSaveFailures = 0;
        updateDeathSaveIcons(); // Update icons immediately after reset
    }
    updateCharacterSheet();
}

function decreaseCurrentHP() {
    const previousHP = currentHP; // Store previous HP to check if it was 0 or less
    if (currentHP > 0) currentHP--;

    // Trait Acharnement (Orc)
    const raceSelect = document.getElementById('race');
    if (raceSelect && raceSelect.value === "Orc" && currentHP <= 0 && previousHP > 0 && !acharnementUsed) {
        currentHP = 1;
        acharnementUsed = true;
        showToast("Acharnement activé ! Vous tombez à 1 PV.", 4000);
    }
    updateCharacterSheet();
}

function increaseTemporaryHP() {
    temporaryHP++;
    updateCharacterSheet();
}

function decreaseTemporaryHP() {
    if (temporaryHP > 0) temporaryHP--;
    updateCharacterSheet();
}

function shortRest() {
    const levelElement = document.getElementById('level');
    const classElement = document.getElementById('class');
    const constitutionElement = document.getElementById('constitution');
    if (!levelElement || !classElement || !constitutionElement) return;

    const level = parseInt(levelElement.value);
    const className = classElement.value;
    const constitutionModifier = getModifier(parseInt(constitutionElement.value));
    const availableHitDice = level - spentHitDice;

    if (availableHitDice <= 0) { 
        showModal("Plus de dés de vie disponibles pour un court repos.");
        return;
    }

    if (spentHitDice < level) {
        let hpRecovered = Math.max(1, rollDie(hitDice[className] || 6) + constitutionModifier);
        spentHitDice++;

        const maxHPElement = document.getElementById('display-max-hp');
        if (!maxHPElement) return;
        let maxHP = parseInt(maxHPElement.textContent) || 0;
        const previousHP = currentHP; // Store previous HP
        currentHP = Math.min(currentHP + hpRecovered, maxHP);
        
        // If HP was 0 or less and is now greater than 0, reset death saves
        if (previousHP <= 0 && currentHP > 0) {
            deathSaveSuccesses = 0;
            deathSaveFailures = 0;
            updateDeathSaveIcons(); // Update icons immediately after reset
        }

        showModal(`Court repos: ${hpRecovered} PV récupérés (1 dé de vie dépensé).`);
        
        // Réinitialiser les utilisations de Poussée d'adrénaline
        const raceSelect = document.getElementById('race');
        if (raceSelect && raceSelect.value === "Orc") {
            adrenalineUses = proficiencyBonusByLevel[level - 1]; // Max uses = proficiency bonus
        }

        updateCharacterSheet();
    } else {
        showModal("Aucun dé de vie à dépenser."); 
    }
}

function longRest() {
    const maxHPElement = document.getElementById('display-max-hp');
    if (!maxHPElement) return;
    let maxHP = parseInt(maxHPElement.textContent) || 0;
    spentHitDice = 0;
    currentHP = maxHP;
    temporaryHP = 0;
    deathSaveSuccesses = 0;
    deathSaveFailures = 0;
    
    const raceSelect = document.getElementById('race');
    const level = parseInt(document.getElementById('level').value) || 1;

    if (raceSelect && raceSelect.value === "Humain") {
        const inspirationCheckbox = document.getElementById('inspiration');
        if (inspirationCheckbox) {
            inspirationCheckbox.checked = true; // Set inspiration to true for Humans
            showToast("Inspiration reçue (trait Ingénieux)!", 3000);
        }
    }
    // Réinitialiser Acharnement et Poussée d'adrénaline pour les Orcs
    if (raceSelect && raceSelect.value === "Orc") {
        acharnementUsed = false;
        adrenalineUses = proficiencyBonusByLevel[level - 1]; // Max uses = proficiency bonus
    }

    showModal("Repos long: PV et dés de vie restaurés. Jets de sauvegarde contre la mort réinitialisés.");
    updateCharacterSheet();
}

function updateDeathSaveIcons() {
    if (deathSaveIconsDisplayElement) {
        deathSaveIconsDisplayElement.innerHTML =
            `${'<span class="death-icon heart-icon">❤️</span>'.repeat(deathSaveSuccesses)}` +
            `${'<span class="death-icon skull-icon">💀</span>'.repeat(deathSaveFailures)}`;
    }
}

function showToast(message, duration = 4000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        console.error("Le conteneur de toast (toast-container) est introuvable !");
        return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            if (toast.parentNode === toastContainer) {
                toastContainer.removeChild(toast);
            }
        }, { once: true });
    }, duration);
}


function showModal(message, onConfirmCallback = null) {
    const modal = document.getElementById('level-up-modal');
    const modalMessage = document.getElementById('level-up-message');
    const confirmButton = document.getElementById('level-up-confirm');
    if (!modal || !modalMessage || !confirmButton) return;

    const closeButton = modal.querySelector('.close-button');
    modalMessage.textContent = message;
    modal.style.display = "flex";

    const newConfirmButton = confirmButton.cloneNode(true);
    confirmButton.parentNode.replaceChild(newConfirmButton, confirmButton);

    let newCloseButton;
    if (closeButton) {
        newCloseButton = closeButton.cloneNode(true);
        closeButton.parentNode.replaceChild(newCloseButton, closeButton);
        newCloseButton.onclick = hideModal;
    }

    newConfirmButton.onclick = () => {
        if (onConfirmCallback) onConfirmCallback();
        hideModal();
    };
}

function hideModal() {
    const modal = document.getElementById('level-up-modal');
    if (modal) modal.style.display = "none";
}

function rollDeathSave() {
    const roll = rollDie(20);
    const overlayId = 'death-save-overlay';
    let overlay = document.getElementById(overlayId);
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = overlayId;
        overlay.className = 'dice-overlay'; 
        overlay.innerHTML = `<div class="death-save-result"></div>`; 
        document.body.appendChild(overlay);
    }
    const resultDisplay = overlay.querySelector('.death-save-result');
    if(resultDisplay) resultDisplay.textContent = roll;

    overlay.classList.remove('fade-out'); 
    overlay.classList.add('show'); 
    setTimeout(() => {
        overlay.classList.remove('show'); 
    }, 1000); 

    if (roll === 1) deathSaveFailures += 2;
    else if (roll < 10) deathSaveFailures += 1;
    else if (roll === 20) deathSaveSuccesses = 3; 
    else deathSaveSuccesses += 1;

    updateDeathSaveIcons();

    if (deathSaveSuccesses >= 3) {
        currentHP = 1; 
        deathSaveSuccesses = 0;
        deathSaveFailures = 0;
        showModal("Succès critiques aux jets de sauvegarde! Vous reprenez conscience avec 1 PV.", updateCharacterSheet);
    } else if (deathSaveFailures >= 3) {
        showModal("Échec critique aux jets de sauvegarde. Votre personnage est mort.", () => {
             deathSaveSuccesses = 0; 
             deathSaveFailures = 0;
            updateCharacterSheet(); 
        });
    }
    saveCharacterData(); 
    updateCharacterSheet(); 
}

function rollAndDisplayDice(sides) {
    let result1 = rollDie(sides);
    let result2 = 0;
    let finalResult = result1;
    let labelText = "";
    let criticalText = "";

    const advantageToggle = document.getElementById('advantage-toggle');
    const disadvantageToggle = document.getElementById('disadvantage-toggle');
    const isAdvantage = advantageToggle?.checked || false;
    const isDisadvantage = disadvantageToggle?.checked || false;

    if (isAdvantage && !isDisadvantage) {
        result2 = rollDie(sides);
        finalResult = Math.max(result1, result2);
        labelText = `d${sides} (Avantage): ${result1}, ${result2} -> ${finalResult}`;
    } else if (isDisadvantage && !isAdvantage) {
        result2 = rollDie(sides);
        finalResult = Math.min(result1, result2);
        labelText = `d${sides} (Désavantage): ${result1}, ${result2} -> ${finalResult}`;
    } else if (isAdvantage && isDisadvantage) { 
        finalResult = result1;
        labelText = `d${sides} (Neutre): ${finalResult}`;
    } else { 
        finalResult = result1;
        labelText = `d${sides}: ${finalResult}`;
    }

    if (sides === 20) {
        if (finalResult === 20) {
            criticalText = " (Succès Critique !)";
        } else if (finalResult === 1) {
            criticalText = " (Échec Critique !)";
        }
    }
    labelText += criticalText;

    const diceOverlay = document.getElementById('dice-roll-overlay');
    const diceResultDisplay = document.getElementById('dice-roll-result');
    const diceLabelDisplay = document.getElementById('dice-roll-label');

    if (diceResultDisplay) diceResultDisplay.textContent = finalResult;
    if (diceLabelDisplay) diceLabelDisplay.textContent = labelText;
    if (diceOverlay) {
        diceOverlay.classList.remove('fade-out'); 
        diceOverlay.classList.add('show'); 
        setTimeout(() => diceOverlay.classList.remove('show'), 1500); 
    }
}

// Nouvelle fonction pour le trait Poussée d'adrénaline (Orc)
function useAdrenalineRush() {
    const raceSelect = document.getElementById('race');
    const level = parseInt(document.getElementById('level').value) || 1;
    const proficiencyBonus = proficiencyBonusByLevel[level - 1];

    if (raceSelect.value === "Orc" && adrenalineUses > 0) {
        adrenalineUses--;
        temporaryHP += proficiencyBonus;
        showToast(`Poussée d'adrénaline activée ! +${proficiencyBonus} PV temporaires. Utilisations restantes : ${adrenalineUses}.`, 4000);
        updateCharacterSheet();
    } else if (raceSelect.value === "Orc") {
        showToast("Pas d'utilisation de Poussée d'adrénaline restante.", 4000);
    }
}


function updateCharacterSheet() {
    const requiredIds = ['name', 'race', 'class', 'level', 'subclass', 'alignment', 'background', 'size', 'experience', 'initial-armor-class', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'sheet-content', 'next-level-xp'];
    for (const id of requiredIds) {
        if (!document.getElementById(id)) {
            console.error(`Élément critique manquant: ${id}. Arrêt de updateCharacterSheet.`);
            return;
        }
    }

    document.querySelectorAll('.skill-proficiency').forEach(checkbox => {
        skillProficiencyStates[checkbox.dataset.skill] = checkbox.checked;
    });
    const inspirationCheckboxElement = document.getElementById('inspiration');
    if (inspirationCheckboxElement) inspirationChecked = inspirationCheckboxElement.checked;
    const advantageToggleElement = document.getElementById('advantage-toggle');
    if (advantageToggleElement) advantageEnabled = advantageToggleElement.checked;
    const disadvantageToggleElement = document.getElementById('disadvantage-toggle');
    if (disadvantageToggleElement) disadvantageEnabled = disadvantageToggleElement.checked;

    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const className = document.getElementById('class').value;
    const levelSelect = document.getElementById('level');
    let level = parseInt(levelSelect.value) || 1;

    const subclassSelect = document.getElementById('subclass');
    const subclassValue = subclassSelect ? subclassSelect.value : '';

    const alignment = document.getElementById('alignment').value;
    const background = document.getElementById('background').value;
    const size = document.getElementById('size').value;
    const experienceInput = document.getElementById('experience');
    let experience = parseInt(experienceInput.value) || 0;
    const sheetContentDiv = document.getElementById('sheet-content');
    const nextLevelXpDisplay = document.getElementById('next-level-xp');
    const initialACInput = document.getElementById('initial-armor-class');

    window.draconicAncestry = document.getElementById('draconic-ancestry')?.value || '';
    window.elvenLineage = document.getElementById('elven-lineage')?.value || '';
    window.elfKeenSensesChoice = document.getElementById('elf-keen-senses')?.value || '';
    window.elfSpellcastingAbility = document.getElementById('elf-spellcasting-ability')?.value || '';
    window.highElfCantripChoice = document.getElementById('high-elf-cantrip')?.value || '';
    window.gnomeLineage = document.getElementById('gnome-lineage')?.value || ''; 
    window.giantAncestry = document.getElementById('giant-ancestry')?.value || ''; 
    window.fiendishHeritage = document.getElementById('fiendish-heritage')?.value || '';

    const backgroundSelectElement = document.getElementById('background');
    if (backgroundSelectElement) {
        backgroundSelectElement.classList.toggle('background-selected-color', !!background);
    }

    if (initialACInput) {
        currentAC = parseInt(initialACInput.value) || 10;
    }

    const strength = parseInt(document.getElementById('strength').value) || 10;
    const dexterity = parseInt(document.getElementById('dexterity').value) || 10;
    const constitution = parseInt(document.getElementById('constitution').value) || 10;
    const intelligence = parseInt(document.getElementById('intelligence').value) || 10;
    const wisdom = parseInt(document.getElementById('wisdom').value) || 10;
    const charisma = parseInt(document.getElementById('charisma').value) || 10;

    const strengthModifier = getModifier(strength);
    const dexterityModifier = getModifier(dexterity);
    const constitutionModifier = getModifier(constitution);
    const intelligenceModifier = getModifier(intelligence);
    const wisdomModifier = getModifier(wisdom);
    const charismaModifier = getModifier(charisma);

    let characterSpeedMeters = raceSpeeds[race] || 9; // Default to 9m if race not found
    const currentElvenLineage = window.elvenLineage;
    if (race === "Elfe" && currentElvenLineage === "Elfe Sylvestre") {
        characterSpeedMeters = 10.5; // Elfe Sylvestre specific speed increase
    }
    const characterSpeedInches = (characterSpeedMeters / 1.5).toFixed(2);

    const savingThrowProficiencies = {
        "Barbare": ["strength", "constitution"], "Barde": ["dexterity", "charisma"], "Clerc": ["wisdom", "charisma"],
        "Druide": ["intelligence", "wisdom"], "Guerrier": ["strength", "constitution"], "Moine": ["strength", "dexterity"],
        "Paladin": ["wisdom", "charisma"], "Rôdeur": ["strength", "dexterity"], "Ensorceleur": ["constitution", "charisma"],
        "Magicien": ["intelligence", "wisdom"], "Roublard": ["dexterity", "intelligence"], "Occultiste": ["wisdom", "charisma"],
    };

    const xpNeededForNextLevel = getXpForNextLevel(level);
    if (nextLevelXpDisplay) nextLevelXpDisplay.textContent = xpNeededForNextLevel.toString();
    const proficiencyBonus = proficiencyBonusByLevel[level - 1];

    if (level < 20 && typeof xpNeededForNextLevel === 'number' && experience >= xpNeededForNextLevel) {
        const oldLevel = level;
        const newLevel = oldLevel + 1;
        const levelUpModalMessage = `Niveau ${newLevel} atteint!`;
        showModal(levelUpModalMessage, () => {
            const currentConstitutionModifier = getModifier(parseInt(document.getElementById('constitution').value) || 10);
            const currentHitDieValue = hitDice[className] || 6;
            if (!Array.isArray(hpGains)) hpGains = [];
            while (hpGains.length < oldLevel) {
                const gainForMissingLevel = (i === 0) ?
                    currentHitDieValue + currentConstitutionModifier :
                    rollDie(currentHitDieValue) + currentConstitutionModifier;
                hpGains.push(Math.max(1, gainForMissingLevel));
            }
            const hpRollForNewLevel = rollDie(currentHitDieValue);
            const newHpGainForLevelUp = Math.max(1, hpRollForNewLevel + currentConstitutionModifier);
            const toastMessage = `Niveau ${newLevel} : +${newHpGainForLevelUp} PV (jet d${currentHitDieValue}: ${hpRollForNewLevel} ${formatModifier(currentConstitutionModifier)} CON)`;
            showToast(toastMessage, 5000);
            hpGains.push(newHpGainForLevelUp);
            if (levelSelect) levelSelect.value = newLevel.toString();
            if (experienceInput) experienceInput.value = (experience - xpNeededForNextLevel).toString();
            currentHP = hpGains.reduce((sum, gain) => sum + gain, 0);
            updateSubclasses();
            updateCharacterSheet();
        });
        saveCharacterData();
        return;
    }

    const classSavingThrows = savingThrowProficiencies[className] || [];
    const strengthSaveMod = strengthModifier + (classSavingThrows.includes("strength") ? proficiencyBonus : 0);
    const dexteritySaveMod = dexterityModifier + (classSavingThrows.includes("dexterity") ? proficiencyBonus : 0);
    const constitutionSaveMod = constitutionModifier + (classSavingThrows.includes("constitution") ? proficiencyBonus : 0);
    const intelligenceSaveMod = intelligenceModifier + (classSavingThrows.includes("intelligence") ? proficiencyBonus : 0);
    const wisdomSaveMod = wisdomModifier + (classSavingThrows.includes("wisdom") ? proficiencyBonus : 0);
    const charismaSaveMod = charismaModifier + (classSavingThrows.includes("charisma") ? proficiencyBonus : 0);

    const renderingSkillStates = { ...skillProficiencyStates };
    const backgroundSkills = new Set();
    const bgSkillMap = {
        "Acolyte": ["Perspicacité", "Religion"], "Artiste": ["Acrobaties", "Représentation"], "Artisan": ["Investigation", "Persuasion"],
        "Charlatan": ["Escamotage", "Tromperie"], "Criminel": ["Discrétion", "Tromperie"], "Ermite": ["Médecine", "Religion"],
        "Fermier": ["Dressage", "Nature"], "Garde": ["Athlétisme", "Perception"], "Guide": ["Discrétion", "Survie"],
        "Marin": ["Athlétisme", "Perception"], "Marchand": ["Perspicacité", "Persuasion"], "Noble": ["Histoire", "Persuasion"],
        "Sage": ["Arcanes", "Histoire"], "Scribe": ["Investigation", "Religion"], "Soldat": ["Athlétisme", "Intimidation"],
        "Voyageur": ["Perspicacité", "Survie"]
    };
    if (bgSkillMap[background]) {
        bgSkillMap[background].forEach(s => {
            renderingSkillStates[s] = true;
            backgroundSkills.add(s);
        });
    }
    const currentElfKeenSensesVal = window.elfKeenSensesChoice;
    if (race === "Elfe" && currentElfKeenSensesVal && skills[currentElfKeenSensesVal]) {
        renderingSkillStates[currentElfKeenSensesVal] = true;
    }


    let passivePerception = 10 + wisdomModifier + (renderingSkillStates["Perception"] ? proficiencyBonus : 0);

    let maxHP = 0;
    const currentHitDieValue = hitDice[className] || 6;
    const currentConstitutionModifier = getModifier(constitution);
    if (!Array.isArray(hpGains)) hpGains = [];
    let hpRecalculatedDueToClassOrConChange = false;
    const savedCharacterDataString = localStorage.getItem('characterData');
    if (savedCharacterDataString) {
        try {
            const savedCharacterData = JSON.parse(savedCharacterDataString);
            if (savedCharacterData.class !== className || parseInt(savedCharacterData.constitution || '10') !== constitution) {
                hpRecalculatedDueToClassOrConChange = true;
            }
        } catch (e) { console.error("Error parsing saved data for HP check", e); }
    }
    if (hpGains.length !== level || hpRecalculatedDueToClassOrConChange) {
        const tempHpGains = [];
        for (let i = 0; i < level; i++) {
            let gainThisLevel = (i === 0) ?
                currentHitDieValue + currentConstitutionModifier :
                rollDie(currentHitDieValue) + currentConstitutionModifier;
            if (!hpRecalculatedDueToClassOrConChange && hpGains[i] && i < hpGains.length) {
                 gainThisLevel = hpGains[i]; // Correction pour conserver les anciens gains si pas de recalcul
            }
            tempHpGains.push(Math.max(1, gainThisLevel));
        }
        hpGains = tempHpGains;
    }
    maxHP = hpGains.reduce((sum, gain) => sum + gain, 0);
    // Appliquer le bonus de Ténacité naine
    if (race === "Nain") {
        maxHP += level;
    }

    if (currentHP > maxHP || hpRecalculatedDueToClassOrConChange || (currentHP === 0 && maxHP > 0 && !localStorage.getItem('characterData'))) {
        currentHP = maxHP;
    }
    currentHP = Math.max(0, currentHP);

    let racialTraitsHtmlOutput = [];
    
    // Traitement des traits raciaux en fonction de la race sélectionnée
    // Chaque bloc de race doit construire l'intégralité de son affichage de traits.
    if (race === "Aasimar") {
        racialTraitsHtmlOutput.push({ name: "Mains Guérisseuses", description: "Au prix d'une action, vous touchez physiquement une créature et jetez autant de d4 que votre bonus de maîtrise. La créature récupère autant de PV que le total obtenue. Une fois que vous avez utilisez ce trait, vous devez terminer un repos long pour y recourir à nouveau." });
        racialTraitsHtmlOutput.push({ name: "Porte-lumiére", description: "Vous  connaisssez le sort mineur lumière. Le CHA est la caractéristique d'incantation associée." });
        racialTraitsHtmlOutput.push({ name: "Résistance céleste", description: "Vous bénéficiez de la Résistance aux dégâts nécrotiques et radiants." });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vision dans le noir sur 18m (12 pouces)." });
        const ddLinceulNecrotique = 8 + charismaModifier + proficiencyBonus;
        racialTraitsHtmlOutput.push({ name: "Révélation céleste", description: `Lorsque vous atteignez le niveau de personnage 3, vous pouvez vous transformer par une action Bonus en utilisant l'une des options ci-dessous (choisissez l'option à chaque transformation). La transformation dure 1 minute ou jusqu'à ce que vous y mettiez un terme (pas d'action requise). Vous devez terminer un Repos long avant de pouvoir vous retransformer ainsi. Une fois à chacun de vos tours tant que persiste cette transformation, vous pouvez infliger des dégâts supplémentaires à une cible lorsque vous lui infligez des dégâts par une attaque ou un sort. Le montant de ces dégâts supplémentaires est égal à votre bonus de maîtrise, et ils sont de type nécrotiques pour Linceul nécrotique, ou radiants pour Ailes célestes et Radiance intérieure Voici vos options de transformation : <br><br> <strong>Ailes célestes.</strong> Deux ailes intangibles ce déploient dans votre dos. Jusqu'à la fin de la transformation, vous disposez d'une Vitesse de vol égale à votre Vitesse. <br><br><strong>Linceul nécrotique.</strong> Vos yeux se muent en puits de ténèbres et deux ailes spectrales se déploient dans votre dos. Les créatures autres que vos alliés dans un rayon de 3m (2 pouces) doivent réussir un jet de sauvegarde de Charisme (DD égal à ${ddLinceulNecrotique}) sous peine de subir l'état Effrayé jusqu'à la fin de votre tour suivant.<br><br><strong>Radiance intérieure.</strong> Une lumière intense émane de vos veux et de votre bouche. Pour toute la durée, vous produisez une Lumière vive sur un rayon de 3m (2 pouces) et une Lumière faible sur 3m (2 pouces) de plus ; à la fin de chacun de vos tours, toute créature dans un rayon de 3m ( 2 pouces) subit autant de dégâts radiants que votre bonus de maîtrise.` });
    }

    else if (race === "Drakéide") {
        const selectedDraconicAncestryValue = window.draconicAncestry;
        const damageType = getDamageTypeFromAncestry(selectedDraconicAncestryValue);
        const ancestryNameOnly = selectedDraconicAncestryValue ? selectedDraconicAncestryValue.substring(0, selectedDraconicAncestryValue.indexOf(' (') || selectedDraconicAncestryValue.length).trim() : 'Inconnue';
        racialTraitsHtmlOutput.push({ name: "Ascendance draconique", description: selectedDraconicAncestryValue ? `Votre ascendance draconique (${ancestryNameOnly}, type ${damageType}) détermine le type de dégâts auquel vous êtes résistant (${damageType}) et le type de dégâts de votre souffle (${damageType}).` : "Votre ascendance draconique détermine le type de dégâts auquel vous êtes résistant et le type de dégâts de votre souffle (voir la section Ascendance Draconique dans le formulaire)." });
        const ddSouffleDraconique = 8 + constitutionModifier + proficiencyBonus;
        racialTraitsHtmlOutput.push({ name: "Souffle", description: `Vous pouvez remplacer l'une de vos attaques par une expiration d'énergie magique sous la forme d'un Cône de 4,50 m (3 pouces) ou d'une Ligne de 9 m (6 pouces) de long et 1,50 m (1 pouce) de large (choisissez la forme à chaque fois). Chaque créature prise dans la zone effectue un jet de sauvegarde de Dextérité (DD ${ddSouffleDraconique}). En cas d'échec, la créature subit 1d10 dégâts de type ${damageType}. En cas de réussite, elle ne subit que la moitié de ces dégâts. Les dégâts augmentent de 1d10 lorsque vous atteignez les niveaux de personnage 5 (2d10), 11 (3d10) et 17 (4d10). Vous pouvez recourir à ce Souffle autant de fois que votre bonus de maîtrise, et récupérez ce quota en terminant un Repos long` });
        racialTraitsHtmlOutput.push({ name: "Résistance aux dégâts", description: selectedDraconicAncestryValue ? `Vous avez la résistance aux dégâts de type ${damageType}.` : "Vous avez la résistance au type de dégâts associé à votre ascendance draconique." });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vision dans le noir sur 18m (12 pouces)." });
        racialTraitsHtmlOutput.push({ name: "Vol draconique", description: "Lorsque vous atteignez le niveau 5, vous pouvez canaliser la magie draconique pour vous octroyer le vol de façon temporaire. Par une action Bonus, il vous pousse des ailes spectrales dans le dos qui persistent 10 minutes ou jusqu'à ce que vous rétractiez ces ailes (pas d'action requise) ou subissiez l'état Neutralisé. Pour toute la durée, vous disposez d'une Vitesse de vol égale à votre Vitesse. Vos ailes semblent être faites de la même énergie que votre souffle. Une fois ce trait utilisé, vous devez terminer un Repos long pour pouvoir y recourir de nouveau." });
    }

    else if (race === "Elfe") {
        const currentElfLineageVal = window.elvenLineage;
        const currentElfKeenSensesVal = window.elfKeenSensesChoice;
        const currentElfSpellcastingAbilityVal = window.elfSpellcastingAbility;
        const lineageDetails = elvenLineageDetails[currentElfLineageVal];
        const currentHighElfCantripVal = window.highElfCantripChoice;

        racialTraitsHtmlOutput.push({ name: "Ascendance féerique", description: "Vous avez l'Avantage aux jets de sauvegarde contre l'état Charmé." });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: currentElfLineageVal === "Drow" ? "Vous disposez de la vision dans le noir sur 36m (24 pouces)." : "Vous disposez de la vision dans le noir sur 18m (12 pouces)." });
        racialTraitsHtmlOutput.push({ name: "Sens aiguisés", description: `Vous maîtrisez une compétence (Perception, Perspicacité ou Survie).${currentElfKeenSensesVal ? ` (Choix actuel : <strong>${currentElfKeenSensesVal}</strong>)` : ""}` });
        racialTraitsHtmlOutput.push({ name: "Transe", description: "La magie ne peut pas vous endormir et vous pouvez terminer un Repos long en 4h si vous les passez en transe méditative durant laquelle vous reste en éveil." });
        racialTraitsHtmlOutput.push({ name: "Lignage elfique", description: `Vous appartenez à un lignage qui vous octroie des aptitudes surnaturelles. Les sorts appris dépendent de votre lignage et de votre niveau.${currentElfSpellcastingAbilityVal ? ` Votre caractéristique d'incantation pour ces sorts est <strong>${currentElfSpellcastingAbilityVal}</strong>.` : " <strong><b>(Choisissez votre caractéristique d'incantation à la création de votre personnage.)</b></strong>"}` });

        if (lineageDetails) {
            if (currentElfLineageVal === "Haut Elfe") {
                racialTraitsHtmlOutput.push({ name: "Sort mineur (Haut-Elfe)", description: `Vous connaissez un sort mineur de la liste de sort du Magicien, vous pouvez le remplacer par un autre quand vous terminez un Repos long.${currentHighElfCantripVal ? ` (Actuellement choisi : <strong>${currentHighElfCantripVal}</strong>)` : ""}` });
            } else if (lineageDetails.baseCantrip) {
                racialTraitsHtmlOutput.push({ name: `Sort mineur (${currentElfLineageVal})`, description: `Vous connaissez le sort mineur : <strong>${lineageDetails.baseCantrip}</strong>.` });
            }
            if (level >= 3 && lineageDetails.level3Spell) {
                racialTraitsHtmlOutput.push({ name: `Sort de lignage (Niveau 3 - ${currentElfLineageVal})`, description: `Vous apprenez le sort : <strong>${lineageDetails.level3Spell}</strong>. Vous pouvez le lancer une fois sans dépenser d'emplacement de sort (récupération après Repos long), ou avec vos emplacements de sorts.` });
            }
            if (level >= 5 && lineageDetails.level5Spell) {
                racialTraitsHtmlOutput.push({ name: `Sort de lignage (Niveau 5 - ${currentElfLineageVal})`, description: `Vous apprenez le sort : <strong>${lineageDetails.level5Spell}</strong>. Vous pouvez le lancer une fois sans dépenser d'emplacement de sort (récupération après Repos long), ou avec vos emplacements de sorts.` });
            }
            if (currentElfLineageVal === "Elfe Sylvestre") {
                 racialTraitsHtmlOutput.push({ name: "Marchebois (Elfe Sylvestre)", description: "Votre vitesse de base est de 10,50m." });
            }
        }
    }

    else if (race === "Gnome") {
        const currentGnomeLineageVal = window.gnomeLineage;
        const lineageDetails = gnomeLineageDetails[currentGnomeLineageVal];
        racialTraitsHtmlOutput.push({ name: "Ruse Gnome", description: "Vous avez l'Avantage aux jets de sauvegarde d'INT, de SAG et de CHA." });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 18m (12 pouces)." });
        racialTraitsHtmlOutput.push({ name: "Lignage gnome", description: `Vous appartenez à un lignage qui vous octroie des aptitudes surnaturelles. L'INT, la SAG ou le CHA est votre caractéristique d'incantation pour les sorts de votre lignage, ces sorts sont toujours préparés.${lineageDetails ? ` (Type : <strong>${currentGnomeLineageVal}</strong>. Détails: ${lineageDetails.description})` : ""}` });
    }

    else if (race === "Goliath") {
        const currentGiantAncestryVal = window.giantAncestry;
        const ancestryDetails = giantAncestryDetails[currentGiantAncestryVal];
        racialTraitsHtmlOutput.push({ name: "Ascendance gigante", description: `Vous êtes un lointain descendant des géants. Vous disposez d'une faveur surnaturelle liée à vos ancêtres ; vous pouvez recourir à ce bénéfice autant de fois que votre bonus de maîtrise et récupérez ce quota en terminant un Repos long.${ancestryDetails ? ` (Type : <strong>${currentGiantAncestryVal}</strong>. Détails: ${ancestryDetails.description})` : ""}` });
        racialTraitsHtmlOutput.push({ name: "Forte carrure", description: "Vous avez l'Avantage à tous les tests de caractéristique que vous effectuez pour vous libérer de l'état Agrippé. Votre catégorie de taille est en outre considérée comme un cran supérieur pour définir votre capacité de charge." });
        if (level >= 5) {
            racialTraitsHtmlOutput.push({ name: "Forme de géant", description: "Au niveau 5, vous pouvez changer de catégorie de taille et devenir de taille G par une action Bonus, à condition que l'espace que vous occupez soit suffisamment vaste. Cette transformation dure 10 minutes ou jusqu'à ce que vous y mettiez un terme (pas d'action requise). Pour toute la durée, vous avez l'Avantage aux test de FOR et votre vitesse augmente de 3m(2 pouces). Une fois ce trait utilisé, vous devez terminer un Repos long pour y recourir à nouveau." });
        }
    }

    else if (race === "Halfelin") {
        racialTraitsHtmlOutput.push({ name: "Agilité halfeline", description: "Vous pouvez vous déplacer dans l'espace de toute créature d'une catégorie de taille supérieure à la vôtre, mais ne pouvez pas vous arrêter dans le même espace que celle-ci." });
        racialTraitsHtmlOutput.push({ name: "Brave", description: "Vous avez l'Avantage aux jets de sauvegarde contre l'état Effrayé." });
        racialTraitsHtmlOutput.push({ name: "Chance", description: "Quand vous obtenez un 1 lors d'un Test d20, vous pouvez relancer le dé, mais devez utiliser le nouveau résultat." });
        racialTraitsHtmlOutput.push({ name: "Discrétion naturelle", description: "Il vous suffit d'être dans l'ombre d'une créature de catégorie de taille supérieure à la vôtre pour pouvoir entreprendre l'action Furtivité." });
    }

    else if (race === "Humain") {
        racialTraitsHtmlOutput.push({ name: "Compétent", description: "Vous recevez la maîtrise d'une compétence de votre choix." });
        racialTraitsHtmlOutput.push({ name: "Ingénieux", description: "Vous recevez L'Inspiration Chaque fois que vous terminez un Repos long." });
        racialTraitsHtmlOutput.push({ name: "Polyvalent", description: "Vous recevez un don d'origines de votre choix." });
    }
    // Ajout des traits spécifiques aux Nains
    else if (race === "Nain") {
        racialTraitsHtmlOutput.push({ name: "Connaissance de la pierre", description: "Par une action Bonus, vous recevez la Perception des vibrations à 18m(12 pouces) pendant 10 minutes. Cette Perception des vibrations nécessite que vous soyez sur une surface en pierre ou en contact physique avec une telle surface. Cette pierre peut-être naturelle ou façonnée. Vous pouvez recourir à ce trait autant de fois que votre bonus de maîtrise, et récupérez ce quota en terminant un Repos long." });
        racialTraitsHtmlOutput.push({ name: "Résistance naine", description: "Vous bénéficiez de la Résistance aux dégâts de poison et vous avez l'Avantage aux jets de sauvegarde contre l'état Empoisonné." });
        racialTraitsHtmlOutput.push({ name: "Ténacité naine", description: "Votre maximum de PV augmente de 1, et encore de 1 à chaque niveau que vous gagnez." });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vous disposez de la Vision dans le noir sur 36m(24 pouces)." });
    }
    // Ajout des traits spécifiques aux Orcs
    else if (race === "Orc") {
        racialTraitsHtmlOutput.push({ name: "Acharnement", description: `Si vous tombez à 0 PV, vous pouvez vous retrouvez à 1 PV. Une fois ce trait utilisé, vous devez terminer un Repos long pour y recourir de nouveau. (Utilisé: ${acharnementUsed ? 'Oui' : 'Non'})` });
        racialTraitsHtmlOutput.push({ name: "Poussée d'adrénaline", description: `Par une action Bonus vous pouvez entreprendre l'action Pointe. Quand vous faite ainsi, vous recevez un nombre de PV temporaire égal à votre bonus de maîtrise. Vous pouvez recourir à ce trait autant de fois que votre bonus de maîtrise et récupérez ce quota en terminant un Repos court ou long. (Utilisations restantes: ${adrenalineUses}/${proficiencyBonus})` });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 36m(24 pouces)." });
    }
    // Ajout des traits spécifiques aux Tieffelins
    else if (race === "Tieffelin") {
        const currentFiendishHeritageVal = window.fiendishHeritage;
        const heritageDetails = fiendishHeritageDetails[currentFiendishHeritageVal];
        const spellcastingAbility = document.getElementById('elf-spellcasting-ability')?.value || "INT, SAG ou CHA"; // Réutiliser le sélecteur existant pour la caractéristique d'incantation

        racialTraitsHtmlOutput.push({ name: "Héritage fiélon", description: `Vous héritage vous octroie des aptitudes surnaturelles. L'INT, la SAG ou le CHA est votre caractéristique d'incantation pour les sorts de votre héritage. (<strong>Choix à la création du personnage</strong>).` });
        
        if (heritageDetails) {
            racialTraitsHtmlOutput.push({ name: `Résistance (${currentFiendishHeritageVal})`, description: `Vous bénéficiez de la Résistance aux dégâts ${heritageDetails.resistance}.` });
            racialTraitsHtmlOutput.push({ name: `Sort mineur (${currentFiendishHeritageVal})`, description: `Vous connaissez le sort mineur : <strong>${heritageDetails.level1Spell}</strong>.` });
            if (level >= 3) {
                racialTraitsHtmlOutput.push({ name: `Sort de lignage (Niveau 3 - ${currentFiendishHeritageVal})`, description: `Vous apprenez le sort : <strong>${heritageDetails.level3Spell}</strong>. Vous pouvez le lancer une fois sans dépenser d'emplacement de sort (récupération après Repos long), ou avec vos emplacements de sorts.` });
            }
            if (level >= 5) {
                racialTraitsHtmlOutput.push({ name: `Sort de lignage (Niveau 5 - ${currentFiendishHeritageVal})`, description: `Vous apprenez le sort : <strong>${heritageDetails.level5Spell}</strong>. Vous pouvez le lancer une fois sans dépenser d'emplacement de sort (récupération après Repos long), ou avec vos emplacements de sorts.` });
            }
        }
        racialTraitsHtmlOutput.push({ name: "Présence d'outre-monde", description: `Vous connaissez le sort mineur thaumaturgie. Quand vous le lancez, il utilise la même caractéristique d'incantation que celle de votre héritage fiélon.` });
        racialTraitsHtmlOutput.push({ name: "Vision dans le noir", description: "Vous disposez de la vision dans le noir sur 18m(12 pouces)." });
    }
    // Si la race n'est pas gérée spécifiquement ci-dessus, affichez les traits par défaut si présents
    else {
        const defaultTraits = racialTraits[race] || [];
        if (defaultTraits.length > 0) {
            defaultTraits.forEach(trait => {
                racialTraitsHtmlOutput.push({ name: trait.name, description: trait.description });
            });
        } else {
            racialTraitsHtmlOutput.push({ name: "Traits Racials", description: "Aucun trait racial spécifique à afficher pour cette race." });
        }
    }
    
    const finalRacialTraitsHtml = racialTraitsHtmlOutput.length > 0 ? racialTraitsHtmlOutput.map(trait => `<div class="racial-trait mb-3"><h4 class="font-semibold text-lg text-accent">${trait.name}</h4><p class="text-sm text-secondary">${trait.description}</p></div>`).join('') : '<p class="text-sm text-secondary">Aucun trait racial spécifique à afficher pour cette race ou sélection.</p>';
    
    // Générer le HTML pour les maîtrises d'équipement
    let finalProficiencies = {
        armor: new Set(),
        weapons: new Set(),
        tools: new Set()
    };

    // Ajouter les maîtrises de classe
    if (className && classProficiencies[className]) {
        const classProfs = classProficiencies[className];
        if(classProfs.armor) classProfs.armor.forEach(p => finalProficiencies.armor.add(p));
        if(classProfs.weapons) classProfs.weapons.forEach(p => finalProficiencies.weapons.add(p));
        if(classProfs.tools) classProfs.tools.forEach(p => finalProficiencies.tools.add(p));
    }

    // Ajouter les maîtrises d'historique
    if (background && backgroundProficiencies[background]) {
        const backgroundProfs = backgroundProficiencies[background];
        if (backgroundProfs.armor) backgroundProfs.armor.forEach(p => finalProficiencies.armor.add(p));
        if (backgroundProfs.weapons) backgroundProfs.weapons.forEach(p => finalProficiencies.weapons.add(p));
        if (backgroundProfs.tools) backgroundProfs.tools.forEach(p => finalProficiencies.tools.add(p));
    }

    let equipmentProficienciesHtml = '<p class="text-sm text-secondary">Sélectionnez une classe ou un historique pour voir les maîtrises.</p>';

    const armorArray = Array.from(finalProficiencies.armor);
    const weaponsArray = Array.from(finalProficiencies.weapons);
    let toolsArray = Array.from(finalProficiencies.tools);

    if (toolsArray.length > 1) {
        toolsArray = toolsArray.filter(t => t !== "Aucun");
    }

    if (armorArray.length > 0 || weaponsArray.length > 0 || (toolsArray.length > 0 && !(toolsArray.length === 1 && toolsArray[0] === "Aucun"))) {
        equipmentProficienciesHtml = `
            <div class="equipment-proficiency-category">
                <h5 class="font-semibold text-md text-secondary-accent">Armures</h5>
                <p class="text-sm text-secondary">${armorArray.length > 0 ? armorArray.join(', ') : 'Aucune'}</p>
            </div>
            <div class="equipment-proficiency-category mt-2">
                <h5 class="font-semibold text-md text-secondary-accent">Armes</h5>
                <p class="text-sm text-secondary">${weaponsArray.length > 0 ? weaponsArray.join(', ') : 'Aucune'}</p>
            </div>
            <div class="equipment-proficiency-category mt-2">
                <h5 class="font-semibold text-md text-secondary-accent">Outils</h5>
                <p class="text-sm text-secondary">${toolsArray.length > 0 ? toolsArray.join(', ') : 'Aucun'}</p>
            </div>
        `;
    }

    // ***** NOUVELLE LOGIQUE : GÉNÉRATION DES APTITUDES DE CLASSE *****
    let classFeaturesHtmlOutput = [];
    if (className && classFeatures[className]) {
        // Collecter toutes les caractéristiques uniques jusqu'au niveau actuel
        const collectedFeatures = new Map();
        for (let i = 1; i <= level; i++) {
            // Aptitudes de la classe principale
            if (classFeatures[className][i]) {
                classFeatures[className][i].forEach(feature => {
                    // Pour les caractéristiques qui s'améliorent (comme Critique brutal), nous ne voulons afficher que la dernière version.
                    // Pour les autres, nous les ajoutons simplement.
                    collectedFeatures.set(feature.name, { ...feature, level: i, source: className });
                });
            }
            // Aptitudes de la sous-classe
            if (subclassValue && subclassFeatures[subclassValue] && subclassFeatures[subclassValue][i]) {
                subclassFeatures[subclassValue][i].forEach(feature => {
                    collectedFeatures.set(feature.name, { ...feature, level: i, source: subclassValue });
                });
            }
        }
        
        classFeaturesHtmlOutput = Array.from(collectedFeatures.values());
    }
    
    const finalClassFeaturesHtml = classFeaturesHtmlOutput.length > 0
        ? classFeaturesHtmlOutput.map(feature => {
            let featureDescription = feature.description;
            // ***** MODIFICATION DYNAMIQUE DE LA RAGE *****
            if (feature.name === 'Rage' && className === 'Barbare') {
                const rageUses = getBarbarianRageUses(level);
                const rageDamage = getBarbarianRageDamage(level);
                featureDescription = feature.description
                    .replace(
                        'Vous pouvez entrer en Rage 2 fois par jour ( selon le niveau ).', 
                        `Vous pouvez entrer en Rage <strong>${rageUses} fois</strong>.`
                    )
                    .replace(
                        'Vous en regagnez une utilisation lorsque vous terminez un Repos court, et récupérez tout le quota en terminant un Repos long.',
                        'Vous regagnez toutes les utilisations dépensées après un repos long.'
                    )
                    .replace(
                        `d'un bonus de +2 dégâts de rage (selon le niveau)`,
                        `d'un bonus de <strong>+${rageDamage}</strong> dégâts de rage`
                    );
            }

            return `
            <div class="class-feature mb-3">
                <h4 class="font-semibold text-lg text-accent">${feature.name} <span class="text-sm font-normal text-secondary">(Niv. ${feature.level} ${feature.source})</span></h4>
                <p class="text-sm text-secondary">${featureDescription}</p>
            </div>`
        }).join('')
        : '<p class="text-sm text-secondary">Sélectionnez une classe et un niveau pour voir les aptitudes.</p>';
    
    let sheetHTML = `
        <div class="grid-container">
            <div> <div class="sheet-field"><span class="sheet-field-label">Nom:</span><span class="sheet-field-value">${name}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Race:</span><span class="sheet-field-value">${race}</span></div>
                ${race === 'Drakéide' && window.draconicAncestry ? `<div class="sheet-field"><span class="sheet-field-label">Ascendance Draconique:</span><span class="sheet-field-value">${window.draconicAncestry}</span></div>` : ''}
                ${race === 'Elfe' && window.elvenLineage ? `<div class="sheet-field"><span class="sheet-field-label">Lignage Elfique:</span><span class="sheet-field-value">${window.elvenLineage}</span></div>` : ''}
                ${race === 'Gnome' && window.gnomeLineage ? `<div class="sheet-field"><span class="sheet-field-label">Lignage Gnome:</span><span class="sheet-field-value">${window.gnomeLineage}</span></div>` : ''}
                ${race === 'Goliath' && window.giantAncestry ? `<div class="sheet-field"><span class="sheet-field-label">Ascendance Gigante:</span><span class="sheet-field-value">${window.giantAncestry}</span></div>` : ''}
                ${race === 'Tieffelin' && window.fiendishHeritage ? `<div class="sheet-field"><span class="sheet-field-label">Héritage Fiélon:</span><span class="sheet-field-value">${window.fiendishHeritage}</span></div>` : ''}
                <div class="sheet-field"><span class="sheet-field-label">Alignement:</span><span class="sheet-field-value">${alignment}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Historique:</span><span class="sheet-field-value">${background}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Taille:</span><span class="sheet-field-value">${size}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Classe:</span><span class="sheet-field-value">${className}</span></div>
                ${subclassValue ? `<div class="sheet-field"><span class="sheet-field-label">Sous-classe:</span><span class="sheet-field-value">${subclassValue}</span></div>` : ''}
                <div class="sheet-field"><span class="sheet-field-label">Niveau:</span><span class="sheet-field-value">${level}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">XP Actuels:</span><span class="sheet-field-value">${experience}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">XP / Niveau Suivant:</span><span class="sheet-field-value">${xpNeededForNextLevel}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Bonus Maîtrise:</span><span class="sheet-field-value">+${proficiencyBonus}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Inspiration:</span><input type="checkbox" id="inspiration" class="form-checkbox-custom" ${inspirationChecked ? 'checked' : ''}></div>
            </div>
            <div> <div class="sheet-field"><span class="sheet-field-label">Initiative:</span><span id="initiative-display" class="sheet-field-modifier">${formatModifier(dexterityModifier)}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">CA:</span><span id="ac-display" class="sheet-field-value">${currentAC}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Vitesse:</span><span id="speed-display" class="sheet-field-value">${characterSpeedMeters.toFixed(2)} m (${characterSpeedInches} pouces)</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Perception Passive:</span><span class="sheet-field-value" id="passive-perception">${passivePerception}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">PV Max:</span><span class="sheet-field-value" id="display-max-hp">${maxHP}</span></div>
                <div class="sheet-field">
                    <span class="sheet-field-label">PV Actuels:</span>
                    <span class="sheet-field-value">
                        <button id="decrease-hp" class="hp-button" aria-label="Diminuer PV actuels">-</button>
                        <span id="current-hp-display">${currentHP}</span>
                        <button id="increase-hp" class="hp-button" aria-label="Augmenter PV actuels">+</button>
                    </span>
                </div>
                <div class="sheet-field">
                    <span class="sheet-field-label">PV Temporaires:</span>
                    <span class="sheet-field-value">
                        <button id="decrease-temp-hp" class="hp-button" aria-label="Diminuer PV temporaires">-</button>
                        <span id="current-temp-hp-display">${temporaryHP}</span>
                        <button id="increase-temp-hp" class="hp-button" aria-label="Augmenter PV temporaires">+</button>
                    </span>
                </div>
                <div class="sheet-field"><span class="sheet-field-label">Dés de Vie Totaux:</span><span class="sheet-field-value">${level}d${hitDice[className] || 6}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Dés de Vie Dépensés:</span><span class="sheet-field-value">${spentHitDice}</span></div>
                <div class="sheet-field"><span class="sheet-field-label">Dés de Vie Restants:</span><span class="sheet-field-value">${level - spentHitDice}</span></div>
                <div class="sheet-field flex justify-around mt-2">
                    <button id="short-rest-button" class="button secondary-button">Court Repos</button>
                    <button id="long-rest-button" class="button secondary-button">Repos Long</button>
                </div>
                ${currentHP <= 0 ? `
                <div class="sheet-field mt-2 text-center" id="death-save-section">
                    <button id="death-save-button" class="button primary-button">Jet Sauvegarde Mort</button>
                    <div id="death-save-icons" class="death-save-icons"></div>
                </div>
                ` : ''}
                ${race === 'Orc' ? `
                <div class="sheet-field mt-2 text-center">
                    <button id="adrenaline-rush-button" class="button secondary-button">Poussée d'adrénaline</button>
                </div>
                ` : ''}
            </div>
        </div>
        <div class="sheet-section">
            <div class="sheet-header">CARACTÉRISTIQUES</div>
            <div class="ability-scores">
                <div class="ability-score">Force: <span class="sheet-field-value">${strength}</span> (<span class="sheet-field-modifier">${formatModifier(strengthModifier)}</span>)</div>
                <div class="ability-score">Dextérité: <span class="sheet-field-value">${dexterity}</span> (<span class="sheet-field-modifier">${formatModifier(dexterityModifier)}</span>)</div>
                <div class="ability-score">Constitution: <span class="sheet-field-value">${constitution}</span> (<span class="sheet-field-modifier">${formatModifier(constitutionModifier)}</span>)</div>
                <div class="ability-score">Intelligence: <span class="sheet-field-value">${intelligence}</span> (<span class="sheet-field-modifier">${formatModifier(intelligenceModifier)}</span>)</div>
                <div class="ability-score">Sagesse: <span class="sheet-field-value">${wisdom}</span> (<span class="sheet-field-modifier">${formatModifier(wisdomModifier)}</span>)</div>
                <div class="ability-score">Charisme: <span class="sheet-field-value">${charisma}</span> (<span class="sheet-field-modifier">${formatModifier(charismaModifier)}</span>)</div>
            </div>
        </div>
        <div class="sheet-section">
            <div class="sheet-header">JETS DE SAUVEGARDE</div>
            <div class="ability-scores"> <div class="ability-score">Force: <span class="sheet-field-modifier">${formatModifier(strengthSaveMod)}</span></div>
                <div class="ability-score">Dextérité: <span class="sheet-field-modifier">${formatModifier(dexteritySaveMod)}</span></div>
                <div class="ability-score">Constitution: <span class="sheet-field-modifier">${formatModifier(constitutionSaveMod)}</span></div>
                <div class="ability-score">Intelligence: <span class="sheet-field-modifier">${formatModifier(intelligenceSaveMod)}</span></div>
                <div class="ability-score">Sagesse: <span class="sheet-field-modifier">${formatModifier(wisdomSaveMod)}</span></div>
                <div class="ability-score">Charisme: <span class="sheet-field-modifier">${formatModifier(charismaSaveMod)}</span></div>
            </div>
        </div>
        <div class="sheet-section">
            <div class="sheet-header">COMPÉTENCES</div>
            <div class="skills-section">
                ${Object.entries(skills).map(([skillName, data]) => {
                    const statValue = parseInt(document.getElementById(data.stat)?.value) || 10;
                    const statModifierForSkill = getModifier(statValue);
                    let isChecked = renderingSkillStates[skillName] ? 'checked' : '';
                    let isDisabled = backgroundSkills.has(skillName) || (race === "Elfe" && skillName === currentElfKeenSensesVal && currentElfKeenSensesVal);
                    const skillClass = isDisabled && renderingSkillStates[skillName] ? 'background-proficiency' : '';
                    let displayModifier = statModifierForSkill + (renderingSkillStates[skillName] ? proficiencyBonus : 0);
                    return `
                    <div class="skill ${skillClass}">
                        <input type="checkbox" class="skill-proficiency form-checkbox-custom" data-skill="${skillName}" data-stat="${data.stat}" ${isChecked} ${isDisabled ? 'disabled' : ''}>
                        <span class="skill-name ml-2">${skillName} (${data.statFr.substring(0,3)}.):</span>
                        <span class="skill-modifier" id="skill-modifier-${skillName}">${formatModifier(displayModifier)}</span>
                    </div>`;
                }).join('')}
            </div>
        </div>
        <div class="sheet-section" id="racial-traits-section">
            <div class="sheet-header">TRAITS RACIAUX</div>
            <div id="racial-traits-content">
                ${finalRacialTraitsHtml}
            </div>
        </div>
        <!-- ***** SECTION DÉPLACÉE ***** -->
        <div class="sheet-section" id="class-features-section">
            <div class="sheet-header">APTITUDES DE CLASSE</div>
            <div id="class-features-content">
                ${finalClassFeaturesHtml}
            </div>
        </div>
        <div class="sheet-section" id="equipment-proficiencies-section">
            <div class="sheet-header">MAITRISE D'ÉQUIPEMENTS</div>
            <div id="equipment-proficiencies-content">
                ${equipmentProficienciesHtml}
            </div>
        </div>
    `;

    if (sheetContentDiv) sheetContentDiv.innerHTML = sheetHTML;

    // Re-attacher les écouteurs d'événements pour les compétences après la mise à jour du HTML
    document.querySelectorAll('.skill-proficiency:not([disabled])').forEach(checkbox => {
        checkbox.addEventListener('change', updateCharacterSheet);
    });
    const newInspirationCheckbox = document.getElementById('inspiration');
    if (newInspirationCheckbox) newInspirationCheckbox.addEventListener('change', updateCharacterSheet);

    const btnIncHp = document.getElementById('increase-hp');
    if(btnIncHp) btnIncHp.addEventListener('click', increaseCurrentHP);
    const btnDecHp = document.getElementById('decrease-hp');
    if(btnDecHp) btnDecHp.addEventListener('click', decreaseCurrentHP);
    const btnIncTempHp = document.getElementById('increase-temp-hp');
    if(btnIncTempHp) btnIncTempHp.addEventListener('click', increaseTemporaryHP);
    const btnDecTempHp = document.getElementById('decrease-temp-hp');
    if(btnDecTempHp) btnDecTempHp.addEventListener('click', decreaseTemporaryHP);
    const btnShortRest = document.getElementById('short-rest-button');
    if(btnShortRest) btnShortRest.addEventListener('click', shortRest);
    const btnLongRest = document.getElementById('long-rest-button');
    if(btnLongRest) btnLongRest.addEventListener('click', longRest);

    deathSaveButtonElement = document.getElementById('death-save-button');
    deathSaveIconsDisplayElement = document.getElementById('death-save-icons');
    if (deathSaveButtonElement) {
        deathSaveButtonElement.addEventListener('click', rollDeathSave);
        updateDeathSaveIcons(); 
    }
    // Attacher l'écouteur pour le bouton Poussée d'adrénaline
    const adrenalineButton = document.getElementById('adrenaline-rush-button');
    if (adrenalineButton) {
        adrenalineButton.addEventListener('click', useAdrenalineRush);
    }

    saveCharacterData();
}


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        if (themeToggleButton) {
            themeToggleButton.innerHTML = theme === 'dark' ? sunIconFA : moonIconFA; 
        }
        localStorage.setItem('theme', theme);
    }

    applyTheme(currentTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { 
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    const levelSelectElement = document.getElementById('level');
    if (levelSelectElement) {
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.textContent = i.toString();
            levelSelectElement.appendChild(option);
        }
    }

    const statsNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    statsNames.forEach(statName => {
        const statSelectElement = document.getElementById(statName);
        if (statSelectElement) {
            for (let i = 3; i <= 20; i++) { 
                const option = document.createElement('option');
                option.value = i.toString();
                option.textContent = i.toString();
                if (i === 10) option.selected = true; 
                statSelectElement.appendChild(option);
            }
        }
    });
    
    const highElfCantripSelect = document.getElementById('high-elf-cantrip');
    if (highElfCantripSelect) {
        wizardCantrips.sort().forEach(cantrip => {
            const option = document.createElement('option');
            option.value = cantrip;
            option.textContent = cantrip;
            highElfCantripSelect.appendChild(option);
        });
    }

    loadCharacterData(); 

    if (levelSelectElement && !levelSelectElement.value) levelSelectElement.value = "1";
    statsNames.forEach(statName => {
        const statSelectElement = document.getElementById(statName);
        if (statSelectElement && !statSelectElement.value) statSelectElement.value = "10";
    });

    const nextLevelXpDisplay = document.getElementById('next-level-xp');
    if (levelSelectElement && nextLevelXpDisplay) {
        const initialLevel = parseInt(levelSelectElement.value) || 1;
        nextLevelXpDisplay.textContent = getXpForNextLevel(initialLevel).toString();
    }

    document.querySelectorAll('.skill-proficiency').forEach(checkbox => {
        checkbox.checked = skillProficiencyStates[checkbox.dataset.skill] || false;
    });
    const inspirationCheckboxElement = document.getElementById('inspiration');
    if (inspirationCheckboxElement) inspirationCheckboxElement.checked = inspirationChecked;
    const advantageToggle = document.getElementById('advantage-toggle');
    if (advantageToggle) advantageToggle.checked = advantageEnabled;
    const disadvantageToggle = document.getElementById('disadvantage-toggle');
    if (disadvantageToggle) disadvantageToggle.checked = disadvantageEnabled;

    // Mettre à jour la visibilité initiale après le chargement des données
    updateDraconicAncestryVisibility();
    updateElvenLineageVisibility(); 
    updateGnomeLineageVisibility();
    updateGiantAncestryVisibility();
    updateFiendishHeritageVisibility();

    updateCharacterSheet(); 

    const formElementsToWatch = ['name', 'race', 'class', 'level', 'alignment', 'background', 'size', 'experience', 'initial-armor-class', ...statsNames];
    formElementsToWatch.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.addEventListener('change', updateCharacterSheet);
    });

    const classSelect = document.getElementById('class');
    if (classSelect) {
        classSelect.addEventListener('change', () => { updateSubclasses(); updateCharacterSheet(); });
    }
    if (levelSelectElement) { 
        levelSelectElement.addEventListener('change', () => { updateSubclasses(); updateCharacterSheet(); });
    }
    const subclassSelect = document.getElementById('subclass');
    if (subclassSelect) {
        subclassSelect.addEventListener('change', updateCharacterSheet);
    }

    const raceSelect = document.getElementById('race');
    if (raceSelect) {
        raceSelect.addEventListener('change', () => {
            updateDraconicAncestryVisibility();
            updateElvenLineageVisibility(); 
            updateGnomeLineageVisibility();
            updateGiantAncestryVisibility();
            updateFiendishHeritageVisibility();
            updateCharacterSheet();
        });
    }
    
    // Mise à jour des écouteurs d'événements pour les sélecteurs de race/lignage
    ['draconic-ancestry', 'elven-lineage', 'gnome-lineage', 'giant-ancestry', 'fiendish-heritage', 
     'elf-keen-senses', 'elf-spellcasting-ability', 'high-elf-cantrip'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                if (id === 'elven-lineage' || id === 'race') { 
                    updateElfSpecificChoicesVisibility();
                }
                updateCharacterSheet();
            });
        }
    });

    if (advantageToggle) {
        advantageToggle.addEventListener('change', () => {
            if (advantageToggle.checked && disadvantageToggle?.checked) disadvantageToggle.checked = false; 
            updateCharacterSheet(); 
        });
    }
    if (disadvantageToggle) {
        disadvantageToggle.addEventListener('change', () => {
            if (disadvantageToggle.checked && advantageToggle?.checked) disadvantageToggle.checked = false; 
            updateCharacterSheet(); 
        });
    }

    ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'].forEach(dice => {
        const button = document.getElementById(`roll-${dice}`);
        if (button) button.addEventListener('click', () => rollAndDisplayDice(parseInt(dice.substring(1)) || 100));
    });

    updateElfSpecificChoicesVisibility();
});
