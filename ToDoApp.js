var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function (event) {
      // データバインディングで入力されたdata.newItemをオブジェクトの値とする
      var todo = {
        item: this.newItem
      };

      // 空の配列にオブジェクトtodo(keyがitem, valueがnewItem)を格納する
      this.todos.push(todo);
    }
  }
})