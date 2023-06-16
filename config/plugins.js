module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: "DO00K4BV7R63YEPVUE94",
        secret: "/V+s8cW9B2OZEpmpLezZa2SBGCEu0V1Ap8v8J0Khjh8",
        endpoint: "sgp1.digitaloceanspaces.com",
        space: "strapi-images",
      },
    },
  },
  // ...
});
