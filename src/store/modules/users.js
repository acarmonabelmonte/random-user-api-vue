import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}`;

const state = {
    currentUser: null,
    randomUsers: [],
    randomUserSelected: null
};

const actions = {
    login({
        commit
    }, userData) {
        commit('setCurrentUser', userData);
    },
    logout({
        commit
    }) {
        commit('setCurrentUser', null);
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
    setCurrentUser: (state, currentUser) => state.currentUser = currentUser,
    setRandomUsers: (state, randomUsers) => state.randomUsers = randomUsers,
    setRandomUserSelected: (state, randomUserSelected) => state.randomUserSelected = randomUserSelected,
}

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}