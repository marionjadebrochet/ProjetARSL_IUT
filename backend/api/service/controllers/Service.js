'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            nom,
            description,
            centre,
            jourshoraires
        } = ctx.request.body;

        // Register the service in the database
        try {
            const service = await strapi.services.service.create({
                nom,
                description,
                centre,
                jourshoraires
            });

            return service;
        } catch (err) {
            // Silent
        }
    },
};
