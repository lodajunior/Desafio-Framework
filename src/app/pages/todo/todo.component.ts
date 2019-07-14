import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

class TodoElements {
  id: number;
  title: string;
  uuserId: number;
  completed: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [];
  newTodos = []

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getInformations();
  }

  async getInformations() {
    try {
      const res = await this.apiService.getToDo();
      console.log('res: ', res);
      if (res) {
        this.todos = res;
        this.newTodos = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  search() {

  }

  filtro() {

  }
}
