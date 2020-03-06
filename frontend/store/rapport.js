import Cookies from 'js-cookie'

export const state = () => ({
    idMaraude: 0,
    lignerapports: []
})

//methodes des mutations du rapport
export const mutations = {
    initialiserRapport(state, maraude) {
        state.idMaraude = maraude.id;
        state.lignerapports = [];
        Cookies.set('maraude', state.idMaraude);
        Cookies.set('rapport', state.lignerapports);
    },

    setRapport(state, lignerapports) {
        state.lignerapports = lignerapports;
    },

    setMaraude(state, maraude) {
        state.maraude = maraude;
    },

    ajouterLigne(state, lignerapport) {
        state.lignerapports.push(lignerapport);
        Cookies.set('rapport', state.lignerapports);
    },

    supprimerLigne(state, lignerapport) {
        const index = state.lignerapports.findIndex(i => i.id === lignerapport.id);
        state.lignerapports.splice(index, 1);
        Cookies.set('rapport', state.lignerapports);
    },

    resetRapport(state) {
        state.lignerapports = [];
        Cookies.set('rapport', state.lignerapports);
    },

    resetMaraude(state) {
        state.maraude = 0;
        Cookies.set('maraude', state.maraude);
    }
}

export const getters = {
    lignerapports: state => {
        return state.lignerapports
    },
    idMaraude: state => {
        return state.maraude
    }
}