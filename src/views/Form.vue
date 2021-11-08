<template>
    <div class="mt-5">
        <h1 style="text-align: center">Formulario</h1>

        <form>
            <b-row>
                <!--RATING TEXT-->
                <b-col cols="12" md="6">
                    <p>Type text</p>
                    <b-form-input type="text" v-model="texto" :state="comprobarTexto"></b-form-input>
                    <small>At least 3 characters</small>
                    <p>Text: {{ texto }}</p>
                </b-col>

                <!--INPUT NUMBER-->
                <b-col cols="12" md="6">
                    <p>Type number</p>
                    <b-form-input type="number" v-model="numero" :state="comprobarNumero"></b-form-input>
                    <small>Insert a positive number</small>
                    <p>Number: {{ numero }}</p>
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <!--INPUT DATE-->
                <b-col cols="12" md="6">
                    <p>Type Date</p>
                    <b-form-input type="date" v-model="date"></b-form-input>
                    <p>Date: {{ date }}</p>
                </b-col>

                <!--INPUT WITH RANGE-->
                <b-col cols="12" md="6">
                    <p>Type number</p>
                    <b-form-input type="range" v-model="value" min="0" max="10"></b-form-input>
                    <p>Value: {{ value }}</p>
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <!--SELECTION-->
                <b-col cols="12" md="6">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <p>Selected: {{ select }}</p>
                </b-col>

                <!--RADIO-->
                <b-col cols="12" md="6">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Radio: {{ radio }}</p>
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <!--MULTIPLE CHECKBOX-->
                <b-col cols="12" md="6">
                    <b-form-checkbox-group v-model="checkbox" :options="animalesRadio"></b-form-checkbox-group>
                    <p>Selected: {{ checkbox }}</p>
                </b-col>

                <!--RATING WITH STARS-->
                <b-col cols="12" md="6">
                    <b-form-rating v-model="rating" show-clear show-value stars="5"></b-form-rating>
                    <p>Rating: {{ rating }}</p>
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <!--SINGLE CHECKBOX-->
                <b-col cols="12" md="6">
                    <b-form-checkbox v-model="singlecheckbox" value="accepted" unchecked-value="not_accepted">I accept the terms and use</b-form-checkbox>
                    <p>Sate: {{ singlecheckbox }}</p>
                </b-col>

                <!--FILE INPUT-->
                <b-col cols="12" md="6">
                    <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
                    <p>Selected file: {{ file1 ? file1.name : '' }}</p>
                </b-col>
            </b-row>
            
        </form>
        
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            numero: '',
            date: null,
            value: 0,
            select: null,
            animales: [
                { value: null, text: 'Seleccione un animal' },
                { value: 'Perro', text: 'Guau guau' },
                { value: 'Gato', text: 'Miau' },
                { value: 'Pato', text: 'Cuack' }
            ],
            radio: null,
            animalesRadio: [
                { value: 'Perro', text: 'Guau guau' },
                { value: 'Gato', text: 'Miau' },
                { value: 'Pato', text: 'Cuack' }
            ],
            checkbox: [],
            numberstars: 10,
            rating: null,
            singlecheckbox: 'not_accepted',
            file1: null
        }
    },
    computed: {
        comprobarTexto() {
            return this.texto.length <= 2 ? false : true
        },
        comprobarNumero() {
            return this.numero <= 0 ? false : true
        }
    },
    methods: {
        getNumberOfStars() {
            return this.numberstars;
        }
    }
}
</script>