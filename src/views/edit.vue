<template>
    <main class="edit-item main-layout full">
        <section class="edit-item__inner" v-if="item">
            <back-btn>Go Back</back-btn>
            <h2 class="edit-item-header">{{ editType }}</h2>
            <item-edit-form :item="item" v-if="item" @saveItem="saveItem" />
        </section>
    </main>
</template>

<script>
import { showErrorMsg } from '../services/event-bus.service'
import { itemService } from '../services/item.service'
import { utilService } from '../services/util.service'
import itemEditForm from '../cmps/item-edit-form.vue'
import backBtn from '../cmps/back-btn.vue'

export default {
    name: '',
    data() {
        return {
            item: null
        }
    },
    methods: {
        saveItem(item) {
            const itemToSave = JSON.parse(JSON.stringify(item))
            this.$store.dispatch({ type: 'saveItem', item: itemToSave })
        }
    },
    computed: {
        editType() {
            return (this.item._id) ? 'Edit' : 'Add new'
        }
    },
    async created() {
        const { id } = this.$route.params
        try { this.item = await itemService.getById(id) }
        catch (err) { showErrorMsg('Item not found') }

        if (!this.item) this.item = utilService.getEmptyItem()
    },
    components: { itemEditForm, backBtn },
}
</script>

<style>
</style>