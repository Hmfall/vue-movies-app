import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Session } from './types';

const SESSION_ID = 'SESSION_ID';

export const useSessionStore = defineStore('session', () => {
    const sessionValue = localStorage.getItem(SESSION_ID);

    const session = ref<Session | null>(sessionValue);

    const setSession = (value: string) => {
        localStorage.setItem(SESSION_ID, JSON.stringify(value));
        session.value = value;
    };

    const removeSession = () => {
        localStorage.removeItem(SESSION_ID);
    };

    const useAuth = computed(() => !!session.value);

    return { session, setSession, removeSession, useAuth };
});
