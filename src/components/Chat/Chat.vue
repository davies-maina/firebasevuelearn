<template>
    <div>
        <v-card
    class="mx-auto my-3"
    max-width="400"
    tile
  >
   

    <v-list-item three-line v-for="message in messages" :key="message.id">
      <v-list-item-content>
        <v-list-item-title class="primary--text">{{message.name}}</v-list-item-title>
       <!--  <v-list-item-subtitle class="primary--text">
          {{message.name}}
        </v-list-item-subtitle> -->
        <v-list-item-subtitle>
          {{message.content}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{message.timestamp}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
        <newmessage :name="name"></newmessage>
    </v-card-actions>
    
  </v-card>
    </div>

</template>

<script>
import newmessage from './NewMessage';
import db from '../../firebase/init';

export default {
    name:'Chat',
    props:['name'],
    components:{
        newmessage

    },

    data() {
        return {
          messages:[]
        }
    },

    created() {
        let ref=db.collection('messages').orderBy('timestamp')
        ref.onSnapshot((snapshot)=>{

            snapshot.docChanges().forEach((content)=>{

                if (content.type=='added') {
                    let doc=content.doc //get individual doc

                    this.messages.push({

                        id:doc.id,
                        name:doc.data().name,
                        content:doc.data().content,
                        timestamp:doc.data().timestamp,
                    })
                }

            })
        })
    },

    
}
</script>