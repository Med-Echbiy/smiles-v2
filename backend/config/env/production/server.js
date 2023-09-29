module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://dental-braces.onrender.com"), // Sets the public URL of the application.
  app: {
    keys: ["12333dlfshfhf", "fhizfhqhmfhmh"],
  },
});
