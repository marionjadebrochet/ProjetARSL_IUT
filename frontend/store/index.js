import cookieparser from 'cookieparser'

export const actions = {  
  nuxtServerInit({ commit }, { req }) {
    let user = null
    let maraude = null
    let rapport = []
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      user = (parsed.user && JSON.parse(parsed.user)) || null
      rapport = (parsed.rapport && JSON.parse(parsed.rapport)) || []
      maraude = (parsed.maraude && JSON.parse(parsed.maraude)) || null
    }

    commit('auth/setUser', user)
    commit('rapport/setRapport', rapport)
    commit('rapport/setMaraude', maraude)
  }
}