export default {
    state: {
        teamsCounter: 0,
        teams: JSON.parse(localStorage.getItem('teams')) || []
    },
    mutations: {
        ADD_TEAM(state, payload) {
            state.teams.push(payload)
            localStorage.setItem('teams', JSON.stringify(state.teams))
        },
        UPDATE_TEAMS_COUNTER(state) {
            state.teamsCounter++
        }
    },
    actions: {
        addNewTeam({ commit, state }, payload) {
            const team_id = state.teamsCounter + 1
            const team = {
                name: payload.name,
                id: team_id,
                description: payload.description,
                members: payload.members
            }
            commit('ADD_TEAM', team)

            commit('UPDATE_TEAMS_COUNTER')
        }
    },
    getters: {
        teams: state => state.teams
    }
}
