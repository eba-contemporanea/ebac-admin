<template>
    <div class="form-component-wrapper">
        <div class="form-header-component">
            <h1>{{ formName }}</h1>
            <button v-if="hasCloseButton" class="form-close-button" @click="closeForm">X</button>
        </div>
        <div v-for="(data, index) in properties" :key="index" class="form-component-input">
            <component 
                :is="currentInput(data)"
                :inputName="getInputName(data)"
                :inputDefaultValue="getInputValue(data)"
                :inputObject="getInputValue(data)"
                :isDisabled="isComponentDisabled(data)"
                markRaw
            />
        </div>
    </div>
</template>
<script>
import { 
    CheckboxInput, 
    DefaultInput, 
    SectionInput, 
    ObjectInput 
} from './inputs/index';
import { getInputType } from './utils/getInputType';

export default {
    name: 'FormGenerator',
    props: {
        formData: Object,
        formName: String,
        disabledInputs: Array,
        hasCloseButton: { type: Boolean, default: true },
    },
    data() {
        return {
            componentTypes: {
                string: DefaultInput,
                array: SectionInput,
                object: ObjectInput,
                boolean: CheckboxInput,
            }
        }
    },
    computed: {
        properties() {
            return Object.entries(this.formData).map(([k, v]) => ({ [k]: v })) || [];
        },
    },
    methods: {
        closeForm() {
            this.$emit('closeForm');
        },
        getInputName(object) {
            return Object.keys(object)[0];
        },
        getInputValue(data) {
            const inputName = this.getInputName(data);
            return this.formData[inputName];
        },
        getType(object) {
            const inputName = this.getInputName(object);
            const property = this.formData[inputName];

            return getInputType(property);
        },
        currentInput(prop) {
            const inputType = this.getType(prop);

            return this.componentTypes[inputType];
        },
        isComponentDisabled(obj) {
            const inputName = this.getInputName(obj);

            return this.disabledInputs.includes(inputName);
        }
    }
}
</script>
<style lang="less">
.form-component-wrapper { 
    background-color: antiquewhite;
    color: black;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 20px;

    .form-header-component {
        display: flex;
        justify-content: space-between;
    
        .form-close-button {
            height: fit-content;
            background-color:rgba(0, 0, 0, 0);
        }
    }

    .form-component-input {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        border-bottom: solid 1px darkgrey;
        padding-bottom: 15px;
    }
}
</style>