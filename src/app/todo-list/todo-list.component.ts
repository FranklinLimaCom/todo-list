import { Component, OnInit } from '@angular/core';

interface Item {
  title: String
  description: String
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoList: Array<any> = [];
  doneList: Array<any> = []
  itemToAdd: Item = { title: '', description: '' }

  addToList() {
    let filter = this.todoList.filter(task => task.title == this.itemToAdd.title)
    console.log(filter)
    if (filter.length == 0) {
      this.todoList.push(JSON.parse(JSON.stringify(this.itemToAdd)));
    } else {
      alert('This task is already in the list')
    }
  }

  doItem(index: number) {
    this.doneList.push(this.todoList[index])
    this.todoList.splice(index, 1)
  }

  undoItem(index: number) {
    this.todoList.push(this.doneList[index])
    this.doneList.splice(index, 1)
  }

  removeFromTodo(index: number) {
    this.todoList.splice(index, 1)
  }

  removeFromDone(index: number) {
    this.doneList.splice(index, 1)
  }

  constructor() { }

  ngOnInit(): void {
    console.log('test component mount')
  }

}
