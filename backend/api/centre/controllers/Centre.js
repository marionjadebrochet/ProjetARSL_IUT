'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    update: async ctx => {
        const {
            service
        } = ctx.request.body;

        console.log(service);
        
        try {
            const centre = await strapi.services.centre.update({
                service
            });
    
            return centre;
        } catch (error) {
            //silent
        }
    }
};
