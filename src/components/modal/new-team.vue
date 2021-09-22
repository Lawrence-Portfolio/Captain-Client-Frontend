<template>
    <div class="modal-event">
        <button class="add-new-team" @click="modalState = true">Добавить команду</button>
        <el-dialog
            title="Создать новую команду"
            footer="Вы в этом уверены?"
            width="30%"
            :before-close="modalClose"
            :append-to-body="true"
            :visible.sync="modalState">
            <form>
                <div class="form-group">
                    <label class="form-label">Название комманды</label>
                    <el-input v-model="form.name"></el-input>
                </div>
                <div class="form-group">
                    <label class="form-label">Описание</label>
                    <el-input
                        v-model="form.description"
                        type="textarea"
                        :autosize="{ minRows: 4}">
                    </el-input>
                </div>
                <div class="form-group">
                    <label class="form-label">Члены команды</label>
                    <el-select
                        v-model="form.members"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="Введите email">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.name + ' | ' +  item.email"
                            :value="item.email">
                        </el-option>
                    </el-select> 
                </div>
                {{ this.form }}
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modalClose">Отмена</el-button>
                <el-button type="primary" @click="onAddNewTeam" :disabled="$v.form.$invalid">Создать</el-button>
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
            description: '',
            members: []
        },
        options: [
            {
                name: 'Artem',
                email: 'artem@mail.ru'
            },
            {
                name: 'Nick',
                email: 'nick@mail.ru'
            }
        ]
    }),
    validations: {
        form: {
           name: {
               required
           }
        }
    },
    methods: {
        modalClose() {
            this.$confirm('Вы в этом уверены?')
            .then(() => {
                this.modalState = false
            })
            .catch(() => {})
        },
        onAddNewTeam() {
            console.log(this.form)
            this.$store.dispatch('addNewTeam', this.form)

            this.clearForm()
            this.modalState = false
        },
        clearForm() {
            this.form.name = ''
            this.form.description = ''
            this.form.members = []
        }
    }
}
</script>