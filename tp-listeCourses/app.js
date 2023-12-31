const app = Vue.createApp({
    data() {
        return {
        article: '',
        mesArticles: [],
        hidden: false,
        afficher: true
        };
    },
    methods: {
        //Méthode pour ajouter des éléments dans la liste
        ajouterArticle() {
        this.mesArticles.push(this.article);
        },
        //Méthode pour supprimer des éléments de la liste
        supprimerArticle(unIndex) {
        this.mesArticles.splice(unIndex, 1);
        },
        //Méthode pour cacher la liste de courses + modifier ce qu'il y a écrit sur le bouton
        cache (){
            this.hidden = !this.hidden;
            this.afficher = !this.afficher;
        },

    },
    //Pour le bouton plus simple (le 2ème)
    computed: {
        modif (){
            return this.afficher ? 'Masquer la liste 2' : 'Afficher la liste 2';
    }

        }
});
app.mount('#monApp');