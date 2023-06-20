<template>
    <div class="">
        teste object input {{ formattedName }} {{ inputDefaultValue }} {{ isDisabled }}
    </div>
</template>
<script>
import { formatPropName } from '../../../utils/formatPropName';

export default {
    name: 'ObjectInput',
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