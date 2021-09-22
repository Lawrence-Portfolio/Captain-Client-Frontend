<template>
    <div class="main-layout home-layout">
        <top-bar :title="title"></top-bar>
        <div class="collapse-group-wrapper">
            <el-collapse v-model="activeCollapse" @change="handleChangeCollapse">
                <el-collapse-item name="1" title="Проекты">
                    <div class="projects-wrap">
                        <el-row :gutter="10">
                            <el-col v-for="(project, project_index) in projects" :key="project_index" :span="4">
                                <router-link :to="`/project-${project.id}/${project.defaultView}`">
                                    <div class="project-card">
                                        <div class="project-color"></div>
                                        <div class="project-name">{{ project.name }}</div>
                                        <div class="project-team" 
                                            v-for="(item, index) in projectsTeams.filter(i => i.project_id == project.id)" :key="index">
                                            {{ teams.filter(j => j.id == item.team_id)[0].name }}
                                        </div>
                                    </div>
                                </router-link>
                            </el-col>
                            <el-col :span="4">
                                <new-project-modal></new-project-modal>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import topBar from '../components/top-bar'
import newProjectModal from '../components/modal/new-project'

export default {
    components: {
        topBar,
        newProjectModal
    },
    data: () => ({
        title: 'Home',
        activeCollapse: JSON.parse(localStorage.getItem('home-active-collapse')) || []
    }),
    computed: {
        projects() { return this.$store.getters.projects },
        projectsTeams() { return this.$store.getters.projectsTeams },
        teams() { return this.$store.getters.teams },

    },
    methods: {
        handleChangeCollapse(val) {
            this.activeCollapse = val
            localStorage.setItem('home-active-collapse', JSON.stringify(this.activeCollapse))
        }
    }
}
</script>

<style lang="scss">
    .collapse-group-wrapper {
        width: 1050px;
        margin: 40px auto;
        .el-collapse-item__arrow {
            display: none;
        }
        .el-collapse-item__header {
            display: flex;
            justify-content: space-between;
        }
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
