/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://occo.site_owner:eCpnON1RT5Sh@ep-fragrant-darkness-a50yhewm.us-east-2.aws.neon.tech/occo.site?sslmode=require',
    }
  };