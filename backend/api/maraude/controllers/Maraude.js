'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            lieuDepart,
            lieuArrive,
            heureDepart
        } = ctx.request.body;

        try {
            const maraude = await strapi.services.maraude.create({
                user: ctx.state.user.id,
                nom,
                lieuDepart,
                lieuArrive,
                heureDepart,
                dateDepart,
                enPrevisions,
                fini
            });

            return order;
        } catch (error) {
            alert('erreur depuis apiControlleurMaraude')
        }
    },
};
