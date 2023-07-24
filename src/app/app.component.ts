import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';

  mobileLayout: boolean = true;
  smallNavbar: boolean = true;
  ngOnInit(): void {

  }

  toggleMenuBar(event: any) {
    console.log(event, 'heelo')
    this.mobileLayout = event
  }

  smallMenuToogle(event: any) {
    console.log(event, 'yes')
    this.smallNavbar = event
  }
}
