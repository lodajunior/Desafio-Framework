import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  newPosts = [];
  searchPost: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  async getAllPosts() {
    try {
      const res = await this.postsService.getPosts();
      console.log('res: ', res);
      if (res) {
        this.posts = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async deletePost(id: any) {
    try {
      const res = await this.postsService.deletePost(id);
      console.log('res: ', res);
      if (res) {
        this.getAllPosts();
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  search() {
    this.posts = this.newPosts.filter(album => {
      if (album.title && album.title.toLowerCase().includes(this.searchPost.toLowerCase())) {
        return album;
      }
    });
  }
}
