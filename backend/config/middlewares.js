module.exports = [
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: '*',
            origin: [
                'http://localhost:8118',
                'http://localhost:3000',
                'https://kandabi.com',
                'https://kandabi-2023.netlify.app',
            ],
        },
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
