<template>
    <div class="overview-layout">
        <el-row :gutter="20">
            <el-col :span="6">
                left content
            </el-col>
            <el-col :span="18">
                <el-row class="row">
                    <el-col v-for="(item, index) in projectsTeams.filter(i => i.team_id == team_id)" :key="index" :span="6">
                        <router-link :to="`../project-${project.id}/${project.defaultView}`" v-for="(project, project_index) in projects.filter(i => i.id == item.project_id)" :key="project_index">
                            <div class="project-card">
                                <div class="project-color"></div>
                                <div class="project-name">{{ project.name }}</div>
                                <div class="project-team">{{ team[0].name }}</div>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    computed: {
        team_id() { return this.$route.params.id },
        projectsTeams() { return this.$store.getters.projectsTeams },
        projects() { return this.$store.getters.projects },
        team() { return this.$store.getters.teams.filter(i => i.id == this.team_id) }
    },
    methods: {
        projectsByTeamId(team_id) {
            return this.projectsTeams.filter(i => i.team_id == team_id)
        }
    },
    mounted() {
        console.log(this.projectsByTeamId(this.team_id))
    }
}
</script>

<style lang="scss">
    .overview-layout {
        max-width: 930px;
        margin: 40px auto;
    }
    .projects-wrap {
        padding-top: 5px;
    }
    .project-card {
        padding: 15px;
        transition: all .4s ease-in-out;
        border-radius: 25px;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: rgba($color: #000000, $alpha: .03);
            transform: translateY(-5px);
        }
        .project-color {
            margin-bottom: 5px;
            border-radius: 25px;
            height: 130px;
            background-color: #48dafd;
        }
    }
    .add-project-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
        border: 1px dashed #000;
        border-radius: 25px;
        i {
            font-size: 40px;
        }
    }
</style>