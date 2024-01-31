<template>
    <div class="wrapper">
        <main-loyout>
            <template v-slot:header>
                <AppHeader />
            </template>
            <template v-slot:footer>
                <AppFooter />
            </template>
        </main-loyout>
    </div>
</template>

<script setup lang="ts">
import { themeModel } from '@/entities/theme';
import { MainLoyout } from '@/shared/ui';
import { AppFooter } from '@/widgets/Footer';
import { AppHeader } from '@/widgets/Header';
// eslint-disable-next-line no-restricted-imports
import '@/shared/ui/styles/style.scss';
import 'swiper/css';
import 'swiper/css/navigation';

themeModel.useThemeStore().initTheme();
</script>
