export default {
    state: {
        projectCounter: 0,
        projects: JSON.parse(localStorage.getItem('projects')) || [],
        projectsTeams: JSON.parse(localStorage.getItem('projects_teams')) || [],
        projectsUsers: []
    },
    mutations: {
        ADD_PROJECT(state, payload) {
            state.projects.push(payload)
            localStorage.setItem('projects', JSON.stringify(state.projects))
        },
        ADD_PROJECTS_TEAMS(state, payload) {
            state.projectsTeams.push(payload)
            localStorage.setItem('projects_teams', JSON.stringify(state.projectsTeams))
        },
        UPDATE_PROJECT_COUNTER(state) {
            state.projectCounter++
        }
    },
    actions: {
        addNewProject({ commit, state }, payload) {
            const project_id = state.projectCounter + 1
            const project = {
                name: payload.name,
                id: project_id,
                color: '',
                defaultView: payload.defaultView
            }
            commit('ADD_PROJECT', project)

            commit('ADD_PROJECTS_TEAMS', {
                project_id: project_id,
                team_id: payload.team_id
            })

            commit('UPDATE_PROJECT_COUNTER')
        }
    },
    getters: {
        projects: state => state.projects,
        projectsTeams: state => state.projectsTeams
    }
}
