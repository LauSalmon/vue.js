const app = Vue.createApp({
    data() {
        return {
            detailsVisible : false,
            lesAmis : [
                ami1 = {
                    id : 1,
                    name : "Coco",
                    phone : "06.47.78.62.22",
                    mail : "coco@lasticot.fr",
                },
                ami2 = {
                    id : 2,
                    name : "Janine",
                    phone : "06.54.89.62.14",
                    mail : "janine@jaja.fr",
                }
                 
            ]
        };
    },
    methods: {
        toggleDetails (){
            this.detailsVisible = !this.detailsVisible;
        }
    },
    computed: {
        modif (){
            return this.detailsVisible? 'Masquer' : 'Afficher';
    }
        }
});
app.mount('#monApp');