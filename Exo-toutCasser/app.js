Vue.createApp({
    data(){
        return {
           userName :" ",
           number : 0
        };        
    },
    methods: {
        afficher () {
            console.log("fonction exécutée");
            if ( this.userName === " ") {
                this.userName = "Test";
                
            } else {
                this.userName = "Un autre test";
            }
            
        },
        reduire() {
            this.number --;
        },
        augmenter() {
            this.number ++;
        }
    }
}).mount('#event');