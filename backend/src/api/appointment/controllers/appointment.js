"use strict";

/**
 * appointment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::appointment.appointment",
  ({ strapi }) => ({
    async find(ctx) {
      console.log(ctx.data);
    },
    async create(ctx) {
      const { fullName, service, users_permissions_user } =
        ctx.request.body.data;
      // Fetch using the fullName and user and service to check if it already exists
      const checker = await strapi
        .query("api::appointment.appointment")
        .findOne({
          where: {
            users_permissions_user: {
              id: users_permissions_user,
            },
            service: {
              id: service,
            },
          },
          populate: true,
        });

      if (checker) {
        console.log(checker, " checker");
        return ctx.badRequest(
          "You have already create an appointment for this service."
        );
      }

      const res = await super.create(ctx);
      return res;
    },
  })
);
