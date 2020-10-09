import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  category: string = 'All';
  smalPhotos: string[] = ['https://picsum.photos/300/200', 'https://picsum.photos/300/200', 'https://picsum.photos/300/200', 'https://picsum.photos/300/200'];

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category: string): void {
    this.category = category;
  }

}
