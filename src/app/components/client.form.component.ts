import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  'selector' : 'client-form',
  'template': ` <hr>
    <form [formGroup]="clientForm" (submit)="onSubmit()">
      <div>
        <label>Ingrese nombre</label>
        <input formControlName="first_name" type="text" />
      </div>
      <div>
        <label>Ingrese apellidos</label>
        <input formControlName="last_name" type="text" />
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
     <ul>
      <li><strong>Nombres</strong>: 
      {{this.clientForm.value.first_name}}
       </li>
      <li><strong>Apellidos</strong>:{{this.clientForm.value.last_name}} </li>
    </ul>  
    <hr>`
})
export class ClientFormComponent{

      clientForm;
      constructor(private formBuilder:FormBuilder ){
          this.clientForm = this.formBuilder.group({
            'first_name' : '',
            'last_name' : '',
          });
      }
    onSubmit(){
      console.log(">", this.clientForm.value);
    }
}