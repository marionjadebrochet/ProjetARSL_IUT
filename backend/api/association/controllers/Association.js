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
          //logo,
          adresse,
          email,
          telephone
        } = ctx.request.body;

        try {
            const association = await strapi.services.association.create({
                user: ctx.state.user.id,
                nom,
                description,
                //logo,
                adresse,
                email,
                telephone
            });

            return association;
        } catch (error) {
            alert('erreur depuis apiControlleurAssociation')
        }
    },

    update: async ctx => {
        const {
            centre,
            associationInfos
        } = ctx.request.body;

        try {
            const associaton = await strapi.query('associaton').update(
            {id: ctx.params.id},
            {
                centres: [associationInfos.centres.id, centre.id]
            });

            return centre;
        } catch (error) {
            //silent
        }
    }
};
