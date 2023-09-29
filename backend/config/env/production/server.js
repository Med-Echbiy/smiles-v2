module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: 1337,
  url: "https://dental-braces.onrender.com", // Sets the public URL of the application.
  app: {
    keys: ["12333dlfshfhf", "fhizfhqhmfhmh"],
  },
});
