<template>
    <div class="artist-edit-form">
        <h3>Editar artista</h3>

        <div class="edit-section">
            <label for="public-id">Public ID</label>
            <input disabled id="public-id" :value="artist.publicId">
        </div>

        <div class="edit-section checkbox">
            <input 
                id="activate-artist"
                type="checkbox"
                :checked="editedArtist.active"
                v-model="editedArtist.active"
                name="Ativo"
            > 
            <label for="activate-artist">Ativar artista</label>
        </div>

        <div class="edit-section">
            <label for="name">Nome:</label>
            <input id="name" :value="artist.nome" @input="editedArtist.nome = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="banner-photo">Link da imagem do Banner (página do artista):</label>
            <input id="banner-photo" :value="artist.fotoBanner" @input="editedArtist.fotoBanner = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="card-photo">Link da imagem do Card (página de todos artistas):</label>
            <input id="card-photo" :value="artist.fotoCard" @input="editedArtist.fotoCard = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="profile-photo">Link da imagem de perfil (página do artista):</label>
            <input id="profile-photo" :value="artist.fotoPerfil" @input="editedArtist.fotoPerfil = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="biography">Biografia:</label>
            <textarea id="biography" :value="artist.biografia.texto"
                @input="editedArtist.biografia.texto = $event.target.value" rows="6"></textarea>
        </div>

        <div class="edit-section">
            <label for="author-biography">Autor da Biografia:</label>
            <input id="author-biography" :value="artist.biografia.autor"
                @input="editedArtist.biografia.texto = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="current-local">Local Atual:</label>
            <input id="current-local" :value="artist.localAtual" @input="editedArtist.localAtual = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="birth-local">Local/Ano de Nascimento:</label>
            <input id="birth-local" :value="artist.localNascimento"
                @input="editedArtist.localNascimento = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="profession">Profissão:</label>
            <input id="profession" :value="artist.profissao" @input="editedArtist.profissao = $event.target.value">
        </div>

        <div class="edit-section">
            <label for="artist-estudos">Estudos:</label>
            <div class="edit-section-list w-100" id="artist-estudos">
                <div 
                    class="edit-section-list-item" 
                    v-for="(estudo, index) in editedArtist.estudos" 
                    :key="estudo._id"
                >
                    <input 
                        placeholder="Área de estudo" 
                        :value="estudo.area"
                        @input="editedArtist.estudos[index].area = $event.target.value"
                    >
                    <input 
                        placeholder="Tipo de estudo" 
                        :value="estudo.tipo"
                        @input="editedArtist.estudos[index].tipo = $event.target.value"
                    >
                    <input 
                        type="number" 
                        placeholder="Ano de início" 
                        :value="estudo.anoInicio"
                        @input="editedArtist.estudos[index].anoInicio = $event.target.value"
                    >
                    <input 
                        type="number" 
                        placeholder="Ano de fim" 
                        :value="estudo.anoFim"
                        @input="editedArtist.estudos[index].anoFim = $event.target.value"
                    >
                    <button @click="removeItemFromArray('estudos', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.estudos.push({})">+ Adicionar novo Estudo</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-links">Detalhes Acadêmicos (links):</label>
            <div class="edit-section-list w-100" id="artist-links">
                <div 
                    class="edit-section-list-item" 
                    v-for="(link, index) in editedArtist.links" 
                    :key="link._id"
                >
                    <input 
                        placeholder="Título do link" 
                        :value="link.nome"
                        @input="editedArtist.links[index].nome = $event.target.value"
                    >
                    <input 
                        placeholder="Link" 
                        :value="link.url"
                        @input="editedArtist.links[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('links', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.links.push({})">+ Adicionar novo Link</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-interviews-project">Entrevista do Projeto EBAContemporânea:</label>
            <div class="edit-section-list w-100" id="artist-interviews-project">
                <div 
                    class="edit-section-list-item" 
                    v-for="(entrevista, index) in editedArtist.entrevistasSite" 
                    :key="entrevista._id"
                >
                    <input 
                        :value="entrevista.nome" 
                        placeholder="Título"
                        @input="editedArtist.entrevistasSite[index].nome = $event.target.value"
                    >
                    <input 
                        :value="entrevista.url" 
                        placeholder="Link"
                        @input="editedArtist.entrevistasSite[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('entrevistasSite', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.entrevistasSite.push({})">+ Adicionar nova Entrevista</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-artworks">Obras:</label>
            <div class="edit-section-list w-100" id="artist-artworks">
                <div 
                    class="edit-section-list-item" 
                    v-for="(obra, index) in editedArtist.obras" 
                    :key="obra._id"
                >
                    <input 
                        :value="obra.nome" 
                        placeholder="Título da imagem"
                        @input="editedArtist.obras[index].nome = $event.target.value"
                    >
                    <input 
                        :value="obra.img" 
                        placeholder="Link da imagem"
                        @input="editedArtist.obras[index].img = $event.target.value"
                    >
                    <button @click="removeItemFromArray('obras', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.obras.push({})">+ Adicionar nova Obra</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-other-texts">Outros Textos:</label>
            <div class="edit-section-list w-100" id="artist-other-texts">
                <div 
                    class="edit-section-list-item" 
                    v-for="(outroTexto, index) in editedArtist.outrosTextos" 
                    :key="outroTexto._id"
                >
                    <input 
                        :value="outroTexto.nome" 
                        placeholder="Título"
                        @input="editedArtist.outrosTextos[index].nome = $event.target.value"
                    >
                    <input 
                        :value="outroTexto.url" 
                        placeholder="Link"
                        @input="editedArtist.outrosTextos[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('outrosTextos', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.outrosTextos.push({})">+ Adicionar novo Outro Texto</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-galleries">Galerias Comerciais:</label>
            <div class="edit-section-list w-100" id="artist-galleries">
                <div 
                    class="edit-section-list-item" 
                    v-for="(galeria, index) in editedArtist.galeriasComerciais" 
                    :key="galeria._id"
                >
                    <input 
                        :value="galeria.nome" 
                        placeholder="Título"
                        @input="editedArtist.galeriasComerciais[index].nome = $event.target.value"
                    >
                    <input 
                        :value="galeria.url" 
                        placeholder="Link"
                        @input="editedArtist.galeriasComerciais[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('galeriasComerciais', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.galeriasComerciais.push({})">+ Adicionar nova Galeria</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-interviews">Entrevistas em Destaque:</label>
            <div class="edit-section-list w-100" id="artist-interviews">
                <div 
                    class="edit-section-list-item" 
                    v-for="(entrevista, index) in editedArtist.entrevistas" 
                    :key="entrevista._id"
                >
                    <input 
                        :value="entrevista.nome" 
                        placeholder="Título"
                        @input="editedArtist.entrevistas[index].nome = $event.target.value"
                    >
                    <input 
                        :value="entrevista.url" 
                        placeholder="Link"
                        @input="editedArtist.entrevistas[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('entrevistas', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.entrevistas.push({})">+ Adicionar nova Entrevista</button>
            </div>
        </div>

        <div class="edit-section">
            <label for="artist-events-collectives">Eventos / Coletivos:</label>
            <div class="edit-section-list w-100" id="artist-events-collectives">
                <div 
                    class="edit-section-list-item" 
                    v-for="(evento, index) in editedArtist.eventos" 
                    :key="evento._id"
                >
                    <input 
                        :value="evento.nome" 
                        placeholder="Título da imagem"
                        @input="editedArtist.eventos[index].nome = $event.target.value"
                    >
                    <input 
                        :value="evento.url" 
                        placeholder="Link"
                        @input="editedArtist.eventos[index].url = $event.target.value"
                    >
                    <button @click="removeItemFromArray('eventos', index)">Apagar</button>
                </div>
                <button class="add-button" @click="editedArtist.eventos.push({})">+ Adicionar novo Evento/Coletivo</button>
            </div>
        </div>

        <div class="artist-edit-buttons">
            <button @click="submitArtist(editedArtist)">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtistForm',
    props: {
        artist: {},
        submitArtist: Function
    },
    data() {
        return {
            editedArtist: { 
                ...this.artist, 
                active: this.artist.active || true 
            }
        }
    },
    methods: {
        removeItemFromArray(arrayName, index) {
            this.editedArtist[arrayName] = this.editedArtist[arrayName].filter((a, i) => i !== index);
        }
    }
}
</script>

<style lang="less">
.artist-edit-form {
    display: block;
    overflow: auto;

    .edit-section {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        border-bottom: solid 1px darkgrey;
        padding-bottom: 15px;

        &.checkbox {
            flex-direction: row;
            place-items: center;
            
            input {
                margin: 0 15px;
            }
        }

        .edit-section-list-item {
            width: 100%;
            margin-bottom: 10px;

            input {
                width: 40%;
            }
        }

        button {
            border: solid 2px rgb(199, 57, 57);
            border-radius: 15px;
            padding: 5px 20px;
            background-color: white;

            &.add-button {
                border: solid 2px darkslategrey;
                margin-top: 10px;
            }
        }
    }

    .artist-edit-buttons {
        margin: 20px 0;
        width: 100%;
        display: flex;
        place-content: center;

        button {
            border: solid 2px black;
            border-radius: 15px;
            padding: 5px 20px;
            color: black;
            font-size: 16px;
            background-color: white;
        }
    }
}
</style>