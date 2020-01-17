'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            heureDepart,
            enPrevisions,
            dateDepart,
            fini,
            nom,
            heureRdv,
            lieuDepart,
            lieuRdv,
            lieuArrive
        } = ctx.request.body;

        try {
            const maraude = await strapi.services.Maraude.create({
                user: ctx.state.user.id,
                heureDepart,
                enPrevisions,
                dateDepart,
                fini,
                nom,
                heureRdv,
                lieuDepart,
                lieuRdv,
                lieuArrive
            });

            return order;
        } catch (error) {
            alert('erreur depuis apiControlleurMaraude')
        }
    },
};
