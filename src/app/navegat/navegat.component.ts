import { Component } from '@angular/core';


@Component({
  selector: 'app-navegat',
  templateUrl: './navegat.component.html',
  styleUrls: ['./navegat.component.css']
})
export class NavegatComponent {

  isActive: boolean[] = [true, false, false, false];

  setActive(index: number) {
    this.isActive = this.isActive.map((_, i) => i === index);
  }

}
