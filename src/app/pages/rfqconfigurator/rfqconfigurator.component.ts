import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfqconfigurator',
  templateUrl: './rfqconfigurator.component.html',
  styleUrls: ['./rfqconfigurator.component.scss']
})
export class RFQConfiguratorComponent implements OnInit {
 visible = false;
  constructor() { }

  ngOnInit() {
  }
  items = [
    { rfqId: 'RFQ-01', showSubmodule: false },
    // ... other items ...
  ];

  toggleSubmodule(item): void {
    this.visible=true;
    item.showSubmodule = !item.showSubmodule;
  }
}
