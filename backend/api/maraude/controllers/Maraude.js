'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            nom,
            heureDepart,
            heureRdv,
            //heureArrive,
            lieuDepart,
            lieuRdv,
            lieuArrive,
            enPrevisions,
            fini,
            dateDepart
        } = ctx.request.body;

        try {
            const maraude = await strapi.services.maraude.create({
                user: ctx.state.user.id,
                nom,
                heureDepart,
                heureRdv,
                //heureArrive,
                enPrevisions,
                fini,
                lieuDepart,
                lieuRdv,
                lieuArrive,
                dateDepart
            });

            return maraude;
        } catch (error) {
            alert('erreur depuis apiControlleurMaraude')
        }
    },

    update: async ctx => {
        const {
            lignerapportsInfos
        } = ctx.request.body;

        try {
          const maraude = await strapi.query('maraude').update(
              {id: ctx.params.id},
              {
                lignerapports: lignerapportsInfos,
                fini: true
              });
          
          return maraude;
        } catch (error) {
            console.log(error)
        }
    }
};
