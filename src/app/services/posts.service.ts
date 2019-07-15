import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private pathURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPost(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/posts/${id}`).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error)
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

  updatePost(id: any, object: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.put(`${this.pathURL}/post/${id}`, object).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    });
  }

  deletePost(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.pathURL}/posts/${id}`).toPromise().then(() => {
        resolve('Post Deleted');
      }).catch(error => {
        reject(error);
      });
    });
  }
}
