import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {
  albums = [];
  newAlbums = [];
  searchAlbum: any;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAllAlbums();
  }

  async getAllAlbums() {
    try {
      const res = await this.albumsService.getAbums();
      console.log('res: ', res);
      if (res) {
        this.albums = res;
        this.newAlbums = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async deleteAlbum(id: any) {
    try {
      const res = await this.albumsService.deleteAlbum(id);
      console.log('res: ', res);
      if (res) {
        this.getAllAlbums();
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  search() {
    this.albums = this.newAlbums.filter(album => {
      if (album.title && album.title.toLowerCase().includes(this.searchAlbum.toLowerCase())) {
        return album;
      }
    });
  }
}
