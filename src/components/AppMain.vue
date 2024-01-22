<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/

export default {
    data(){
        return{
            
        }
    },
    props: {
        allCards: Array  
    },
    components: {
       
    },
   
    methods: {

    },
    
}


</script>

<template>
    <main>
        <div class="my_container">
            <!-- FILTER CONTAINER -->
            <div class="filter_container">
                <input type="options">
            </div>
            
            <!-- CARDS CONTAINER -->
            <div class="cards_container">
                <div>
                    <div class="found_container">
                        Found 20 cards
                    </div>
                    <div class="show_card_container">
                        <div class="single_card" v-for="(card, i) in allCards" :key="i"> 
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
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
