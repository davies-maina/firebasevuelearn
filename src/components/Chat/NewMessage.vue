<template>
    <div>
       <v-form @submit.prevent="addMessage" >

           <v-text-field label="Enter to add new message" v-model="newMessage"></v-text-field>
           <p v-if="feedback" class="red--text">{{feedback}}</p>

           <v-btn
      
      color="success"
      class="mr-4"
      type="submit"
      
    >
      Create
    </v-btn>
       </v-form>
    </div>
</template>

<script>
import db from '../../firebase/init';
export default {

    name:'newMessage',
    props:['name'],
    data() {
        return {
            newMessage:'',
            feedback:'',
            
        }
    },

    methods: {
        addMessage(){

            if (this.newMessage) {
                
                db.collection('messages').add({
                    name: this.name,
                    content:this.newMessage,
                    timestamp:Date.now()

                })
                .then(()=>{

                    this.newMessage='';
                    this.feedback=''
                })
            }

            else{

                this.feedback='Must add message to chat';
            }
        }
    },
    created() {
        
    },
}
</script>