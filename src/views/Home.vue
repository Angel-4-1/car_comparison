<template>
    <div class="panel">
        <div class="menu">
            <div class="logo">
                <img alt="logo" src="../assets/car-icon.png" />
            </div>
            <div class="start-button">
                <b-button class="start" variant="success" @click="changeState(true)">Comparar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { STAGES as stages_constants } from '@/consts.js';

export default {
    name: "Home",
    data() {
        return {
            change_state: false,
            my_stages: stages_constants, //copiar los STAGES en variable local
        };
    },
    computed: {
        ...mapState(["stage", "current_stage"]),
    },
    methods: {
        changeState(isNext) {
            // isNext == false --> previous stage | true --> next stage
            let target = 0;
            let isValid = false;
            if (isNext) {
                target = this.current_stage.id + 1;
                if (target <= this.my_stages.CARD_STAGE) {
                    isValid = true;
                }
            } else {
                target = this.current_stage.id - 1;
                if (target >= this.my_stages.INTRO_STAGE) {
                    isValid = true;
                }
            }
            if (isValid) {
                this.$store.commit("changeState", {
                    index: this.current_stage.id,
                    destination: target,
                });
            }
        },
    },
};
</script>

<style scoped>
.panel {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgb(95, 91, 175) 0%, rgb(65, 157, 180) 35%, rgb(116, 201, 214) 100%);
    position: absolute;
}
.menu {
    position: relative;
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-rows: 58% 38%;
    grid-row-gap: 4%;
    grid-template-areas: "logo"
                        "start";
    justify-content: center;
}

.logo {
    grid-area: "logo";
}

.logo img {
    position: relative;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.start-button {
    grid-area: "start";
}

.start {
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>