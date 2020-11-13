import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { Errors } from '../model/errors';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  error: Errors = {
    code: "",
    msg: ""
  }
  card: Card = {
    card: "1111-1111-1111-1111",
    expDate: "1120",
    cvv: "123",
    line1: "123 main street",
    line2: "",
    city : "Atlanta",
    country : "USA",
    state : "GA",
    zip : "30338"
  }

  errorCodes = [];

  constructor() { }

  ngOnInit(): void {
    this.errorCodes.push({code:"CC100", msg:"Something went wrong. Please Try again"});
    this.errorCodes.push({code:"CC101", msg:"Operation failed. Please Try again"});
    this.errorCodes.push({code:"CC102", msg:"Link failed. Please Try again"});
    this.errorCodes.push({code:"CC103", msg:"Internal Server error. Please Try again"});
    this.errorCodes.push({code:"CC104", msg:"Something went wrong. Please Try again"});
  }

  submit(form) {
    console.log(form.form.controls);
    let index = this.randomInteger(0,3);
    this.error = this.errorCodes[index];
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
