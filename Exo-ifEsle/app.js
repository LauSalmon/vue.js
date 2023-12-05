const app = Vue.createApp({
    data() {
        return {
            film: [],
            nomDeFilm: '',
            
            }
        },
    methods: {
        ajouterFilms() {
            this.film.push(this.nomDeFilm);
            //this.nomDeFilm = '';
            }
    }

});
app.mount('#monApp');