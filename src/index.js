import './styles.css';
// import { saludar } from './js/componentes';
import { Todo } from '../src/classes/todo.class'
import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );

