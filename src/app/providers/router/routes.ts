import { RouteRecordRaw } from 'vue-router';
import { Discover } from '@/pages/Discover';
import { Home } from '@/pages/Home';
import { Media } from '@/pages/Media';
import { APP_PATHS } from '@/shared/lib';

export const routes: RouteRecordRaw[] = [
    {
        name: APP_PATHS.Home.name,
        path: APP_PATHS.Home.path,
        component: Home,
    },
    {
        name: APP_PATHS.Media.name,
        path: APP_PATHS.Media.path,
        component: Media,
    },
    {
        name: APP_PATHS.Discover.name,
        path: APP_PATHS.Discover.path,
        component: Discover,
    },
];
