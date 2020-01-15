<template>
    <v-container class="mx-auto">
        <v-form @submit.prevent="addName">

             
    <v-text-field
      v-model="name"
      
      label="Enter name"
      required
    ></v-text-field>
    <p v-if="feedback">{{feedback}}</p>
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
export default {
    data() {
        return {
            name:'',
            feedback:''
        }
    },

    methods: {
        addName(){
            if (this.name) {
                this.feedback='';
                this.$router.push({name:'Chat', params:{ name: this.name}})
            }

            else{
                this.feedback='Please enter name to chat'

            }
        
        }
    },
}
</script>