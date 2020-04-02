'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    update: async ctx => {
        const {
            actif
        } = ctx.request.body;

        try {
            const alerteglobale = await strapi.query('alerteglobale').update(
            {id: ctx.params.id},
            {
                actif: actif
            });

            return alerteglobale;
        } catch (error) {
            //silent
        }
    },
};
