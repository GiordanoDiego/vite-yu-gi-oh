<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import {store} from '../store.js'
import axios from 'axios';


export default {
    data(){
        return{
            store,
        }
    },
    components: {
       
    },
   
    methods: {
        searchArchetype(){
            if(store.selectUser.length > 0){
                console.log("hai cliccato");

                this.store.urlSearchArchetype = this.store.originalUrlArchetype;
                store.urlSearchArchetype = store.urlSearchArchetype + store.selectUser;
                console.log("url", store.urlSearchArchetype);

                store.baseUrl = store.urlSearchArchetype

                axios.get(this.store.baseUrl).then((response) => {
                console.log(response.data.data);
                this.store.cards = response.data.data; 
                console.log("CARDS",this.store.cards);
                this.store.loaded = true; 
         });
            }
        },

        resetSearch(){
                console.log("hai cliccato");
                this.store.baseUrl = this.store.originalUrlAPI;
                
                axios.get(this.store.baseUrl).then((response) => {
                console.log(response.data.data);
                this.store.cards = response.data.data; 
                console.log("CARDS",this.store.cards);
                this.store.loaded = true; 
         });
            
        }
    },
    
}


</script>

<template>
    <main>
        <div class="my_container">
            <!-- FILTER CONTAINER -->
            <div class="filter_container">
                    <select v-model="store.selectUser" class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option v-for="(archetype, i) in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                    </select>
                    
                    <button @click="searchArchetype()" type="button" class="btn btn-primary ">
                        Search
                    </button>
                    <button @click="resetSearch()" type="button" class="btn btn-warning ">
                        Reset
                    </button>
            </div>
            
            <!-- CARDS CONTAINER -->
            <div class="cards_container">
                <div v-if="store.loaded == true">
                    <div class="found_container">
                        Founded: {{store.cards.length}} cards
                    </div>
                    <div class="show_card_container">
                        <div class="single_card" v-for="(card, i) in store.cards" :key="i"> 
                            <div class="img_container">
                                <img :src="card.card_images[0].image_url" alt="immagine">
                            </div>
                            <div class="name_cards">
                                {{card.name}}
                            </div>
                            <div>
                                {{card.archetype}}
                            </div> 
                        </div>
                    </div>
                </div> 
                <div v-else class="loading">
                    <div>
                        Caricamento
                    </div>
                    <div class="spinner-border"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
