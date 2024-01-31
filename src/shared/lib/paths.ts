enum AppRoutes {
    ROOT = 'Home',
    MEDIA = 'Media',
    DISCOVER = 'Discover',
}

export const APP_PATHS = {
    [AppRoutes.ROOT]: {
        name: AppRoutes.ROOT,
        path: '/',
        redirect: () => '/',
    },
    [AppRoutes.MEDIA]: {
        name: AppRoutes.MEDIA,
        path: '/:mediaType/:id',
        redirect: (mediaType: string, id: number) => `/${mediaType}/${id}`,
    },
    [AppRoutes.DISCOVER]: {
        name: AppRoutes.DISCOVER,
        path: '/:mediaType',
        redirect: (mediaType: string) => `/${mediaType}`,
        children: {
            name: AppRoutes.MEDIA,
            path: '/:id',
            redirect: (mediaType: string, id: number) => `/${mediaType}/${id}`,
        },
    },
};
