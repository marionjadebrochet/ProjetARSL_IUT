'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            nom,
            lundiMatin,
            lundiApresMidi,
            mardiMatin,
            mardiApresMidi,
            mercrediMatin,
            mercrediApresMidi,
            jeudiMatin,
            jeudiApresMidi,
            vendrediMatin,
            vendrediApresMidi,
            samediMatin,
            samediApresMidi,
            dimancheMatin,
            dimancheApresMidi
        } = ctx.request.body;

        // Register the jourshoraire in the database
        try {
            const jourshoraire = await strapi.services.jourshoraires.create({
                nom,
                lundiMatin,
                lundiApresMidi,
                mardiMatin,
                mardiApresMidi,
                mercrediMatin,
                mercrediApresMidi,
                jeudiMatin,
                jeudiApresMidi,
                vendrediMatin,
                vendrediApresMidi,
                samediMatin,
                samediApresMidi,
                dimancheMatin,
                dimancheApresMidi
            });

            return jourshoraire;
        } catch (err) {
            // Silent
        }
    },
};
