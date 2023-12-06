const app = Vue.createApp({
    data() {
        return {
            lifePlayer: 100,
            lifeEnnemy: 100,
            namePlayer: "Bob Razowski",
            nameEnnemy: "Xemnas",
            currentround: 0,
            stopGame: false,
            messageResult:"",
        };
    },
    methods: {
        attackEnnemy () {
            this.lifePlayer = this.lifePlayer - 8;
        },
        attackPlayer () {
            this.lifeEnnemy = this.lifeEnnemy - 5;
            this.attackEnnemy();
            this.currentround ++;
            this.result();
        },

        healPlayer () {
            if (this.lifePlayer >= 98){
                this.lifePlayer = 100;
            } else {
                this.lifePlayer += 10;
                this.currentround ++;
                this.attackEnnemy();
            }
        },

        specialAttack () {
                this.lifeEnnemy = this.lifeEnnemy - 15;
                this.attackEnnemy();
                this.currentround ++;
                this.result();
            },
        stop () {
            this.stopGame = true;
            this.messageResult = "Bob Razowski a abandonné !"
        },
        result () {
            if (this.lifePlayer <= 0 && this.lifeEnnemy <= 0){
                this.messageResult = "AH ... c'est dommage c'est une égalité ...";
                this.stopGame = true;
            } else if (this.lifeEnnemy <= 0){
                this.lifeEnnemy = 0;
                this.messageResult = "VICTOIRE !!! Xemnas a perdu la bataille ! Bob Razowski a gagné !!";
                this.stopGame = true;
            } else if (this.lifePlayer <= 0){
                this.lifePlayer = 0;
                this.messageResult = "PERDU !!! Bob Razowski a perdu la bataille ... Xemnas a gagné ...";
                this.stopGame = true;
            }   
        }
    },

    computed: {

    },
});
app.mount('#monApp');


