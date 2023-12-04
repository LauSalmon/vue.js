const app = Vue.createApp({
    data() {
        return {
            mot: "",
            select1: false,
            select2: false,
            hidden: false,
            couleur: "",
            styleObject: {
                color: this.couleur,
            }
    
        };
    },
    methods: {
        activeColor(){
            if (this.mot === "hello"){
                this.select1 = true;
            } else if (this.mot === "world") {
                this.select2 = true;
            } else {
                this.select1 = false;
                this.select2 = false;
            }
        },
        changeColor() {
            this.couleur = this.couleur;
        },
        cache (){
            this.hidden = !this.hidden;
        }
    },

});
app.mount('#monApp');