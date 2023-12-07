const app = Vue.createApp({
    data() {
        return {
            detailsVisible : false,
            lesAmis : [
                ami1 = {
                    id : 1,
                    name : "Coco",
                    phone : "0647786222",
                    mail : "coco@lasticot.fr",
                },
                ami2 = {
                    id : 2,
                    name : "Janine",
                    phone : "0654896214",
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