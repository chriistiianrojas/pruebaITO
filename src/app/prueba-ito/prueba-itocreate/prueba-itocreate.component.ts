import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from '../usuario.model';

@Component({
  selector: 'app-prueba-itocreate',
  templateUrl: './prueba-itocreate.component.html',
  styleUrls: ['./prueba-itocreate.component.scss']
})
export class PruebaITOCreateComponent implements OnInit {
  formGroup: FormGroup;
  usuarioModel: UsuarioModel = new UsuarioModel();
  constructor(private formBuilder: FormBuilder,) {
    this.formGroup = this.formBuilder.group({
      emailCtrl: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      usuarioCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(20)]],
      nombreCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      apellidoCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      estadoCtrl: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  save() {

  }

  clear() {

  }

}
