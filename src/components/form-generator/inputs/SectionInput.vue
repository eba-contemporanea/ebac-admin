<template>
    <div class="">
        teste section input {{ formattedName }}
    </div>
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