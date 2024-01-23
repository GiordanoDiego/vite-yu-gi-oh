import { reactive } from 'vue';

export const store = reactive({
    originalUrlAPI: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
    urlAllArchetype : 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    urlSearchArchetype: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    loaded: false,
    cards:[],
    archetypes:[],
    selectUser: '',
});
