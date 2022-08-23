<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- <ul>
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul> -->
        <!-- 默认插槽 -->
        <slot name="header">默认header</slot>
        
        <slot name="footer">默认footer</slot>
    </div>
</template>


<script>
    export default{
        name: 'Category',
        // 在定义子组件内通过props传值 'listData'
        props:['title','']
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height:300px;
    }
</style>    



