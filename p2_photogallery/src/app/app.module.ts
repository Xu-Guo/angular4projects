import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule} from 'ng2-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-list/image-detail/image-detail.component';
import { ImageService } from "./shared/image.service";
import { ImageFilterPipe } from './shared/filter.pipe';
import { appRoutes } from '../routes';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageListComponent,
    ImageFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImageService,
    ImageFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
