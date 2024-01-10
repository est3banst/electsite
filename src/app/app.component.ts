import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  isMobile = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {

    this.breakpointObserver.observe([
      "(max-width: 460px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
         this.isMobile = true;
         console.log(this.isMobile);
      } else {
          this.isMobile = false;
          console.log(this.isMobile);
      }
    });
  }


}





