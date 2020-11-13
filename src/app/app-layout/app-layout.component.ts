import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  creditCard() {
    this.route.navigate(['/creditcard']);
  }
  
  debitCard() {

    this.route.navigate(['/debitcard']);
  }
}
