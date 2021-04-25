import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { SharedModule } from '../shared/shared-module.module';



@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PhotoAlbumComponent,
  ]
})
export class PhotoAlbumModule { }
