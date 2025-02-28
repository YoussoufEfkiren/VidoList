// Sample data based on your example
export const playlists = [
    {
      idPlaylist: 1,
      titre: "Programmation Web",
      videos: [
        {
          id: 101,
          titre: "Etape 03 : Créer les Controllers pour définir les actions de mise à jour des données",
          description:"Voici une série des vidéos qui vous permettra créer des applications backend avec NodeJS + Express.Cette série est la suite de ma série sur les bases de NodeJS. Node.js est aujourd'hui un incontournable, il est donc essentiel pour un développeur de le maitriser.",
          miniature: "./public/image01.jpg",
          duree: "10:05",
          commentaires: [
            "Super vidéo !",
            "Très bien expliqué.",
            "Merci pour les explications !",
            "Simple et efficace.",
            "J'adore cette vidéo !",
          ],
          likes: 150,
          dislikes: 5,
          lien: "https://www.youtube.com/watch?v=RZx-hOPuSGU",
          auteur: {
            nom: "GAHI",
            prenom: "said",
            photo: "../public/said.png",
          },
        },
        {
          id: 102,
          titre: "Les services Cloud",
          description:
            "Comprendre les différentes services cloud et les fournisseurs. Cette vidéo couvre AWS, Azure, Google Cloud et d'autres services populaires, avec des explications détaillées sur leurs caractéristiques, avantages et inconvénients.",
          miniature: "./public/image02.jpg",
          duree: "12:30",
          commentaires: [
            "Merci pour cette explication!",
            "Clair et précis.",
            "Bonne pédagogie.",
            "Très utile pour les débutants.",
          ],
          likes: 200,
          dislikes: 10,
          lien: "https://www.youtube.com/watch?v=mMmiZTgOW2Q&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW",
          auteur: {
            nom: "GAHI",
            prenom: "Said",
            photo: "./public/said.png",
          },
        },
        {
          id: 103,
          titre: "Tutoriel Debutant - Créer son premier site avec HTML / CSS",
          description:
            "Apprenez les bases du développement web front-end. Nous couvrons la structure HTML, les sélecteurs CSS, et les principes de mise en page pour créer des sites web attrayants et responsifs.",
          miniature: "./public/image04.jpg",
          duree: "15:45",
          commentaires: ["Exactement ce dont j'avais besoin!", "Contenu très structuré"],
          likes: 320,
          dislikes: 8,
          lien: "https://youtu.be/6hCGTJCo_Uo?si=57NR_5YkVIsenAT0",
          auteur: {
            nom: "Développement",
            prenom: "Graven",
            photo: "./public/image03.png",
          },
        },
        {
          id: 104,
          titre: "JavaScript frameworks explained in 90 seconds",
          description:
            "Comparaison entre React, Vue et Angular. Découvrez les forces et faiblesses de chaque framework, et apprenez à choisir le meilleur outil pour vos projets de développement web.",
          miniature: "./public/image08.jpg",
          duree: "18:22",
          commentaires: ["Très informatif", "J'ai enfin compris la différence!"],
          likes: 280,
          dislikes: 12,
          lien: "https://www.youtube.com/watch?v=VbvMJUpY0a4",
          auteur: {
            nom: "SuperSimpleDev",
            prenom: "",
            photo: "./public/image07.png",
          },
        },
      ],
    },
    {
      "idPlaylist": 2,
          "titre": "Intelligence Artificielle",
          "videos": [
            {
              "id": 201,
              "titre": "Machine Learning VS Deep Learning : Quelles différences ?",
              "description": "Les bases du Machine Learning expliquées simplement : algorithmes supervisés, non supervisés et cas d'usage dans l'industrie.",
              "miniature": "./public/image06.jpg",
              "duree": "14:30",
              "commentaires": ["Excellente introduction!", "Très pédagogique", "J'ai enfin compris ce qu'est le ML!"],
              "likes": 450,
              "dislikes": 15,
              "lien": "https://www.youtube.com/watch?v=DazUaVu5MO0",
              "auteur": {
                "nom": "DataScientest",
                "prenom": "",
                "photo": "./public/image05.png"
              }
            },
            {
              "id": 202,
              "titre": "Deep Learning et réseaux de neurones",
              "description": "Explication détaillée des réseaux de neurones, de la rétropropagation et des applications comme la reconnaissance d'images.",
              "miniature": "./public/image09.jpg",
              "duree": "22:15",
              "commentaires": ["Contenu de qualité", "Explications claires", "Je recommande cette vidéo à tous les débutants en IA!"],
              "likes": 380,
              "dislikes": 20,
              "lien": "https://www.youtube.com/watch?v=aircAruvnKk",
              "auteur": {
                "nom": "3Blue1Brown",
                "prenom": "",
                "photo": "./public/image10.png"
              },
        },
      ],
    },
  ]
  
  // Flatten videos for main display
  export const allVideos = playlists.flatMap((playlist) => playlist.videos)
  
  