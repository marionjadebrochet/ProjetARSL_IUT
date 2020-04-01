'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            nom,
            telephone,
            email,
            logo,
            association
        } = ctx.request.body;

        // Register the service in the database
        try {
            const partenaire = await strapi.services.partenaire.create({
              nom,
              telephone,
              email,
              logo,
              association
            });

            return partenaire;
        } catch (err) {
            // Silent
        }
    },
};
