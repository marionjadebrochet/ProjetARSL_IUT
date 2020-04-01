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
          // logo,
          Adresse,
          Email,
          telephone
        } = ctx.request.body;

        try {
            const association = await strapi.services.association.create({
                // user: ctx.state.user.id,
                nom,
                description,
                // logo,
                Adresse,
                Email,
                telephone
            });

            return association;
        } catch (error) {
            alert('erreur depuis apiControlleurAssociation')
        }
    }
};
