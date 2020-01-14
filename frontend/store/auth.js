import Cookies from 'js-cookie'

// Defining an empty state
export const state = () => {}

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  logout(state) {
    state.user = null
    Cookies.set('user', null)
  }
}

// Define a getter in order to get your current username from your state
export const getters = {
  username: state => {
    return state.user && state.user.username
  },
  user: state => {
    return state.user
  },
  association: state => {
    return state.user && state.user.association
  },
  maraudes: state => {
    return state.user && state.user.maraudes
  }
}
