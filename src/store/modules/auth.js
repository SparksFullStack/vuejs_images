const state = {
    token: null,
}

const getters = {
    isLoggedIn: state => !!state.token,
}

const actions = {
    logout: ({ commit }) => {
        commit("setToken", null);
    },

}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

// https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
// ID: f99e528c1e8aad5
// Secret: c2612178c64f1e7ca9743a707dbcaafb3fcaa691