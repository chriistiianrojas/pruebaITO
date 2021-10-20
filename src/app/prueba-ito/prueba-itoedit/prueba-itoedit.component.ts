import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-itoedit',
  templateUrl: './prueba-itoedit.component.html',
  styleUrls: ['./prueba-itoedit.component.scss']
})
export class PruebaITOEditComponent implements OnInit {

  formGroup: FormGroup;
  softwareModel: any = {}

  constructor(private formBuilder: FormBuilder,) {
    this.formGroup = this.formBuilder.group({      
    })
  }

  ngOnInit(): void {
  }

  save() {

  }

}
