import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private route:Router) { }
  isCreditCard: boolean = false;
  isDebitCard: boolean = false;

  ngOnInit(): void {
  }

  selectedItem($event) {
    console.log($event);
  }
  selectedLabel($event) {
    console.log($event);
  }
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'menu-class',
    listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(0, 0, 0)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `rgb(0, 102, 255)`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
};

expandCollapseStatus = 'expand'; // expand|collapse

appitems = [
  {
    label: 'Booking',
    items: [{
      label: 'Flight',
      items: [
      {
          label: 'Debit Card',
          link: '/debitcard',
          activeIcon: 'icon-debit-card'
      }
      ]
    },
    {
      label: 'Cargo',
      items: [
      {
          label: 'Credit Card',
          link: '/creditcard',
          activeIcon: 'icon-credit-card'
      }
      ]
  }]
  }
];

creditCard() {
  this.isCreditCard = true;
  this.route.navigate(['/creditcard']);
}

debitCard() {
  this.isDebitCard = true;
  this.route.navigate(['/debitcard']);
}

//   appitems = [
//     {
//         label: 'NPM',
//         imageIcon: 'fab fa-npm',
//         link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
//         externalRedirect: true,
//         hrefTargetType: '_blank' // _blank|_self|_parent|_top|framename
//     },
//     {
//         label: 'Item 1 (with Font awesome icon)',
//         faIcon: 'fab fa-500px',
//         items: [
//             {
//                 label: 'Item 1.1',
//                 link: '/item-1-1',
//                 faIcon: 'fab fa-accusoft'
//             },
//             {
//                 label: 'Item 1.2',
//                 faIcon: 'fab fa-accessible-icon',
//                 disabled: true,
//                 items: [
//                     {
//                         label: 'Item 1.2.1',
//                         link: '/item-1-2-1',
//                         faIcon: 'fa-allergies' // Font awesome default prefix is fas
//                     },
//                     {
//                         label: 'Item 1.2.2',
//                         faIcon: 'fas fa-ambulance',
//                         items: [
//                             {
//                                 label: 'Item 1.2.2.1',
//                                 faIcon: 'fas fa-anchor',  // Still you can specify if you want to
//                                 onSelected: function() {
//                                     console.log('Item 1.2.2.1');
//                                 }
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Item 2',
//         icon: 'alarm',
//         items: [
//         {
//             label: 'Item 2.1',
//             link: '/item-2-1',
//             icon: 'favorite_border',
//             activeIcon: 'favorite',
//             disabled: true,
//         },
//         {
//             label: 'Item 2.2',
//             link: '/item-2-2',
//             icon: 'favorite_border',
//             activeIcon: 'favorite',
//             navigationExtras: {
//                 queryParams: { order: 'popular', filter: 'new' },
//             }
//         }
//         ]
//     },
//     {
//         label: 'Item 3',
//         icon: 'offline_pin',
//         onSelected: function() {
//             console.log('Item 3');
//         }
//     },
//     {
//         label: 'Item 4',
//         link: '/item-4',
//         icon: 'star_rate',
//         hidden: true
//     }
// ];
}
