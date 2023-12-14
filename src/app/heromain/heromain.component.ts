import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heromain',
  templateUrl: 'heromain.component.html',
  styleUrls: ['heromain.component.css']
})
export class HeromainComponent implements OnInit {

  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/imgs/heroelectric.png',
    };
    this.slides[1] = {
      src: 'assets/imgs/hugohero.png',
    }
    this.slides[2] = {
      src: 'assets/img/tableros1.jpg',
    }
    this.slides[3] = {
      src: 'assets/img/tableros2.png',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
