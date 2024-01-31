<template>
    <Typography
        class="error"
        component="span"
        size="m"
        bold
    >
        Error
    </Typography>
</template>

<script setup lang="ts">
import { Typography } from '@/shared/ui';
</script>

<style scoped lang="scss">
.error {
    color: red;
}
</style>
