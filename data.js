const DATA = [
    //VICTOIRE ET AXELLE
    {
        name: "Victoire",
        birthday: "19/11/2003",
        buddy: "Axelle",
        costume: "Elsa et Anna",
        costumeImage: "Dupondt.png",
        message: "coucou vico !"
    },

    {
        name: "Axelle",
        birthday: "15/01/2002",
        buddy: "Victoire",
        costume: "Elsa et Anna",
        costumeImage: "images/Dupondt.png",
        paf: "",
        message: "i love you !"
    },

    // LISA P ET ZOE
    {
        name: "Lisa",
        birthday: "29/03/2003",
        buddy: "Zoé",
        costume: "Conrad et Jeremiah",
        costumeImage: "images/Conrad-vs-Jeremiah.jpeg",
        paf: "(une bouteille de Malibu + jus d'ananas) pour 2 (avec ton binôme)",
        message: "PISA J'AI TROP HÂTEEhdbcjhbd jfed",
    },

    {
        name: "Zoé",
        birthday: "31/10/2002",
        buddy: "Lisa Parent",
        costume: "Conrad et Jeremiah",
        costumeImage: "images/Conrad-vs-Jeremiah.jpeg",
        paf: "(une bouteille de Malibu + jus d'ananas) pour 2 (avec ton binôme)",
        message: "pitié faites un truc trop drôle (faut voir comment Avery Cyrus s'est déguisée en jeremiah je m'en suis pas remise)"
    },

    //DANIEL ET MATHILDE
    {
        name: "Mathilde",
        birthday: "30/11/2002",
        buddy: "Daniel Bachour",
        costume: "Elphaba&Glinda",
        costumeImage: "images/wicked.png.jpg",
        paf: "une vodka pour 2 (avec ton binôme)",
        message: "prévois tenue crade et beuh stp"
    },

    {
        name: "Daniel",
        birthday: "14/04/2002",
        buddy: "Mathilde Noël",
        costume: "Elphaba&Glinda",
        costumeImage: "images/wicked.png.jpg",
        paf: "une vodka pour 2 (avec ton binôme)",
        message: "ah daniel, comme je me réjouis qu'on s'éclate la gueule ensemble"
    },
    // SACHA ET CAMILLE
    {
        name: "Sacha",
        birthday: "31/07/2002",
        buddy: "Camille Richet",
        costume: "Astérix et Obélix",
        costumeImage: "images/asterix.jpg",
        paf: "un cubi de vin",
        message: "c'est une mesure de recyclage de ta sortie au Parc Astérix (oblige camille à être obélix PITIE)"
    },

    {
        name: "Camille",
        birthday: "27/12/2003",
        buddy: "Sacha Layani",
        costume: "Astérix et Obélix",
        costumeImage: "images/asterix.jpg",
        paf: "liqueur pour faire des shots",
        message: "c'est le bingo drag ou quoi (douteux victoire, douteux)"
    },

    // EMMA ET BEN
    {
        name: "Emma",
        birthday: "09/02/2002",
        buddy: "Benjamin Prissé (Ben)",
        costume: "La Belle et Le Clochard (à prendre cinématographiquement ou littéralement)",
        costumeImage: "images/belleclochard.jpg",
        paf: "une vodka pour 2 (avec ton binôme)",
        message: "trop hâte que tu viennes <33333 (insérer une image de branches sur ciel)"
    },
    {

        name: "Ben",
        birthday: "16/03/2002",
        buddy: "Emma Deveaux",
        costume: "La Belle et Le Clochard (à prendre cinématographiquement ou littéralement)",
        costumeImage: "images/belleclochard.jpg",
        paf: "une vodka pour 2 (avec ton binôme)",
        message: "lancer de hache prévu à 1h47"
    },

    // ROMAISSA CELIA
    {
        name: "Romaissa",
        birthday: "01/12/2002",
        buddy: "Célia Morais",
        costume: "Kylie Jenner et Timothée Chalamet",
        costumeImage: "images/Kylie.webp",
        paf: "2, 3 softs, selon ce que t'aimes bien",
        message: "I LOVE YOU RORO, ce binôme va juste dead"
    },

    {
        name: "Célia",
        birthday: "30/03/2003",
        buddy: "Romaissa Khattabi",
        costume: "Kylie Jenner et Timothée Chalamet",
        costumeImage: "images/Kylie.webp",
        paf: "DU VIN MA GRANDE",
        message: "j'ai tellement hâte qu'on teuf ensemble meuf (ps: ce binôme est atomique)"
    },

    //LUCAS ET COLIN
    {
        name: "Colin",
        birthday: "08/07/2002",
        buddy: "Lucas Douillard",
        costume: "Dora et Babouche",
        costumeImage: "images/belleclochard.jpg",
        paf: "un bacardi + coca (pour 2 avec ton binôme)",
        message: "on va tellement rigoler (tema l'effort du codage derrière ce site)"
    },

    {
        name: "Lucas",
        birthday: "25/11/2002",
        buddy: "Colin Frisch (le pote de dani)",
        costume: "Dora et Babouche",
        costumeImage: "images/dora-babouche.jpg.png",
        paf: "un bacardi + coca (pour 2 avec ton binôme)",
        message: "ce costume est excellent , fais-y honneur luK"
    },

    // VICTOR ET MATILDE B 
    {
        name: "Mathilde",
        birthday: "28/07/2002",
        buddy: "Victor Gounot",
        costume: "Barbie et Ken (je sais qui je veux voir en barbie et qui en ken)",
        costumeImage: "images/Barbie_movie_0001_Barbie___Teaser_Trailer_2_1-6_screenshot.jpeg.webp",
        paf: "des bières!",
        message: "HIHIHIHI trop hâte de votre degs la (j'attends beaucoup de votre binome, mathilde)"
    },

    {
        name: "Victor",
        birthday: "02/04/2002",
        buddy: "Mathilde Balland",
        costume: "Barbie et Ken (je sais qui je veux voir en barbie et qui en ken)",
        costumeImage: "images/Barbie_movie_0001_Barbie___Teaser_Trailer_2_1-6_screenshot.jpeg.webp",
        paf: "cubi de vin",
        message: "merci d'avance de te donner au max victor"
    },

    // MARIUS ET ANNE

    {
        name: "Marius",
        birthday: "05/10/2003",
        buddy: "Anne LOBSTER",
        costume: "Dupont&Dupond ? (c'est peut être le plus simple avec le concert, à rediscuter)",
        costumeImage: "images/Dupondt.png",
        paf: "si possible, des bières",
        message: "vous me direz si il faut ajuster des trucs avec le concert, bisous marius"
    },

    {
        name: "Anne",
        birthday: "24/02/2003",
        buddy: "Marius DALLEUX",
        costume: "Dupont&Dupond ?(c'est peut être le plus simple avec le concert, à rediscuter)",
        costumeImage: "images/Dupondt.png",
        paf: "si possible des bières!",
        message: "teeellement hâte de te revoir anne purée"
    },




    //LISA M VALENTINE
    {
        name: "Lisa",
        birthday: "28/11/2002",
        buddy: "Valentine Eustache",
        costume: "Anna et Elsa",
        costumeImage: "",
        paf: "",
        message: "misa je t'adore, je vous ai fait vrmt le binôme le meilleur"
    },

    {
        name: "Valentine",
        birthday: "24/09/2002",
        buddy: "Lisa Mencarelli",
        costume: "Bob l'Eponge et Patrick",
        costumeImage: "images/belleclochard.jpg",
        paf: "",
        message: "misa je t'adore, je vous ai fait vrmt le binôme le meilleur"
    },

    // ELLIOT ET MARGAUX

    {
        name: "Elliot",
        birthday: "18/10/2002",
        buddy: "Margaux Allée",
        costume: "Ratatouille (rémi et linguini)",
        costumeImage: "images/ratatouille-watching-recommendation-videoSixteenByNineJumbo1600.jpg.webp",
        paf: "un cubi de vin",
        message: "souhait accompli, hâte de te voir"
    },

    {
        name: "Margaux",
        birthday: "17/02/2003",
        buddy: "Elliot Ellis",
        costume: "Ratatouille (rémi et linguini)",
        costumeImage: "images/ratatouille-watching-recommendation-videoSixteenByNineJumbo1600.jpg.webp",
        paf: "bouteille(s) vin!!",
        message: "tellement contente que tu sois là à mon anniv, shot de bienvenue dès que tu passes la porte et après récitation des décimales de pi!"
    },


    // ERWAN ET MAYLISS

    {
        name: "Maÿliss",
        birthday: "28/10/2002",
        buddy: "Erwan Kersalé",
        costume: "Jul & SCH",
        costumeImage: "images/JUL-NETFLIX.jpg",
        paf: "de la guiness",
        message: "en l'honneur des irish pub, et j'ai trop hâte qu'on fasse cette soirée ensemble"
    },
    {
        name: "Erwan",
        birthday: "29/06/2002",
        buddy: "Maÿliss Garcin",
        costume: "Jul & SCH",
        costumeImage: "images/JUL-NETFLIX.jpg",
        paf: "des bières",
        message: "je suis trop contente que tu viennes, t'es tellement devant nils plambeck"
    },

    //ETHEL ET LUCIE
    {
        name: "Ethel",
        birthday: "06/12/2002",
        buddy: "Lucie Beaurpère",
        costume: "Serena &Blair",
        costumeImage: "images/belleclochard.jpg",
        paf: "du Moscato pitié)",
        message: "hihihihahahaah peut-être trouvera tu ton chuck (gênant victoire)"
    },

    {
        name: "Lucie",
        birthday: "",
        buddy: "Ethel Herz",
        costume: "Serena &Blair",
        costumeImage: "images/serena.jpg",
        paf: "2 champomy mon rêve",
        message: "j'ai tellement hâte de vous voir slay en mode queen"
    },




    //LEA
    //DANI


];
