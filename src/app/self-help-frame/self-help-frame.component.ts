import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-help-frame',
  templateUrl: './self-help-frame.component.html',
  styleUrls: ['./self-help-frame.component.scss']
})
export class SelfHelpFrameComponent implements OnInit {

  constructor() { }

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
        "parentName": "Parent Three",
        "childProperties":
          [
            { "propertyName": "Property Six" },
            { "propertyName": "Property Seven" },
            { "propertyName": "Property Eight" },
          ]
      }
    ]

  ngOnInit() {
    
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
