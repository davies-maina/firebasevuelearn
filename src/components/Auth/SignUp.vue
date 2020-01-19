<template>
<v-container>
    <v-form
    
    
    @submit.prevent="signUp"
  >
    <v-text-field
      v-model="alias"
      
      
      label="Alias"
      required
    ></v-text-field>

    <p v-if="feedback" class="red--text">{{feedback}}</p>

    <v-text-field
      v-model="email"
      
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      
      label="Password"
      required
    ></v-text-field>

    <v-btn
      
      color="success"
      class="mr-4"
      type="submit"
      
    >
     Sign up
    </v-btn>

    
  </v-form>
</v-container>
</template>

<script>
import slugify from 'slugify';
import db from '../../firebase/init';
import firebase from 'firebase';
export default {
    name:'Signup',
    data() {
        return {
            alias:'',
            email:'',
            password:'',
            feedback:''
        }
    },

    methods: {
      signUp(){

        if(this.alias && this.email && this.password){

          this.feedback='';
                this.slug=slugify(this.alias,{

                    replacement:'-',
                    remove:/[$*_+~.()'"!\-:@]/g,
                    lower:true
                })

                /* console.log(this.slug) */
                let ref=db.collection('users').doc(this.slug)
                ref.get()
                  .then((doc)=>{

                    if (doc.exists) {
                      this.feedback="This alias already exists"
                    }

                    else{

                      firebase.auth().createUserWithEmailAndPassword(
                        

                        this.email,
                        this.password
                      )
                      .then((user)=>{
                        ref.set({
                          alias:this.alias,
                          geolocation:'',
                          user_id:user.user.uid

                        })
                        /* console.log(user.user.uid) */

                      })

                      .then(()=>{

                        this.$router.push({name:'Gmap'})
                      })
                      
                      .catch((error)=>{

                        this.feedback=error.message
                      })
                    }
                  })

        }

        else{

          this.feedback="You must enter all details"
        }
      }
    },
}
</script>