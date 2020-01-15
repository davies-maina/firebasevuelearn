<template>
<v-container>
    <h4 class="headline">Add</h4>
<v-form
    ref="form"
    
    
    @submit.prevent="addSmoothie"
  >
    <v-text-field
      v-model="title"
      
      label="Title"
      required
    ></v-text-field>
    <p v-if="feedback">{{feedback}}</p>

    <div v-for="(ingridient,index) in ingridients" :key="index">
        
        <v-text-field
      v-model="ingridients[index]"
      label="ingridient:"
      
      name="ingridient"
      required
    ></v-text-field>

    <v-icon @click="deleteIng(ingridient)">delete</v-icon>
    </div>

    <v-text-field
      v-model="another"
      name="add-ingridient"
      label="Ingridients"
      @keydown.tab.prevent="addAnother"
      required
    ></v-text-field>

    <p v-if="feedback" class="red--text">{{feedback}}</p>

    <v-btn
      
      color="success"
      class="mr-4"
      type="submit"
      
    >
      Create
    </v-btn>

    

    
  </v-form>
</v-container>
</template>

<script>
import db from '../firebase/init';
import slugify from 'slugify';
export default {
    name:'AddSmoothie',
    data() {
        return {
            title:'',
            ingridients:[],
            another:'',

            feedback:'',
            slug:''
        }
    },
    methods: {
        addSmoothie(){

            if (this.title) {
                this.feedback='';
                this.slug=slugify(this.title,{

                    replacement:'-',
                    remove:/[$*_+~.()'"!\-:@]/g,
                    lower:true
                })

                db.collection('smoothies').add({

                    title: this.title,
                    ingridients:this.ingridients,
                    slug:this.slug
                })
                    .then(()=>{

                        this.$router.push({name:'Index'})
                    })
            }

            else{

                this.feedback='Enter smoothie title'
            }

            
        },

        addAnother(){

            if (this.another) {
                this.ingridients.push(this.another)
                console.log(this.ingridients)
                this.another='';
                this.feedback=''
                
            }
            else{

                this.feedback='Must enter a value'
            }
        },

        deleteIng(ing){

                this.ingridients=this.ingridients.filter(ingridient=>{

                    return ingridient!=ing;
                })
            }

    },
}
</script>