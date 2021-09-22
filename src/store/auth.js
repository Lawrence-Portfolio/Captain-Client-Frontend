import axios from 'axios'
axios.defaults.baseURL = 'http://captain.test/'

export default {
    state: {
        authenticated: false,
        user: null
    },
    mutations: {
        SET_AUTHENTICATED(state, payload) {
            state.authenticated = payload
        },
        SET_USER (state, payload) {
            state.user = payload
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            await axios.get('/csrf-cookie')
            await axios.post('/login', credentials)

            return dispatch('user')
        },
        user({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        }
    },
    getters: {
        authenticated: state => state.authenticated,
        user: state => state.user
    }
}