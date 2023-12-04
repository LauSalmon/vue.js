const app = Vue.createApp({
    data() {
        return {
            film: [],
            nomDeFilm: '',
            lis : true,
            }
        },
    methods: {
        ajouterFilms() {
            this.film.push(this.nomDeFilm);
            this.nomDeFilm = '';
            }
    }

});
app.mount('#monApp');