<template>
  	<div class="todo-footer" >
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> v-show="total" -->
			<input type="checkbox" v-model="isAll"/>
		<span>
            <span>已完成{{doneTotal}}</span> / 全部:{{total}}
			<!-- <span>已完成{{doneTotal}}</span> / 全部{{total}} -->
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </label>
	</div>
</template>

<script>
export default {
    name:'Footer',
    props:['todos','checkAllTodo','clearAllTodo'],
    methods:{
        clearAll(){
            if(confirm('确定删除吗？')){
            this.clearAllTodo()
            }
        }
    },
    computed:{
        total(){
            return this.todos.length;
        },
        doneTotal(){
            return  this.todos.reduce((pre,todo)=>pre + (todo.done?1:0),0)
        },
        isAll:{
            get(){
			return this.doneTotal === this.total && this.total > 0
			},
			//isAll被修改时set被调用
			set(value){
				this.checkAllTodo(value)
			}
        }
    }
}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
        position: relative;
		float: right;
		margin-top: 5px;
        margin-left: 280px;
	}
    
</style>