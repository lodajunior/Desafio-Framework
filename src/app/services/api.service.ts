import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private pathURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getToDo() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/todos`).toPromise().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getPosts() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/posts`).toPromise().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getAlbuns() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/albums`).toPromise().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
}
