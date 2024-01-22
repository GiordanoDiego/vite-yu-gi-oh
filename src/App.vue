<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js'
import axios from 'axios';

export default {
    data(){
        return{
            baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
            store,
            cards: [],
            loaded: false
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {

    }, 
    created(){
         axios.get(this.baseUrl).then((response) => {
             console.log(response.data.data);
             this.cards = response.data.data; // riempo l'array con i dati dell'api
             console.log("CARDS",this.cards);
             this.loaded = true; // questa diventerà tru soltanto quando avrà terminato la chiamata
         });
    }
}


</script>

<template>
    <AppHeader/>
    <AppMain  :allCards="cards" />
    <!-- <AppFooter/> -->
</template>

<style lang="scss"> //tolgo scoped per applicare il reset al body
      @use "./assets/SCSS/main.scss" as *;
</style>
