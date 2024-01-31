import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Theme } from './types';

const THEME = 'THEME';

export const useThemeStore = defineStore('theme', () => {
    const themeValue = (localStorage.getItem(THEME) || 'light') as Theme;

    const theme = ref<Theme>(themeValue);

    const currentTheme = computed(() => theme.value);

    const initTheme = () => {
        document.documentElement.setAttribute('data-theme', currentTheme.value);
    };

    const toggleTheme = () => {
        const newTheme = theme.value === 'dark' ? 'light' : 'dark';
        document.body.classList.add('notransition');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME, newTheme);
        theme.value = newTheme;
    };

    return { initTheme, toggleTheme, currentTheme };
});
