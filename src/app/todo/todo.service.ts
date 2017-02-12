import { Injectable } from '@angular/core';

let todos = [
  { id: 0, title: 'Install Angular CLI', isDone: true },
  { id: 1, title: 'Style app', isDone: true },
  { id: 2, title: 'Finish service functionality', isDone: false },
  { id: 3, title: 'Setup API', isDone: false },
];

@Injectable()
export class TodoService {

  constructor() { }

  get(query='') {
    return new Promise(resolve => {
      var data;

      if (query === 'completed' || query === 'active') {
        var isCompleted = query === 'completed';
        data = todos.filter(todo => todo.isDone === isCompleted);
      } else {
        data = todos;
      }

      resolve(data);
    });
  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo.id === data._id);
      todos[index].title = data.title;
      resolve(data);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo.id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      todos = todos.filter(todo => !todo.isDone);
      resolve(todos);
    });
  }

}
