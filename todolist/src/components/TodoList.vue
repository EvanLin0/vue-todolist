<template>
  <div class="todolist-container">
                                  <!--enter 按键修饰符，-->
    <input type="text" v-model="todo" @keydown.enter="doKeyAdd()">
    <button @click="doAdd" >+增加</button>
    <br>
    <hr>
    <h2>正在进行中</h2>
    <ul class="content-list">
      <li v-for="(item,index) in list" :key="index" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked"  @change="saveChecked" >
        {{item.content}}
      </li>
    </ul>
    <br>
    <hr>
    <h2>已完成</h2>
    <ul class="content-list">
      <li v-for="(item,index) in list" :key="index" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveChecked">
        {{item.content}}
        <button @click="removeData(item,index)">-删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import utils from '../model/utils'; // 引入模块 localstorage
export default {
  name: 'TodoList',
  data () {
    return {
      todo:'',
      list:[]
    }
  },
  mounted () { // dom挂载后 的初始数据
    let list = utils.get('list');
    if (list) {
      this.list = utils.get('list');
    }
  },
  methods:{
    // 点击添加进行添加的时候
    doAdd () {
      // 获取文本框输入的值
      this.list.push({
        content:this.todo,
        checked:false
      });
      utils.set('list',this.list);//本地化存储
      this.todo='';
    },
    // 按回车键进行添加的时候
    doKeyAdd () {
      if (this.todo !='') {
        this.list.push({
          content:this.todo,
          checked:false
        });
        utils.set('list',this.list);
        this.todo='';
      }
    },
    removeData (val,idx) {
      this.list.splice(idx,1);
      utils.set('list',this.list); // 重新保存 list
    },
    // 选中事件
    saveChecked () {
      utils.set('list',this.list);// 重新保存下 list
    }
  }
}
</script>

<style scoped>
.content-list {
  list-style:none;
}
</style>
