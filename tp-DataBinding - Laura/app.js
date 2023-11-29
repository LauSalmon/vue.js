Vue.createApp({
    data() {
      return {
        photo: "./pomme.png",
        name:"Pomme",
        age: 16,
        valeur  : "Pomme"
        
      };
    },

    methods : {
        agePlus() {
            return "Age + 10 : " + (this.age + 10);
        },
        number() {
            let fetiche = Math.random();
            return "Nombre fétiche : " + fetiche;
        }
    },
  }).mount('#profil');