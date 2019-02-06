import { Component } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'report-de-horas';

  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Não foi encontrado nenhum item';
  }
}
