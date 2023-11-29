Vue.createApp({
    data() {
      return {
        number : 0
      };
    },

    methods : {
        moins(){
            this.number --;
        },
        plus(){
            this.number ++;
        }

    },
  }).mount('#event');