const app = Vue.createApp({
    data() {
        return {
            lifePlayer: 100,
            lifeEnnemy: 100,
            namePlayer: "Bob Razowski",
            nameEnnemy: "Xemnas",
            currentround: 0,
        };
    },
    methods: {
        attackEnnemy () {
            this.lifePlayer = this.lifePlayer - 10;
        },
        attackPlayer () {
            this.lifeEnnemy = this.lifeEnnemy - 8;
            this.currentround ++;
            //return this.attackEnnemy();
        },

        healPlayer () {
            if (this.lifePlayer<=100){
                this.lifePlayer += 8;
                this.currentround ++;
            }
            
        },
        specialAttack () {
                this.lifeEnnemy = this.lifeEnnemy - 15;
                this.currentround ++;
            },
        },

    computed: {

        },
});
app.mount('#monApp');