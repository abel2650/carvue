const baseUri = "http://localhost:5180/api/Cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[]
        }
    },
    methods: {
        getAllCars(){
            axios.get(baseUri)
            .then
            (
                response => 
                {
                    console.log(response)
                    this.carList = response.data

                }
            )
            .catch 
            (
                error => 
                {
                console.log(error)
                }    
            )
                
            
            
               

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
}) 