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


// Soluce avec COMPUTED
// ! Avec les computed properties, déormais VUE va analyser en détail nos fonctions et il ne les execute
// ! uniquement si il y a un changement sur une ou plusieurs variables utilisée dans la dite fonction
// const app = Vue.createApp({
//     data() {
//         return { 
//         leNombre:0,nameUser: ''};
//     },
//     methods: {
//         augmenter(num){
//         this.leNombre += num;
//     },
//     reduire(num){
//         this.leNombre -= num;
//     },
//     },
//     computed:{
//         afficherNameUser() {
//         console.log('fonction executée');
//         if(this.nameUser ===''){
//             return 'test'
//         }
//         else{
//             return 'autre Test';
//         }
//         },
//     }
//     });
//    app.mount('#monApp');