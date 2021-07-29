import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Item {
  title: String
  description: String
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent implements OnInit {


  item: Item = { title: '', description: '' }

  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.item = params['item'];
    });
  }

}
