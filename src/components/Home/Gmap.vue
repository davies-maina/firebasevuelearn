<template>
    <v-container fluid>
        <div class="google-map" id="map"></div>
    </v-container>
</template>

<script>
/* import firebase from 'firebase' */
import db from '../../firebase/init';
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

            db.collection('users').get()
                .then((users)=>{

                    users.docs.forEach((doc)=>{

                        let data=doc.data();
                        if (data.geolocation) {
                            let marker=new google.maps.Marker({
                                position:{

                                    lat:data.geolocation.lat,
                                    lng:data.geolocation.lng
                                },

                                map


                            })

                            //add click event to marker

                            marker.addListener('click', ()=>{

                               this.$router.push({name:'Profile', params:{id:doc.id}})
                            })
                        }
                    })
                })

        }

    },

    mounted(){
        let user=firebase.auth().currentUser;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos)=>{

                this.lat=pos.coords.latitude;
                this.lng=pos.coords.longitude;

                //find particular user record then Storing position on firestore
                db.collection('users').where('user_id', '==', user.uid).get()
                    .then((snapshot)=>{
                        snapshot.forEach((doc)=>{

                            db.collection('users').doc(doc.id).update({
                                geolocation:{
                                     lat:pos.coords.latitude,
                                    lng:pos.coords.longitude

                                }

                            })
                        })

                    })
                        .then(()=>{

                            this.renderMap();
                        })
                
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