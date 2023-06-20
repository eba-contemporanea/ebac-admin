<template>
    <div class="artists-page-component">
        <ArtistList 
            :artists="artists" 
            @getAllArtists="getArtists"    
        />
    </div>
</template>

<script>
import axios from 'axios';
import ArtistList from '../components/ArtistList.vue';

export default {
    data() {
        return {
            artists: {
                type: Array,
                default: []
            },
        };
    },
    mounted() {
        this.getArtists();
    },
    methods: {
        async getArtists() {
            await axios
                .get("https://ebac.fly.dev/artista?getAll=true")
                .then(response => {
                    this.artists = response.data.artists;
                });
        }
    },
    components: { ArtistList }
}
</script>

<style lang="less">
.artists-page-component {
    background-color: antiquewhite;
    color: black;
    height: 100%;
    overflow-y: auto;
}
</style>