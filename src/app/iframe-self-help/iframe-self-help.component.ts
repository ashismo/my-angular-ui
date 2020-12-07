import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iframe-self-help',
  templateUrl: './iframe-self-help.component.html',
  styleUrls: ['./iframe-self-help.component.scss']
})
export class IframeSelfHelpComponent implements OnInit {
  @Input() tag: string;
  url: string;
  constructor() { }

  ngOnInit(): void {
    this.url= environment.iframe_self_help + this.tag;
    console.log(this.url);
  }

}
