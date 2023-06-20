import FormGenerator from '../components/form-generator/FormGenerator.vue';
<template>
  <div class="about">
    <FormGenerator 
      :formData="artist" 
      formName="Artista"
      :disabledInputs="[ '_id', 'publicId' ]"
    />
  </div>
</template>
<script>
import axios from 'axios';
import FormGenerator from '../components/form-generator/FormGenerator.vue';
export default {
  components: { FormGenerator },
  data() {
    return {
      artist: {},
    }
  },
  mounted() {
    this.getArtistInformation();
  },
  methods: {
    async getArtistInformation() {
      await axios.get("https://ebac.fly.dev/artista")
        .then(response => {
          this.artist = response.data.artists[0];
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
