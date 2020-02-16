'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    update: async ctx => {
        const {
            service,
            centreInfos
        } = ctx.request.body;

        
        try {
            const centre = await strapi.query('centre').update(
            {id: ctx.params.id},
            {
                services: [centreInfos.services.id, service.id]
            });
    
            return centre;
        } catch (error) {
            //silent
        }
    }
};
