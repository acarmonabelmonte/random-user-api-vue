const state = {
    loginUser: {},
    randomUsers: [],
    randomUserSelected: {}
};

const actions = {
    login({
        commit
    }, userData) {
        commit('setLocalUser', userData);
    },
    logout({
        commit
    }) {
        commit('setLocalUser', {});
    }
}

const mutations = {
    setLocalUser: (state, loginUser) => state.loginUser = loginUser,
    setRandomUsers: (state, randomUsers) => state.randomUsers = randomUsers,
    setRandomUserSelected: (state, randomUserSelected) => state.localUser = randomUserSelected,
}

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}