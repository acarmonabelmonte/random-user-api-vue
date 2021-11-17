import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}`;

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
    },
    async getRandomUsers({
        commit
    }) {
        await axios.get(`${uri}/?results=6&gender=female`).then(response => {
                commit('setRandomUsers', response.data.results);
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
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