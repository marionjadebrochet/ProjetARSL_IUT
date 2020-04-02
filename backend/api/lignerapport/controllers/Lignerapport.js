'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            situation,
            age,
            nombreHomme,
            nombreFemme,
            nombreEnfant,
            comAnimaux,
            enceinte,
            pbSante,
            secours,
            demandeHebergement,
            logementactuel,
            appel,
            animaux,
            pseudo,
            lieuRencontre
        } = ctx.request.body;

        try {
            const lignerapport = await strapi.services.lignerapport.create({
                situation,
                age,
                nombreHomme,
                nombreFemme,
                nombreEnfant,
                comAnimaux,
                enceinte,
                pbSante,
                secours,
                demandeHebergement,
                logementactuel,
                appel,
                animaux,
                pseudo,
                lieuRencontre
            });

            return lignerapport;
        } catch (error) {
            //Silent
        }
    },
};
