<template>
    <div class="container">
        <section class="lists">
            <ListItem
                v-for="list in MEDIA_LISTS"
                :key="list.name"
                :media-list="list"
            />
        </section>
    </div>
</template>

<script setup lang="ts">
import { MEDIA_LISTS } from '../../model/consts';
import ListItem from '../ListItem/ListItem.vue';
</script>

<style scoped lang="scss"></style>
