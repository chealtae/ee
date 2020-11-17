<template>
	<form class="form-horizontal" @submit.prevent="doAction">
		
			<div class="form-group">
				<label class="control-label col-md-2">产品的名称：</label>
				<div class="col-md-10">
				<input type="text" class="form-control" v-model="model.name" name="name" required>
				<span class="text-danger" v-show='haserror'>需要填写产品名称</span>
				</div>
			</div>
		
			<div class="form-group">
				<label class="control-label col-md-2" >产品的价格：</label>
				<div class="col-md-10">
				<input type="text" class="form-control" v-model="model.price" name="price" required>
				<span class="text-danger" v-show='haserror'>需要填写产品价格</span>
				</div>
			</div>
		
			<div class="form-group">
				<label class="control-label col-md-2">产品的生产商：</label>
				<div  class="col-md-10">
				<select
					type="text"
					class="form-control"
					v-model="model.manufacturer"
					required
					name="manufacturer">
					<template v-for="manufacturer in manufacturers">
						<option :value="manufacturer.id" :key="manufacturer.id">{{manufacturer.name}}</option>
					</template>
				</select>
				<span class="text-danger" v-show='haserror'>需要选择生产商</span>
				</div>
			</div>
		
			<div class="form-group">
				<label class="control-label col-md-2">产品的图片：</label>
				<div class="col-md-10">
				<input type="text" class="form-control" v-model="model.image" name="image" required>
				<span class="text-danger" v-show='haserror'>需要填写产品价格</span>
				</div>
			</div>
		
			<div class="form-group">
				<label class="control-label col-md-2">产品的描述：</label>
				<div class="col-md-10">
				<textarea rows="5" type="text" class="form-control" v-model="model.description" name="description" required>
				</textarea>
				<span class="text-danger" v-show='haserror'>需要填写产品描述</span>
				</div>
			</div>
		
			<div class="form-group">
				<div class="col-md-offset-2 col-md-10">
				<button class="btn-primary" v-show="!isEditing" >添加产品</button>
				<button class="btn-primary" v-show="isEditing">更新产品</button>
				</div>
			</div>
		
	</form>
</template>

<script>
	export default {
		name: 'ProductForm',
		props: ['model', 'isEditing', 'manufacturers', 'haserror'],
		methods:{
			saveProduct: function(){
				this.$emit('save-product', this.model)
			},
			updateProduct: function(){
				this.$emit('update-product', this.model)
			},
			doAction:function(){
				if(this.isEditing){
					console.log('------editing--------')
					this.updateProduct()
				}else{
					console.log('------saving--------')
					this.saveProduct()
				}
			}
		}
	}
</script>

<style>
</style>