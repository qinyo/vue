<template>
	<div class="app">

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<!-- <School :getSchoolName="getSchoolName"/> -->
		<Count></Count>
	</div>
</template>

<script>
import School from './components/School'
import Count from './components/Count.vue';
export default {
  name:'App',
		components:{ School, Count },
		data() {
			return {
				msg:'你好啊！'
			}
		},
	
    methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
		},
		
}
</script>

<style>

</style>
