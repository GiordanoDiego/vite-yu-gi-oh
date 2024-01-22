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
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {

    }, 
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character?page=1').then((response) => {
            console.log(response);
        });
    }
}


</script>

<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss"> //tolgo scoped per applicare il reset al body
      @use "./assets/SCSS/main.scss" as *;
</style>
