import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StringCommons } from '../../StringCommons';


@Component({
  selector: 'app-more-data-table',
  templateUrl: './more-data-table.component.html',
  styleUrls: ['./more-data-table.component.css']
})
export class MoreDataTableComponent implements OnInit {

  requisites$: Observable<any>;

  constructor() { }

  ngOnInit() {

  }

  formatArea(strArea) {
    return strArea === 'Front-end' ? 'F' : 'B';
  }

  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

}
