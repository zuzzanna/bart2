import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  displayBasic:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  show_img_bacground(parent: any) {
    let path = parent.getElementsByTagName("img")[0].getAttribute("src");
    let header = <HTMLInputElement>document.getElementById("header")
    header.style.background = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('" + path + "') repeat scroll 70% 60%";
    header.classList.add("bg_image")
  }

  hide_img_bacground() {
    let header = <HTMLInputElement>document.getElementById("header")
    header.style.background = "darkgray";
    header.classList.remove("bg_image");
  }
}
