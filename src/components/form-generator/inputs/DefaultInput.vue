<template>
    <label :for="inputName">{{ formattedName }}</label>
    <input 
        :disabled="isDisabled" 
        :id="inputName" 
        :value="inputDefaultValue"
    >
</template>
<script>
import { formatPropName } from '../../../utils/formatPropName';

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
        }
    }
}
</script>
<style lang="less">
</style>