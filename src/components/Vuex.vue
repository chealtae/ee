<template>
	<div>
		<counter></counter>
	</div>
</template>

<script>
import Counter from './Counter'
	
	export default {
		name: 'Vuex',
		components:{
			'counter': Counter
		},
		data () {
			return {}
		}
	}
</script>

<style>
</style>