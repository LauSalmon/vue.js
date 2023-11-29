//! SOLUCE en utilisant les methods avec des paramètres (utilisés côté template)
//! avec un petit bonus : la methods capterInput et event en paramètre pour capter un event (Native Object Event)
Vue.createApp({
    data(){
        return {
            instant :" ",
            ajout : " ",
            msg : "ALERTE GENERALE"
        };        
    },
    methods: {
        instantText(event) {
            console.log(event);
            this.instant = event.target.value;
        },
        ajoutText(event) {
            console.log(event);
            this.ajout = event.target.value;
        },
        alert(event) {
            alert(this.msg);
        }
    }
}).mount('#event');