module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_Khzeb6cyoKK5nhgYqJRJ2saCEJcO/E4pDf6HOLq",
      apiToken: "NhSArhHUxL9XnSqzzyxUW3HZ",
      appFilter: "vss-box-company-dashboard-backend",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
