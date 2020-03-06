'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const {
            pseudo,
            nom,
            lieuRencontre,
            nombrePersonneFamille,
            nombreAnimaux,
            typeAnimaux,
            nationalite,
            enceinte,
            problemeSante,
            descriptionProblemeSante,
            demandeHebergement,
            situation
        } = ctx.request.body;

        try {
            const lignerapport = await strapi.services.lignerapport.create({
                pseudo,
                nom,
                lieuRencontre,
                nombrePersonneFamille,
                nombreAnimaux,
                typeAnimaux,
                nationalite,
                enceinte,
                problemeSante,
                descriptionProblemeSante,
                demandeHebergement,
                situation
            });

            return lignerapport;
        } catch (error) {
            //Silent
        }
    },
};
