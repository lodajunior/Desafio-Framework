import { Component, OnInit, ViewChild } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
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
  newTodos = [];
  searchTodo: any

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.getAllTodos();
  }

  async getAllTodos() {
    try {
      const res = await this.todosService.getTodos();
      console.log('res: ', res);
      if (res) {
        this.todos = res;
        this.newTodos = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async deleteTodo(id: any) {
    try {
      const res = await this.todosService.deleteTodo(id);
      console.log('res: ', res);
      if (res) {
        this.getAllTodos();
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  search() {
    this.todos = this.newTodos.filter(album => {
      if (album.title && album.title.toLowerCase().includes(this.searchTodo.toLowerCase())) {
        return album;
      }
    });
  }

  filtro() {

  }
}
