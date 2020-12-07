import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ui-app';
  showMenu: boolean = true;
  
  constructor(private router: Router, private window: Location) {}

    ngOnInit() {
      

        if(window.location.href != null && window.location.href.indexOf('selfhelp?tag=') > 0) {
          this.showMenu = false;
        }
        console.log(window.location.href);
    }
}
