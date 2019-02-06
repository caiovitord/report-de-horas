import { Component, OnInit, Input } from '@angular/core';

import { StringCommons } from './../../../../shared/StringCommons';


@Component({
  selector: 'app-req-csv-table',
  templateUrl: './req-csv-table.component.html',
  styleUrls: ['./req-csv-table.component.css']
})
export class ReqCsvTableComponent implements OnInit {

  @Input() requisites;

  constructor() { }

  ngOnInit() {
  }

  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

}
