<template>
    <div class="kanban-layout">
        <top-bar :links="links" :title="project.name"></top-bar>
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
                    name: 'Board',
                    url: `/project-${this.id}/board`
                },
                {
                    name: 'List',
                    url: `/project-${this.id}/list`
                },
                {
                    name: 'Timeline',
                    url: `/project-${this.id}/timeline`
                },
                {
                    name: 'Calendar',
                    url: `/project-${this.id}/calendar`
                }
            ]
        },
        project() { return this.getProjectById(this.id) }
    },
    methods: {
        getProjectById(id) {
            let project = {}
            this.$store.getters.projects.filter(i => {
                if(i.id == id) {
                    project = i
                }
            })
            return project
        }
    }
}
</script>
<style lang="scss">
    .kanban-layout {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>