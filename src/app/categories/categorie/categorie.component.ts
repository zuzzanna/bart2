import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  images: any [];
  displayCustom: boolean;
  activeIndex: number = 0;
  displayBasic: boolean = false;
  name: string = '';

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
    this.displayCustom = false;
    this.images = this.createGallery()

  }

  imageClick(index: number) {
    this.displayCustom = true;
    this.activeIndex = index;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.header_background()
    console.log(window.location.pathname)
  }

  createGallery() {
    let architecture = [
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-261187.jpeg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-261187.jpeg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-261146.jpeg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-261146.jpeg",
        "alt": "Description for Image 2",
        "title": "Title 2"
      },
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-24464.jpg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-24464.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
      },
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-323780.jpeg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-323780.jpeg",
        "alt": "Description for Image 4",
        "title": "Title 4"
      },
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-221506.jpeg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-221506.jpeg",
        "alt": "Description for Image 5",
        "title": "Title 5"
      },
      {
        "previewImageSrc": "./assets/images/images/pexels-photo-186077.jpeg",
        "thumbnailImageSrc": "./assets/images/images/pexels-photo-186077.jpeg",
        "alt": "Description for Image 6",
        "title": "Title 6"
      }
    ]
    let cars = [{
      "previewImageSrc": "./assets/images/images/pexels-photo-210019.jpeg",
      "thumbnailImageSrc": "./assets/images/images/pexels-photo-210019.jpeg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    }]
    let food = [{
      "previewImageSrc": "./assets/images/images/food-salad-healthy-lunch.jpg",
      "thumbnailImageSrc": "./assets/images/images/food-salad-healthy-lunch.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    }]
    let people = [{
      "previewImageSrc": "./assets/images/images/pexels-photo-27411.jpg",
      "thumbnailImageSrc": "./assets/images/images/pexels-photo-27411.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    }]
    let nature = [{
      "previewImageSrc": "./assets/images/images/landscape-meadow-field-mountains-66874.jpeg",
      "thumbnailImageSrc": "./assets/images/images/landscape-meadow-field-mountains-66874.jpeg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    }]
    if (window.location.pathname == '/architektura') {
      this.name = 'architektúra'
      return architecture
    }
    if (window.location.pathname == '/auta') {
      this.name = 'autá'
      return cars
    }
    if (window.location.pathname == '/ludia') {
      this.name = 'ľudia'
      return people
    }
    if (window.location.pathname == '/jedlo') {
      this.name = 'Jedlo'
      return food
    }
    if (window.location.pathname == '/priroda') {
      this.name = 'príroda'
      return nature
    }
    return []
  }

  header_background() {
    let header = <HTMLInputElement>document.getElementById("header")
    let first_image_path = document.getElementsByClassName("categorie_gallery")[0]
      .children[0]
      .children[0].getAttribute("src")

    header.style.background = "linear-gradient(rgba(0, 0, 0, 0.2), " + "rgba(0, 0, 0, 0.2)), url('" + first_image_path + "') repeat scroll 70% 60%";
  }

}
