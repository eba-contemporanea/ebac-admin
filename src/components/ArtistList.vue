<template>
    <div class="artist-list-component">
        <ArtistItem 
            v-for="a in artists" 
            :key="a._id" 
            :artist="a"
            :openEditModal="openEditModal"
        />

        <div v-if="isModalOpen" class="artist-edit-modal">
            <p @click="closeEditModal">CLOSE</p>
            <div class="artist-edit-modal-content">
                <ArtistForm
                    :artist="selectedArtist"
                    :submitArtist="submitArtist"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ArtistForm from './ArtistForm.vue';
import ArtistItem from './ArtistItem.vue';
import axios from 'axios';

export default {
    name: "ArtistList",
    props: {
        artists: {
            type: Array,
            default: () => ([])
        }
    },
    components: { ArtistItem, ArtistForm },
    data() {
        return {
            selectedArtist: {},
            isModalOpen: false
        }
    },
    methods: {
        openEditModal(id) {
            if(id) {
                const artist =  this.artists.filter(a => a.publicId === id)[0];

                this.selectedArtist = artist;
                this.isModalOpen = true;
            }
        },
        closeEditModal() {
            this.selectedArtist = {};
            this.isModalOpen = false;
        },
        async submitArtist(editedArtist) {
            await axios.put(`https://ebac.fly.dev/artista/${editedArtist.publicId}`, editedArtist)
                .then(() => {
                    alert('Artista atualizado com sucesso!');
                    this.$emit('getAllArtists');
                    this.closeEditModal();
                })
                .catch(err => {
                    alert('Houve um erro ao atualizar artista');
                    console.error(err);
                });
        }
    }
}
</script>

<style lang="less">
.artist-list-component {
    background-color: lightgray;
    width: 100%;
    position: relative;

    .artist-edit-modal {
        position: absolute;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.8);

        .artist-edit-modal-content {
            margin: 2rem auto;
            padding: 1rem;
            width: 70%;
            height: 90vh;
            overflow: auto;
            background-color: white;
            border-radius: 25px;
        }

        p {
            color: white;
        }
    }
}
</style>