<template>
<div>
    <v-layout>
        <v-container>
        <v-row wrap>
            <v-card
    class="mx-3 justify-lg-center"
    max-width="374"
    v-for="smoothie in smoothies" :key="smoothie.id"
  >
   <v-icon class="float-lg-right" @click="deleteSmoothie(smoothie.id)">delete</v-icon>
   <router-link :to="{name:'EditSmoothie', params:{smoothie_slug:smoothie.slug}}">

       <v-icon class="float-lg-right primary--text">edit</v-icon>
   </router-link>

    <v-card-title>{{smoothie.title}}</v-card-title>

   

    <v-divider class="mx-4"></v-divider>

   

    <v-card-text>
      <v-chip-group
        
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="(ingridient,index) in smoothie.ingridients" :key="index">{{ingridient}}</v-chip>

       
      </v-chip-group>
    </v-card-text>

    
  </v-card>
        </v-row>
        </v-container>
    </v-layout>
</div>
</template>

<script>
import db from '../firebase/init';
export default {

    created() {
        db.collection('smoothies').get()
            .then((snapshot)=>{

                snapshot.forEach((doc)=>{
                    /* console.log(doc.id);
                    console.log(doc.data()); */

                    let smoothie=doc.data();
                    smoothie.id=doc.id;
                    this.smoothies.push(smoothie);


                })

            })
    },
    data() {
        return {
            smoothies:[

                /* {title:'Ninja bibo', slug:'ninja-bibo', ingridients:['bananas', 'coffee', 'avocado'], id:'1'},
                {title:'Nandi mursik', slug:'nandi-mursik', ingridients:['blood', 'milk', 'gourd'], id:'2'} */
            ]
        }
    },

    methods: {
        deleteSmoothie(id){

            /* this.smoothies=this.smoothies.filter(smoothie=>{

               return smoothie.id !=id
            }) */

            /* console.log(id); */

            db.collection('smoothies').doc(id).delete()
                .then(()=>{

                    this.smoothies=this.smoothies.filter(smoothie=>{

                        return smoothie.id!=id;
                    })
                })
        },
        
    },
}
</script>