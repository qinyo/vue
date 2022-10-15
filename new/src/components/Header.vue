<template>
  <div>
    <input type="text" placeholder="输入任务" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Header',
    props:['addTodo'],
    data(){
        return{
            title:''
        }
    },
    methods:{
        add(){
            //清空输入
            if(!this.title.trim()) return alert('输入不能为空')
				//将用户的输入包装成一个todo对象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				//通知App组件去添加一个todo对象
				this.addTodo(todoObj)
				this.title = ''
        }
    }
}
</script>

<style>

</style>