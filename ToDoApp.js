var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function (event) {
      // 入力欄が空の場合は処理を終了する
      if (this.newItem == "") return;

      // データバインディングで入力されたdata.newItemをオブジェクトの値とする
      var todo = {
        item: this.newItem,
        isDone: false
      };

      // 空の配列todosにオブジェクトtodo(keyがitem, valueがnewItem)を格納する
      this.todos.push(todo);

      // 入力欄をクリアする処理
      this.newItem = "";
    },

    // タスクの削除機能
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    }
  }
})