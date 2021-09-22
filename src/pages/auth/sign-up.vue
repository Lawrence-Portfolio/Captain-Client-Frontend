<template>
    <el-container>
        <form class="auth-form" @submit.prevent="onSignUp">
            <div class="form-title">Register</div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <el-input v-model="form.email" type="email"></el-input>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <el-input v-model="form.password" type="password"></el-input>
            </div>
            <div class="form-group">
                <label class="form-label">Confirm Password</label>
                <el-input v-model="form.confirmPassword" type="password"></el-input>
            </div>
            <el-button :disabled="$v.form.$invalid">Зарегестрироваться</el-button>
        </form>
    </el-container>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
    data: () => ({
        valid: false,
        form: {
            email: '',
            password: '',
            confirmPassword: ''
        },
    }),
    validations: {
        form: {
           email: {
               required,
               email
           },
           password: {
               required
           },
           confirmPassword: {
                sameAsPassword: sameAs('password')
            }
        }
    },
    methods: {
        onSignUp() {

        }
    }
}
</script>