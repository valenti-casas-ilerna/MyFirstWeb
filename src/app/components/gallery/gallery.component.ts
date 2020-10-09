import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  category: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category: string): void {
    this.category = category;
  }

}
