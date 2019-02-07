import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css']
})
export class MenuLinksComponent implements OnInit {

  constructor() { }

  isOpen: boolean[] = [false, false, true];

  toggle(index) {
    this.isOpen[index] = !this.isOpen[index];
    for (let i = 0; i < this.isOpen.length; i++) {
      if ( i !== index) {
        this.isOpen[i] = false;
      }
    }
  }

  ngOnInit() {
  }

  isOpen_f(index) {return this.isOpen[index]; }

}
