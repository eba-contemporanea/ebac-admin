<template>
    <div class="artist-item-component d-flex border-grey">
        <div class="d-flex">
            <h4>{{ artist.publicId }}</h4>
            <h3>{{ artist.nome }}</h3>
        </div>
        <div class="item-actions">
            <div @click="openEditModal(artist.publicId)">Editar</div>
            <div>Apagar</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtistItem',
    props: {
        artist: {},
        openEditModal: Function
    },
}
</script>

<style lang="less">
.artist-item-component {
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
}
</style>