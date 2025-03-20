module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: "strapi-provider-upload-do",
            providerOptions: {
                key: "DO801PPGVDQVV23NG493",
                secret: "oz0XLmGHEM+Bxpgi+HCYta/vGYq8ENGnqZrDOsQIbXQ",
                endpoint: "blr1.digitaloceanspaces.com",
                space: "fi4onf3",
            },
        },
    },

    // ...
});
