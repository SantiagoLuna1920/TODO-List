import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo ( todo ) {
        this.todos.push( todo );
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    eliminarTodo ( id ) {
        this.todos = this.todos.filter( todos => todos.id != id );
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    marcarCompletado ( id ) {

        for ( const todo of this.todos ) {
            console.log( id, todo.id );
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                localStorage.setItem("todo", JSON.stringify(this.todos));
                break;
            }
        }


    }

    eliminarCompletados (  ) {
        this.todos = this.todos.filter( todos => !todos.completado );
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    guardarLocalStorages ( ) {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    cargarLocalStorage ( ) {
        // if ( localStorage.getItem("todo") ) {
        //     this.todos = JSON.parse(localStorage.getItem("todo"));

        //     console.log( this.todos );
        // } else {
        //     this.todos = [];
        // }

        ( localStorage.getItem("todo") ) ? this.todos = JSON.parse(localStorage.getItem("todo")) : this.todos = [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) )

    }

}