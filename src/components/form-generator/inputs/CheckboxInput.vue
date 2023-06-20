<template>
    <div class="">
        <input 
            :id="inputName"
            type="checkbox"
            :checked="inputDefaultValue"
            :name="inputName"
            :disabled="isDisabled"
        > 
        <label :for="inputName">{{ formattedName }}</label>
    </div>
</template>
<script>
import { formatPropName } from '../../../utils/formatPropName';

export default {
    name: 'CheckboxInput',
    props: {
        inputName: String,
        inputDefaultValue: { type: Boolean, default: true },
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