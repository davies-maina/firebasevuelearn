<template>
    <v-container>
        <h3 v-if="smoothie">Edit {{smoothie.title}}</h3>
    </v-container>
</template>

<script>
import db from '../firebase/init';
export default {
    data() {
        return {
            smoothie:''
        }
    },
    created() {
        let ref=db.collection('smoothies').where('slug', '==' , this.$route.params.smoothie_slug);
        ref.get()
            .then((snapshot)=>{
                snapshot.forEach((doc)=>{

                    this.smoothie=doc.data();
                    this.smoothie.id=doc.id;
                })

            })
    },
}
</script>