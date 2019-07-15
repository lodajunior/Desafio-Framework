import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private pathURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getTodo(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/todos/${id}`).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error)
      });
    });
  }

  getTodos() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/todos`).toPromise().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  updateTodo(id: any, object: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.put(`${this.pathURL}/post/${id}`, object).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    });
  }

  deleteTodo(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.pathURL}/todos/${id}`).toPromise().then(() => {
        resolve('Post Deleted');
      }).catch(error => {
        reject(error);
      });
    });
  }
}
