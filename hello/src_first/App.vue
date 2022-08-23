<template>
<div class="container">
  <!-- 在父组件模板的子组件标签上添加自定义属性 :listData  -->
    <Category title="美食" >
      
        <template v-slot:header>
          <img  src="./assets/logo.png" alt=""/>
          
          <!-- <ul>
            <li v-for="(item,index) in foods" :key="index">{{item}}</li>
        </ul> -->
        </template>
        <template #footer>
          <a href="www.baidu.com">百度</a>
        </template>
    </Category>
    <Category title="游戏" >
      <template #header>
        <ul>
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </template>
      <template #footer>
        <a href="www.baidu.com">最热游戏</a>
        <a href="www.baidu.com">最新游戏</a>
      </template>
        
    </Category>
    <Category title="电影" >
      <!-- <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"> </video> -->
        <template #header>
          <ul>
            <li v-for="(item,index) in films" :key="index">{{item}}</li>
          </ul>
        </template>
        <template #footer>
        <a href="www.baidu.com">最热电影</a>
        <a href="www.baidu.com">最新电影</a>
      </template>
        
    </Category>
</div>
  
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  data(){
    return{
      foods:['火锅','牛排','烧烤'],
      games:['王者','吃鸡','飞车'],
      films:['阿甘','红楼','西游']
    }
  },
  components: {
    Category
  }
}
</script>

<style >
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
    height:40%
  }
</style>
