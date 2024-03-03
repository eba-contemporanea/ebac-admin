<template>
    <label :for="inputName">{{ formattedName }}</label>
    <component
        :is="isLongText ? 'textarea' : 'input'"
        :disabled="isDisabled" 
        :id="inputName" 
        :value="inputDefaultValue"
    />
</template>
<script>
import { formatPropName } from '../utils/formatPropName';

export default {
    name: 'DefaultInput',
    props: {
        inputName: String,
        inputDefaultValue: String,
        isDisabled: Boolean,
    },
    computed: {
        formattedName() {
            return formatPropName(this.inputName);
        },
        isLongText() {
            return this.inputDefaultValue?.length > 200;
        }
    }
}
</script>
<style lang="less">
</style>