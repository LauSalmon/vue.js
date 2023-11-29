Vue.createApp({
    data(){
        return {
           number : 0,
           result : " "
        };        
    },
    methods: {
        augmenterPlus() {
            this.number += 5;
        },
        augmenter() {
            this.number ++;
        },
        resultat () {
            console.log("La fonction resultat() s'execute");
            if (this.number < 7) {
                this.result = "Essai encore";
            } else if (this.number = 7) {
                this.result = this.number;
            } else if (this.number > 7) {
                this.result = "Tu as dépassé le nombre mystère !" ;
            }
        }
    },
    watch :{
        number(value) {
            if(value >= 30){
                this.result = "Vous êtes parti trop loin !";
                setTimeout (() => {
                    this.number = 0
                }, "3000");
            }
        },
    }
}).mount('#event');
