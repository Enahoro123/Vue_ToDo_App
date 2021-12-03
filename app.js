new Vue ({
    el: '#app',
    data: {
        todos: ['Visit Ron', 'Link up with Hermione', 'Find the Chambers of secretes'],
        list: '',
        line: false,
        show: false 
    },
    mounted() {
        this.getTodos();
      },
      watch: {
        todos: {
          handler: function(updatedList) {
            localStorage.setItem('todos', JSON.stringify(updatedList));
          }
        }
    },
    methods: {
        getTodos() {
            if (localStorage.getItem('todos')) {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            }
        },
        add: function() {
            this.todos.unshift(this.list),
            this.list = '';
        },
        deleteItem(item){
          this.todos.splice(this.todos.indexOf(item), 1);
        }
    }
});
