import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {
  albums = [];
  newAlbums = [];
  searchAlbum: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getInformations();
  }

  async getInformations() {
    try {
      const res = await this.apiService.getAlbuns();
      console.log('res: ', res);
      if (res) {
        this.albums = res;
        this.newAlbums = res;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  filter() {
    console.log('filtro: ', this.searchAlbum);
    this.newAlbums = this.albums.filter(album => {
      if (album.title && album.title.toLowerCase().includes(this.searchAlbum.toLowerCase())) {
        return album;
      }
    });
  }
}
