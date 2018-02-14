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

  getImagesGlobal(){
    return this.myImages = IMAGES_GLOBAL.slice(0);
  }

  getImageGlobal(id: number) {
    return IMAGES.slice(0).find(image=> image.imgID == id);
  }

  getImagesProject() {
    return this.myImages = IMAGES_PROJECT.slice(0);
  }

  getImageProject(id: number, scale: string) {
    return IMAGES_PROJECT.slice(0).find(image => image.imgID == id && image.scale == scale);
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

const IMAGES_GLOBAL = [
  { imgID: 1, imgPath: "assets/images/hamburger-menu.png", imgURI: "" }
];


const IMAGES_PROJECT = [
  { imgID: 1, scale: "desktop", title: "WP Website", imgPath: "assets/images/projects/womenpalace-full-screen-mu1_DESKTOP.png", imgURI: "" },
  { imgID: 1, scale: "tablet", title: "WP Website", imgPath: "assets/images/projects/womenpalace-full-screen-mu1_TABLET.png", imgURI: "" },
  { imgID: 1, scale: "mobile", title: "WP Website", imgPath: "assets/images/projects/womenpalace-full-screen-mu1_MOBILE.png", imgURI: "" }
];