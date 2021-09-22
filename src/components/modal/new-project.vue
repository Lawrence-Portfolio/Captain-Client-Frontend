<template>
    <div>
        <div class="add-project project-card" @click="modalState = true">
            <div class="add-project-icon">
                <i class="fal fa-plus"></i>
            </div>
            <div class="project-name">Новый проект</div>
        </div>
        <el-dialog
            title="Создать новый проект"
            width="30%"
            footer="Вы в этом уверены?"
            :append-to-body="true"
            :before-close="modalClose"
            :visible.sync="modalState">
            <form>
                <div class="form-group">
                    <label class="form-label">Название проекта</label>
                    <el-input v-model="form.name"></el-input>
                </div>
                <div class="form-group">
                    <label class="form-label">Комманда</label>
                    <el-select v-model="form.team_id" placeholder="Select">
                        <el-option
                            v-for="team in teams"
                            :key="team.name"
                            :label="team.name"
                            :value="team.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="form-group">
                    <label for="">Страница по умолчанию</label>
                    <div>
                        <el-radio v-model="form.defaultView" label="list">List</el-radio>
                        <el-radio v-model="form.defaultView" label="board">Board</el-radio>
                        <el-radio v-model="form.defaultView" label="timeline">Timeline</el-radio>
                        <el-radio v-model="form.defaultView" label="calendar">Calendar</el-radio>
                    </div>
                </div>
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modalClose">Отмена</el-button>
                <el-button type="primary" @click="onAddNewProject" :disabled="$v.form.$invalid">Создать</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
    data: () => ({
        modalState: false,
        form: {
            name: '',
            team_id: null,
            defaultView: 'list'
        }
    }),
    validations: {
        form: {
           name: {
               required
           },
           team_id: {
               required
           }
        }
    },
    computed: {
        teams() { return this.$store.getters.teams }
    },
    methods: {
        modalClose() {
            this.$confirm('Вы в этом уверены?')
            .then(() => {
                this.modalState = false
            })
            .catch(() => {})
        },
        onAddNewProject() {
            this.$store.dispatch('addNewProject', this.form)

            this.clearForm()
            this.modalState = false
        },
        clearForm() {
            this.form.name = ''
            this.form.team_id = null
            this.form.defaultView = 'list'
        }
    },
    mounted() {
        this.form.team_id = this.teams[0].id
    }
}
</script>