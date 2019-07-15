import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private pathURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbum(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/albums/${id}`).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error)
      });
    });
  }

  getAbums() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.pathURL}/albums`).toPromise().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  updateAlbum(id: any, object: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.put(`${this.pathURL}/albums/${id}`, object).toPromise().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    });
  }

  deleteAlbum(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.pathURL}/albums/${id}`).toPromise().then(() => {
        resolve('Post Deleted');
      }).catch(error => {
        reject(error);
      });
    });
  }
}
