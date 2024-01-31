<template>
    <header class="header">
        <div class="container">
            <div class="header_inner">
                <nav class="navbar">
                    <div class="navbar_inner">
                        <a class="navbar_logo">
                            <Typography
                                component="span"
                                class="navbar_logo-text"
                                size="xl"
                            >
                                Movie
                            </Typography>
                        </a>
                        <ul class="navbar_list">
                            <li class="navbar_item">
                                <router-link to="/">
                                    <Typography component="span">
                                        Главная
                                    </Typography>
                                </router-link>
                            </li>
                            <li class="navbar_item">
                                <router-link to="/movie">
                                    <Typography component="span">
                                        Фильмы
                                    </Typography>
                                </router-link>
                            </li>
                            <li class="navbar_item">
                                <router-link to="/tv">
                                    <Typography component="span">
                                        Сериалы
                                    </Typography>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="search"></div>
                <div class="actions">
                    <div class="actions_inner">
                        <ToggleTheme />
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { LoginForm } from '@/features/authentication/login';
import { ToggleTheme } from '@/features/theme/ToggleTheme';
import { Typography } from '@/shared/ui';
</script>

<style lang="scss" scoped>
.header {
    flex: 0 0 auto;
    height: 90px;

    &_inner {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }
}

.navbar {
    &_inner {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &_list {
        display: flex;
        justify-content: space-evenly;
        gap: 20px;
    }

    &_item {
        display: flex;
    }

    &_logo {
        cursor: pointer;

        &-text {
            color: var(--foreground-default);
            line-height: 70%;
        }
    }
}

.buttons-list {
}

.actions {
    &_inner {
        display: flex;
        gap: 16px;
    }
}
</style>
