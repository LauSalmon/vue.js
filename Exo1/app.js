//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
        data() {
            return {
            livre: '{{unLivre}}',
            titre:'Les mémoires de Steven Seagal',
            number: '1234567890',
            tab:["du text",99],
            info: {
                name: "COOL", 
                tel: 12748312},
            random : Math.random()
            };
            
        },
    //! Dans cet Object methods, on va écrire nos fonctions
        methods: {
            afficherLivreRandom(){
                
                if ( this.random > 0.5) {
                    return "Harry Potter";
                } else {
                    return "Les Animaux Fantastique";
                }
            }
        },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');