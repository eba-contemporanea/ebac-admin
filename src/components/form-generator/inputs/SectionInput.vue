<template>
    <div class="section-input-container">
        <h2>{{ formattedName }}</h2>
        <div v-for="(data, index) in editedArray" :key="index" class="edit-section-list-item">
            <input 
                v-for="(innerData, innerIndex) in sectionedData(data)"
                :key="innerIndex"
                :value="getItemValue(innerData, innerIndex)"
                :placeholder="getItemPlaceholder(innerData, innerIndex).formatted"
                @input="e => setValue(innerData, e)"
            >
            <button @click="removeItemFromArray(index)">Apagar</button>
        </div>
        <button class="add-button" @click="addItemToArray()">+ Adicionar</button>
    </div>
</template>
<script>
import { formatPropName } from '../utils/formatPropName';

export default {
    name: 'SectionInput',
    props: {
        inputName: String,
        inputDefaultValue: {
            type: Array,
            default: () => ([])
        },
        isDisabled: Boolean,
        fullObjectToBeEdited: Array
    },
    data() {
        return {
            editedArray: [...this.inputDefaultValue],
        }
    },
    computed: {
        formattedName() {
            return formatPropName(this.inputName);
        },
        objectStructure() {
            const data = this.inputDefaultValue[0] || { nome: '', url: ''};
            const emptyFields = [];

            for (const [key] of Object.entries(data)) {
                if(key != 'id' && key != '_id') {
                    emptyFields.push({ [key]: '' });
                }
            }
            return emptyFields;
        }
    },
    methods: {
        sectionedData(data) {
            const rawData = JSON.parse(JSON.stringify(data));
            const allFields = [];

            for (const [key, value] of Object.entries(rawData)) {
                if(key != 'id' && key != '_id') {
                    allFields.push({ [key]: value });
                }
            }

            return allFields;
        },
        getItemValue(item, index) {
            const rawItem = JSON.parse(JSON.stringify(item[index] || item));

            return Object.values(rawItem)[0] || "";
        },
        getItemPlaceholder(item, index) {
            const rawItem = JSON.parse(JSON.stringify(item[index] || item));
            const rawResult = Object.keys(rawItem)[0];

            return { formatted: formatPropName(rawResult), raw: rawResult };
        },
        removeItemFromArray(item) {
            this.editedArray = this.editedArray.filter((a, i) => i !== item);
        },
        addItemToArray() {
            this.editedArray = [
                ...this.editedArray,
                this.objectStructure
            ];
        },
        setValue(data, e) {
            const itemName = this.getItemPlaceholder(data).raw;

            this.editedArray[data] = { 
                ...this.editedArray[data], 
                [itemName]: e.target.value 
            };
        },
    }
}
</script>
<style lang="less">
.section-input-container {
    .section-input-item {
        
    }
}
</style>