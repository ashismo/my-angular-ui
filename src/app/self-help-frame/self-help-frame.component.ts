import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorSearchService } from '../error-search.service';

@Component({
  selector: 'app-self-help-frame',
  templateUrl: './self-help-frame.component.html',
  styleUrls: ['./self-help-frame.component.scss']
})
export class SelfHelpFrameComponent implements OnInit {

  @Input() tag: string;
  hideDuplicate: boolean = true;
  errorMsg: any;

  constructor(private errorSearchService: ErrorSearchService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      var t = params['tag'];
      if(t != null) {
        this.hideDuplicate = false;
        this.tag = t;
      }
  });
  }

  data: any =
    [
      {
        "parentName": "How would I know if my bank supports international transaction",
        "childProperties":
          [
            { "propertyName": "Please check with bank" }
          ]
      },
      {
        "parentName": "Do my transaction fail if there is insufficient balance",
        "childProperties":
          [
            { "propertyName": "Sometimes application does not handle any specific error if decliened by a bank" },
            { "propertyName": "Property Four" },
            { "propertyName": "Property Five" },
          ]
      },
      {
        "parentName": "Does my account get locks for multiple incorrect attempt?",
        "childProperties":
          [
            { "propertyName": "Property Six" },
            { "propertyName": "Property Seven" },
            { "propertyName": "Property Eight" },
          ]
      }
    ]

  ngOnInit() {
    console.log("Tag: " + this.tag);

    // this.errorSearchService.getContentTagNameLambda(this.tag).subscribe(
    //   data => {
    //     this.errorMsg = data.contentData[0];
    //   }
    // );

    this.errorSearchService.getTagByTagName(this.tag).subscribe(
      data => {
        console.log("TagId response", data);
        if(data != null && data.length > 0) {
          var tagId = data[0].id;
          this.errorSearchService.getContentTagName(tagId).subscribe(
            data => {
              console.log("Content response", data);
              if(data != null && data.length > 0) {
                console.log("Content: " , data[0].content.rendered);
                this.errorMsg = data[0].content.rendered;
                //this.errorMsg = this.errorMsg.split("<p>").join("");
                //this.errorMsg = this.errorMsg.split("</p>").join("");
              }
            }
          )
        }
      }
    );
  }
  toggleAccordian(event, index) {
      var element = event.target;
      element.classList.toggle("active");
      if(this.data[index].isActive) {
        this.data[index].isActive = false;
      } else {
        this.data[index].isActive = true;
      }      
      var panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  }

}
