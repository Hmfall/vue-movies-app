<template>
    <Button
        size="s"
        color="accent"
        @click="handlePopupVisible"
    >
        Войти
    </Button>
    <Popup v-model:visible="popupVisible">
        <div class="auth">
            <div class="auth_input">
                <Input :placeholder="'Логин'" />
            </div>
            <div class="auth_input">
                <Input :placeholder="'Пароль'" />
            </div>
            <div class="action">
                <Button
                    size="s"
                    color="accent"
                >
                    Войти
                </Button>
            </div>
        </div>
    </Popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input, Popup } from '@/shared/ui';

const popupVisible = ref(false);

const handlePopupVisible = () => (popupVisible.value = true);
</script>

<style scoped lang="scss">
.auth {
    width: 240px;

    &_input {
        margin-bottom: 22px;
    }
}

.action {
    display: flex;
    justify-content: end;
}
</style>
