import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [

  { 'id' : 1,
    'category': 'arts',
    'caption': 'creation',
    'url' : 'assets/img/IMG_4935.JPG'
  },
  { 'id' : 2,
    'category': 'food',
    'caption': 'View from LA 2014',
    'url' : 'assets/img/IMG_4936.JPG'
  },
  { 'id' : 3,
    'category': 'arts',
    'caption': 'creation',
    'url' : 'assets/img/IMG_4935.JPG'
  },
  { 'id' : 4,
    'category': 'food',
    'caption': 'View from LA 2014',
    'url' : 'assets/img/IMG_4936.JPG'
  },
  { 'id' : 5,
    'category': 'arts',
    'caption': 'creation',
    'url' : 'assets/img/IMG_4935.JPG'
  },
  { 'id' : 6,
    'category': 'food',
    'caption': 'View from LA 2014',
    'url' : 'assets/img/IMG_4936.JPG'
  }

];
