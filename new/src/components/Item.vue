<template>
  <li>
    <label>
        <input type="checkbox" :checked="todo.done" @change="handelCheck(todo.id)"/>
        <span>{{todo.title}}</span>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </label>
    
  </li>
</template>

<script>
export default {
    name:'Item',
    props:['todo','checkTodo','deleteTodo'],
    methods:{
        handelCheck(id){
            this.checkTodo(id)
        },
        //删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					this.deleteTodo(id)
				}
			}
    }
}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li  label button {
		float: right;
		display: none;
		margin-top: 3px;
        margin-left: 400px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>