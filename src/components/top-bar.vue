<template>
    <div class="top-bar">
        <div class="top-bar-burger" v-if="!isShowAside" @click="$store.commit('onShowAside', true)">
            <i class="fal fa-bars"></i>
        </div>
        <div class="top-bar-panel">
            <div class="top-bar-info">
                <h1 class="top-bar-title">{{ title }}</h1>
            </div>
            <nav v-if="links" class="top-bar-nav">
                <ul>
                    <li v-for="link in links" :key="link.name">
                        <router-link class="top-bar-link" :to="link.url">{{ link.name }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        links: Array
    },
    computed: {
        isShowAside () { return this.$store.getters.isShowAside }
    }
}
</script>

<style lang="scss">
    .top-bar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #e8ecee;
        .top-bar-nav {
            ul {
                display: flex;
                padding: 0;
                margin: 0;
                list-style-type: none;
                li {
                    margin-right: 20px;
                }
            }
            .top-bar-link {
                color: #6f7782;
                display: block;
                padding-bottom: 5px;
            }
            .top-bar-link[aria-current="page"] {
                color: #ff24ff;
                box-shadow: inset 0 -2px #ff24ff;
            }
        }
        .top-bar-info {
            display: flex;
            align-items: center;
            flex: 1 1 auto;
        }
        .top-bar-panel {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .top-bar-title {
            color: #151b26;
        }
    }
</style>
