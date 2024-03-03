import FormGenerator from '../components/form-generator/FormGenerator.vue';
<template>
  <div class="about">
    <Loading v-if="loading" />
    <FormGenerator
      v-if="!loading"
      :formData="artist" 
      formName="Artista"
      :disabledInputs="[ '_id', 'publicId' ]"
    />
  </div>
</template>
<script>
import axios from 'axios';
import FormGenerator from '../components/form-generator/FormGenerator.vue';
import Loading from '../components/Loading.vue';

export default {
  components: { FormGenerator, Loading },
  data() {
    return {
      artist: {},
      loading: true,
    }
  },
  mounted() {
    this.getArtistInformation();
  },
  methods: {
    async getArtistInformation() {
      await axios.get("https://ebacontemporanea.onrender.com/artista")
        .then(response => {
          this.artist = response.data.artists[0];
          console.log(this.artist.biografia);
          this.loading = false;
        });
    }
  }
}
</script>
<style>
.about {
  height: 100%;
  overflow-y: auto;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
