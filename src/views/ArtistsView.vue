<template>
    <div class="artists-page-component">
        <div v-if="loading">
            <Loading />
        </div>
        <ArtistList 
            v-if="!loading"
            :artists="artists" 
            @getAllArtists="getArtists"    
        />
    </div>
</template>

<script>
import axios from 'axios';
import ArtistList from '../components/ArtistList.vue';
import Loading from '../components/Loading.vue';

export default {
    data() {
        return {
            artists: {
                type: Array,
                default: []
            },
            loading: true,
        };
    },
    mounted() {
        this.getArtists();
    },
    methods: {
        async getArtists() {
            await axios
                .get("https://ebacontemporanea.onrender.com/artista?getAll=true")
                .then(response => {
                    this.artists = response.data.artists;
                    this.loading = false;
                });
        }
    },
    components: { ArtistList, Loading }
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