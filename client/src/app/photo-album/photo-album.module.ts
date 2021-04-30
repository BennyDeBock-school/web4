import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { SharedModule } from '../shared/shared-module.module';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [PhotoAlbumComponent, MapComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PhotoAlbumComponent,
    MapComponent
  ]
})
export class PhotoAlbumModule { }
