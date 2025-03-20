export default [
    "strapi::logger",
    "strapi::errors",
    // 'strapi::security',
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "fi4onf3.blr1.digitaloceanspaces.com",
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "fi4onf3.blr1.digitaloceanspaces.com",
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
