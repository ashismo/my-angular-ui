import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iframe-self-help',
  templateUrl: './iframe-self-help.component.html',
  styleUrls: ['./iframe-self-help.component.scss']
})
export class IframeSelfHelpComponent implements OnInit {
  @Input() channel: string;
  @Input() application: string;
  @Input() module: string;
  @Input() tags: string;
  url: string;
  constructor() { }

  ngOnInit(): void {
    // this.url= environment.iframe_self_help + this.tag;
    this.url= environment.iframe_self_helpV2;
    if(this.channel != null) {
      this.url = this.url.replace('_CHANNEL', this.channel);
    } else {
      this.url = this.url.replace('channel=_CHANNEL&', '');
    }

    if(this.application != null) {
      this.url = this.url.replace('_APPLICATION', this.application);
    } else {
      this.url = this.url.replace('application=_APPLICATION&', '');
    }

    if(this.module != null) {
      this.url = this.url.replace('_MODULE', this.module);
    } else {
      this.url = this.url.replace('module=_MODULE&', '');
    }

    if(this.tags != null) {
      this.url = this.url.replace('_TAGS', this.tags);
    } else {
      this.url = this.url.replace('tag=_TAGS', '');
    }
    console.log(this.url);
  }

}
