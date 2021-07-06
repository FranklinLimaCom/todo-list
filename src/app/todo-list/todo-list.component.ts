import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todoList: string[] = [];
  doneList: string[] = []
  itemToAdd: string = ''

  addToList() {
    let filter = this.todoList.filter(task => task == this.itemToAdd)
    console.log(filter)
    if (filter.length == 0) {
      this.todoList.push(this.itemToAdd);
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

  constructor() { }

  ngOnInit(): void {
    console.log('test component mount')
  }

}
