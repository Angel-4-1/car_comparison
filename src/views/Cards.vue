<template>
    <div>
        <div v-bind:class="[isDark ? darkClass : lightClass, alwaysClass]">
        <b-container>
            <form class="pt-4">
                <b-row class="float-right">
                    <b-form-checkbox v-model="isDark" name="check-button" switch> 
                        <h6>{{ lightOrDark }} theme</h6>
                    </b-form-checkbox>
                </b-row>
                <br/><h5>Selecciona una marca:</h5>
                <b-row>
                    <!--BRAND SELECTION-->
                    <b-col>
                        <b-form-select 
                            v-model="brand_selected" :options="brands"></b-form-select>
                    </b-col>
                </b-row>
                <br/><h5>Selecciona un precio máximo:</h5>
                <b-row>
                    <!--INPUT WITH RANGE-->
                    <b-col >
                        <b-form-input type="range" v-model="max_price" min="1000" max="70000" step="1000"></b-form-input>
                        <h6>Máximo: {{ max_price }} €</h6>
                    </b-col>
                </b-row>
            </form>
        </b-container>

        <br/>
        <h1 class="title">&#128663; Consulta los modelos &#128663;</h1>
        <br/>

        <b-container v-for="(car, index) in cars" :key="index">
            <div v-if="brand_selected == null || car.brand == brand_selected">
                <h1 class="hover-mouse" @click="openInNewTab(car.link)">{{ car.brand }}</h1>
                <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div class="col mb-4" v-for="(model, model_index) in car.models" :key="model_index">
                        <b-card 
                            v-bind:class="[isDark ? darkCardClass : lightCardClass]"
                            v-if="comparePrice(model.price)"
                            :title="computeTitle(model.name)"
                            :img-src="computeImage(model.icon)"
                            img-top
                        >
                            <!--
                            <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente.
                            </b-card-text>
                            -->

                            <b-card-text class="price">
                                {{ model.price }} €
                            </b-card-text>

                            <div class="text-center">
                                <b-button variant="primary" @click="openInNewTab(model.link)">Más información</b-button>
                            </div>
                        </b-card>
                    </div>
                </div>
                <div v-if="index != cars.length - 1">
                    <hr/>
                </div>
            </div>
        </b-container>
        
        <div class="fluid-container footer">
            <p class="text-center">Data from 2021</p>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",
};
</script>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { STAGES as stages_constants, CARS } from "@/consts.js";

export default {
    name: "Cards",
    data() {
        return {
            isDark: false,
            darkClass: "darkMode",
            lightClass: "lightMode",
            alwaysClass: "alwaysMode",
            lightOrDark: "Light",
            darkCardClass: "darkCardClass",
            lightCardClass: "lightCardClass",
            change_state: false,
            my_stages: stages_constants, //copiar los STAGES en variable local
            cars: CARS,
            brands: [
                { text: "Todas"  , value: null },
                { text: "Seat"   , value: "Seat" },
                { text: "Dacia"  , value: "Dacia" },
                { text: "Kia"    , value: "Kia" },
                { text: "Citroen", value: "Citroen" },
                { text: "Ford"   , value: "Ford" },
                { text: "Renault", value: "Renault" },
                { text: "Fiat"   , value: "Fiat" },
                { text: "Peugeot", value: "Peugeot" }
            ],
            brand_selected: null,
            max_price: 40000
        };
    },
    computed: {
        ...mapState(["stage", "current_stage"])
        
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
        computeTitle( title ) {
            return title;
        },
        computeImage( img ) {
            return img;
        },
        comparePrice( price ) {
            var p = parseFloat( price );
            var max = parseFloat( this.max_price );
            return ( p <= max );
        },
        openInNewTab(url) {
            window.open(url, '_blank').focus();
        }
    },
    watch: {
        isDark: function() {
            this.lightOrDark = this.isDark ? "Dark" : "Light";
        }
    }
};
</script>

<style scoped>
.title {
    text-align: center;
}

.price {
    text-align: center;
    font-weight: bold;
}

.alwaysMode {
    transition: .7s;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

.hover-mouse:hover {
    cursor: pointer;
}

.darkMode {
    background: rgb(62, 62, 63);
}

.darkMode h1, .darkMode h2, .darkMode h3, .darkMode h4, .darkMode h5, .darkMode h6, .darkMode p {
    color: rgb(213, 213, 221);
}

.darkMode hr {
    border: 1px solid rgb(247, 244, 239);
    background-color: rgb(247, 244, 239);
    margin-top: -5px;
}

.darkCardClass {
    background: rgb(35, 35, 36);
    border: 2px solid white;
}

.lightMode {
    background: rgb(240, 234, 230);
}

.lightMode h1, .lightMode h2, .lightMode h3, .lightMode h4, .lightMode h5, .lightMode h6, .lightMode p {
    color: rgb(0, 0, 0);
}

.lightMode hr {
    border: 1px solid black;
    background-color: black;
    margin-top: -5px;
}

.lightCardClass {
    border: 2px solid rgb(235, 221, 197);
}

.lightCardClass:hover {
    transition: 0.7s;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 2px solid #9ec1ee;
    background-color: rgb(176, 232, 236);
}

.darkCardClass:hover {
    transition: 0.7s;
    box-shadow: 0px 4px 8px rgba(228, 220, 220, 0.3);
    top: -4px;
    border: 2px solid #9ec1ee;
    background-color: rgb(52, 103, 107);
}

.fluid-container.footer{
    background: #bebaba;
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #424040;
}
</style>
