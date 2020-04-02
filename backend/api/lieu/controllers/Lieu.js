'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
      const {
        libelle,
        adresse,
        longitude,
        latitude
      } = ctx.request.body;

      try {
          const lieu = await strapi.services.lieu.create({
            libelle,
            adresse,
            longitude,
            latitude
          });

          return lieu;
      } catch (error) {
          alert('erreur depuis apiControlleurLieu')
      }
  },

  delete: async ctx => {
    try {
        await strapi.query('lieu').delete(
        {id: ctx.params.id});
    } catch (error) {
        //silent
    }
  }
};
