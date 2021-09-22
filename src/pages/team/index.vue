<template>
    <div class="team-layout">
        <top-bar :links="links" :title="team.name"></top-bar>
        <router-view/>
    </div>
</template>
<script>
import topBar from '../../components/top-bar'

export default {
    components: {
        topBar
    },
    computed: {
        id() { return this.$route.params.id },
        links() {
            return [
                {
                    name: 'Overview',
                    url: `/team-${this.id}/overview`
                },
                {
                    name: 'Messages',
                    url: `/team-${this.id}/messages`
                },
                {
                    name: 'Calendar',
                    url: `/team-${this.id}/calendar`
                }
            ]
        },
        team() { return this.getTeamById(this.id) },
    },
    methods: {
        getTeamById(id) {
            let team = {}
            this.$store.getters.teams.filter(i => {
                if(i.id == id) {
                    team = i
                }
            })
            return team
        }
    }
}
</script>