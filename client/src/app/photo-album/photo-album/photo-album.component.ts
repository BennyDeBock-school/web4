import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  title: string;
  description: string;
  images: File[];
  
  constructor() { 
    this.title = 'Osaka 2017';
    this.description = 'Trip to japan with friends in 2017'
    //this.images = [new File()]
  }

  ngOnInit(): void {
  }
}
