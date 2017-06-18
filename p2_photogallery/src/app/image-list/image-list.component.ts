import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ImageService} from "../shared/image.service";
import { ImageFilterPipe } from "../shared/filter.pipe";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnChanges {

  visibleImages: any[] = [];

  @Input() filterBy : string = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages = imageService.getImages();
  }


  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

}
