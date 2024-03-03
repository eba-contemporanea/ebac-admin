<template>
    <div class="object-input-container">
        <h2>{{ inputName }}</h2>
        <div v-for="(data, index) in objectKeys" :key="index" class="form-component-input">
            <component 
                :is="currentComponent(data)"
                :inputName="getComponentName(data)"
                :inputDefaultValue="getComponentValue(data)"
                :isDisabled="isDisabled"
            />
        </div>
    </div>
</template>
<script>
import { formatPropName } from '../utils/formatPropName';
import { getInputType } from '../utils/getInputType';
import { 
    CheckboxInput, 
    DefaultInput, 
    SectionInput
} from './index';

export default {
    name: 'ObjectInput',
    props: {
        inputName: String,
        inputObject: Object,
        isDisabled: Boolean,
    },
    data() {
        return {
            componentTypes: {
                string: DefaultInput,
                array: SectionInput,
                boolean: CheckboxInput,
            }
        }
    },
    computed: {
        formattedName() {
            return formatPropName(this.inputName);
        },
        objectKeys() {
            const allFields = [];

            for (const [key, value] of Object.entries(this.inputObject)) {
                allFields.push({ [key]: value });
            }

            return allFields;
        },
    },
    methods: {
        getComponentName(input) {
            return Object.keys(input)[0];
        },
        getComponentValue(input) {
            return Object.values(input)[0] || '';
        },
        currentComponent(input) {
            const inputValue = this.getComponentValue(input);
            const inputType = getInputType(inputValue);

            return this.componentTypes[inputType];
        }
    },
}
</script>
<style lang="less">
.object-input-container {
    text-transform: capitalize;
}
</style>