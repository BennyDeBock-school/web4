import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [FileUploadComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    FileUploadComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
