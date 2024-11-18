const baseUri = "http://localhost:5180/api/Cars";

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList: [],       // Array til biler
            error: null,       // Fejlbeskeder
            statuscode: null   // Statuskode
        };
    },
    methods: {
        // Henter alle biler
        getAllCars() {
            axios.get(baseUri)
                .then(response => {
                    console.log("Response fra getAllCars:", response);
                    this.carList = response.data;
                })
                .catch(error => {
                    console.log("Fejl i getAllCars:", error);
                    this.error = error.message;
                });
        },
        // Henter bil baseret på ID
        getByCarId(id) {
            this.error = null; // Nulstiller fejl
            const uri = `${baseUri}/${id}`;
            axios.get(uri)
                .then(response => {
                    console.log("Response fra getByCarId:", response);

                    // Opdaterer carList med kun én bil
                    this.carList = [response.data];
                    this.statuscode = response.status;
                })
                .catch(error => {
                    console.log("Fejl i getByCarId:", error);
                    this.carList = [];
                    this.error = error.message;
                });
        }
    },
    computed: {
        myComputed() {
            return '';
        }
    }
});

app.mount("#app");
