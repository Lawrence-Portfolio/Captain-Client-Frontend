<template>
  <div class="auth-layout">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>
            <router-link to="/auth/sign-in">Войти</router-link>
          </li>
          <li>
            <router-link to="/auth/sign-up">Регестрация</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>

    </footer>
  </div>
</template>
<script>
</script>

<style lang="scss">
  .el-container {
    max-width: 1140px;
    margin: 0 auto;
  }
  nav {
    ul {
      display: flex;
      li {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  form {
    padding: 30px;
    min-width: 500px;
    margin: 0 auto;
    box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: .2);
  }
</style>

