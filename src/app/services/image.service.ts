import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  myImages = [];

  constructor() { }

  getImages() {
    return this.myImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image=> image.imgID == id);
  }

}

const IMAGES = [
  { imgID: 1, title: "WP Website", imgPath: "assets/images/galleryFixed/01preview.gif", imgURI: "" },
  { imgID: 2, title: "WP Mobile App", imgPath: "assets/images/galleryFixed/02preview.png", imgURI: "" },
  { imgID: 3, title: "Excelando Website - Coming Soon", imgPath: "assets/images/galleryFixed/06preview.png", imgURI: "" },
  { imgID: 4, title: "Yes Binge Buzzfeed Game", imgPath: "assets/images/galleryFixed/05preview.png", imgURI: "" },
  { imgID: 5, title: "Volvo Landing Page", imgPath: "assets/images/galleryFixed/03preview.png", imgURI: "" },
  { imgID: 6, title: "Reshet x Elite Collaboration", imgPath: "assets/images/galleryFixed/04preview.gif", imgURI: "" },
];
