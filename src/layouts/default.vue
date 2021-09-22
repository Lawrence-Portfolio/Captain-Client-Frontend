<template>
  <div class="default-layout">
    <el-aside class="collapse" width="240px" :class="{ show: true }">
      <div class="aside-header">
        <router-link class="logo" to="/">BIZ-MARK</router-link>
        <div class="aside-burger" @click="$store.commit('onShowAside', false)">
          <i class="fal fa-angle-left"></i>
          <i class="fal fa-bars"></i>
        </div>
      </div>
      <nav class="aside-links">
        <router-link class="aside-link" to="/"><i class="fal fa-home-alt"></i>Главная</router-link>
        <router-link class="aside-link" to="/auth/sign-in"><i class="fal fa-chalkboard"></i>Выйти</router-link>
      </nav>
      <el-collapse>
        <el-collapse-item title="Избранное">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti molestiae harum aperiam sunt perferendis nam fugit explicabo animi impedit mollitia, eveniet consequuntur aspernatur earum corrupti eum ea neque voluptas?</div>
        </el-collapse-item>
        <el-collapse-item title="Отчеты">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti molestiae harum aperiam sunt perferendis nam fugit explicabo animi impedit mollitia, eveniet consequuntur aspernatur earum corrupti eum ea neque voluptas?</div>
        </el-collapse-item>
        <el-collapse-item v-if="teams" title="Комманды">
          <div class="team-item" v-for="team in teams" :key="team.name">
            <router-link class="team-name" :to="`../team-${team.id}/overview`">
              {{ team.name }}
            </router-link>
            <el-collapse class="collapse-teams">
              <el-collapse-item>
                <router-link v-for="item in projectsTeams.filter(i => i.team_id == team.id)" :key="item.team_id" :to="`/project-${item.project_id}/${projects.filter(j => j.id == item.project_id)[0].defaultView}`">
                  {{ projects.filter(j => j.id == item.project_id)[0].name }}
                </router-link>
              </el-collapse-item>
            </el-collapse>
          </div>
          <new-team-modal></new-team-modal>
        </el-collapse-item>
        <el-collapse-item title="Другие команды">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti molestiae harum aperiam sunt perferendis nam fugit explicabo animi impedit mollitia, eveniet consequuntur aspernatur earum corrupti eum ea neque voluptas?</div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import newTeamModal from '../components/modal/new-team'

export default {
  components: {
    newTeamModal
  },
  computed: {
    teams() { return this.$store.getters.teams },
    projects() { return this.$store.getters.projects },
    projectsTeams() { return this.$store.getters.projectsTeams }
  }
}
</script>


<style lang="scss">
  body {
    box-sizing: border-box;
  }
  .default-layout {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .el-main {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0;
      .main-panel {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: auto;
      }
      .top-bar {
        display: flex;
        align-items: center;
        padding: 0 30px;
        .top-bar-burger {
          margin-left: -6px;
          width: 34px;
          height: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          font-size: 20px;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background-color: rgba(21,27,38,.04);
          }
        }
      }
    }
    .team-item {
      position: relative;
      padding-left: 20px;
      [role="tab"] {
        position: absolute;
        left: 0;
        top: 0;
        .el-collapse-item__header {
          width: 20px!important;
          height: 20px!important;
          padding: 0!important;
        }
      }
      .el-collapse-item__content {
        padding: 0!important;
      }
    }
    .el-aside {
      color: #cbd4db;
      background-color: #151b26;
      transition: all .2s ease;
      a {
        color: #cbd4db;
      }
      .aside-burger {
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
      .aside-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0 25px;
        .logo {
          font-weight: 500;
          font-size: 20px;
        }
      }
      .aside-links {
        a {
          padding: 10px 25px;
          display: block;
          &:hover {
            background-color: rgba($color: #fff, $alpha: .08);
          }
          i {
            margin-right: 10px;
          }
        }
        a[aria-current="page"]{
          background-color: rgba($color: #fff, $alpha: .16);
        }
      }
      .el-collapse {
        border-bottom: none;
        border-top: none;
        button {
          color: #6f7782;
          &:hover {
            color: #9DA6AF;
          }
        }
        .el-collapse-item__header {
          padding: 0 10px 0 25px;
          background-color: transparent;
          color: #6f7782;
          border-bottom: 1px solid #273240;
          &:hover {
            color: #9DA6AF;
          }
        }
        .el-collapse-item__wrap {
          background-color: transparent;
          border-bottom: none;
        }
        .el-collapse-item__content {
          padding: 10px 15px 20px 25px;
          color: inherit;
        }
        .el-collapse-item__arrow {
          font-weight: 600;
        }
        .collapse-teams {
          margin-bottom: 20px;
          .el-collapse-item__header {
            padding: 0 5px;
            border-bottom: none;
            height: 30px;
            line-height: 30px;
          }
          .el-collapse-item__content {
            padding: 0 5px;
          }
        }
      }
    }
    .el-aside.collapse {
      margin-left: -240px;
    }
    .el-aside.collapse.show {
      margin-left: 0;
    }
    .el-link.el-link--default {
      color: #C4C4C4;
      text-transform: none;
      &:hover {
        color: #C4C4C4;
      }
    }
  }
</style>
