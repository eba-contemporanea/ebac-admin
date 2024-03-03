<template>
    <div class="loading-component">
        <h1>Loading...</h1>
    </div>
</template>
<script>
export default {
    name: 'LoadingComponent',
}
</script>
<style>
.loading-component {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>