
//封装一个模块 ，本地缓存的模块


let storage = {
  set (key,value) {  // 设置localStorage
    localStorage.setItem(key,JSON.stringify(value));
  },
  get (key) {  // 获取 localStorage
    return JSON.parse(localStorage.getItem(key));
  },
  remove (key) {  // 删除 localStorage
    localStorage.removeItem(key);
  },
  clear () {  // 清除
    localStorage.clear();
  }
};

export default storage;
