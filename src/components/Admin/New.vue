

<template>
	<product-form
		@save-product='addProduct' 
		:model='model'
		:manufacturers='manufacturers'
		:isEditing=false
		:haserror=false
	>
	</product-form>
</template>

<script>
	import ProductForm from '@/components/Products/ProductForm'
	export default {
		name: 'new',
		components:{
			'product-form': ProductForm
		},
		computed:{
			manufacturers () {
				return this.$store.getters['p/allManufacturers']
			}
		},
		data () {
			return {
				model:{},
				haserror: false,
			}
		},
		methods:{
			addProduct: function(model){
				model._id=400
				console.log(model)
				this.$store.commit('p/addProduct', model)
			}
		}
	}
</script>

<style>
</style>