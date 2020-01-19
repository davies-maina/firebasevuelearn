<template>
    <v-container fluid>
        <div class="google-map" id="map"></div>
    </v-container>
</template>

<script>
/* import firebase from 'firebase' */
export default {
    data(){

        return {
            lat:53,
            lng:-2
        }
    },

    methods:{
        renderMap(){

            const map=new google.maps.Map(document.getElementById('map'),{

                center:{lat:this.lat, lng:this.lng},
                zoom:6,
                maxZoom:15,
                minZoom:3,
                streetViewControl:false
            })
        }

    },

    mounted(){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos)=>{

                this.lat=pos.coords.latitude;
                this.lng=pos.coords.longitude;
                this.renderMap();
            },(error)=>{

                console.log(error)
                this.renderMap();
            }, {
                maximumAge:6000, timeout:6000
            })
        }
        else{

            this.renderMap()
        }
        this.renderMap();
        /* console.log(firebase.auth().currentUser) */
        /* setTimeout(() => {
            console.log(firebase.auth().currentUser)
        }, 2000); */
    }
}
</script>

<style>
.google-map{

    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top:0;
    left:0;
}
</style>