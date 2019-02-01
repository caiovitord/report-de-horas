import { AddRequisitoService } from './add-requisito.service';
import { Injectable, ComponentRef } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequisitoService {

  public dynamicFormComponentRef: ComponentRef<RhFormComponent>[] = [];

  async deleteForm(formNumber: number) {
    const index = formNumber - 2; // Menos um por que não conta o primeiro form, e menos um novamente por que é zero based

    this.dynamicFormComponentRef[index].instance.destruir = true;
    this.addRequisitoService.removeComponent();

    await delay(500);

    this.dynamicFormComponentRef[index].destroy();

  }

  constructor( private addRequisitoService: AddRequisitoService) { }
}
