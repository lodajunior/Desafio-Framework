import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getInformations();
  }

  async getInformations() {
    try {
      const res = await this.apiService.getPosts();
      console.log('res: ', res);
      if (res) {
        this.posts = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }
}
