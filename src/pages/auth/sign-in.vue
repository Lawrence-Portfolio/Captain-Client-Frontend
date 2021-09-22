<template>
    <el-container>
        <form class="auth-form" @submit.prevent="onSignIn">
            <div class="form-title">Login</div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <el-input v-model="form.email" type="email"></el-input>
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <el-input v-model="form.password" type="password"></el-input>
            </div>
            <el-button :disabled="$v.form.$invalid">Войти</el-button>
        </form>
    </el-container>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data: () => ({
        form: {
            email: '',
            password: ''
        }
    }),
    validations: {
        form: {
           email: {
               required,
               email
           },
           password: {
               required
           }
        }
    },
    methods: {
        async onSignIn() {
            await this.$store.dispatch('signIn', this.form)

            this.$router.replace({ name: 'home' })
        }
    }
}
</script>
