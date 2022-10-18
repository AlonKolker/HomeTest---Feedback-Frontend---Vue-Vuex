<template>
    <form class="item-edit flex flex-column">
        <label>
            <span>Title: </span>
            <input type="text" v-model="itemToEdit.title">
        </label>
        <label>
            <span>Subtitle: </span>
            <input type="text" v-model="itemToEdit.subtitle">
        </label>
        <label>
            <span>Description: </span>
            <textarea cols="30" rows="10" v-model="itemToEdit.body"></textarea>
        </label>
        <div>
            <button @click.prevent="saveItem">Save</button>
            <button @click.prevent="clearFields">Clear</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'item-edit-form',
    props: { item: Object },
    data() {
        return { itemToEdit: null }
    },
    methods: {
        saveItem() { 
            this.$emit('saveItem', this.itemToEdit) 
            this.$router.push('/list')    
        },
        clearFields() {
            this.itemToEdit.title = ''
            this.itemToEdit.subtitle = ''
            this.itemToEdit.body = ''
        }
    },
    created() {
        this.itemToEdit = JSON.parse(JSON.stringify(this.item))
    },
    emits: ['saveItem']
}
</script>

