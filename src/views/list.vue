<template>
    <section class="list-page main-layout full">
        <section class="list-page__inner">
            <h2 class="list-title">Items List</h2>
            <button @click="$router.push('/edit/')">Add New</button>
            <ul class="list-wrapper clean-list" v-if="items">
                <li v-for="item in items" :key="item.id">
                    <item-preview :item="item" @crudReq="doCrud" />
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
import { showErrorMsg } from '../services/event-bus.service'
import itemPreview from '../cmps/feedback-preview.vue'
export default {
    name: '',
    computed: {
        items() { return this.$store.getters.items }
    },
    methods: {
        async doCrud({ type, itemId }) {
            try { await this.$store.dispatch({ type, itemId }) }
            catch (err) { showErrorMsg('Ooops, something went wrong') }
        }
    },
    components: { itemPreview },
}
</script>
