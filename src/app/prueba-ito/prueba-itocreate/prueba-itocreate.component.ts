import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PruebaITOService } from '../prueba-ito.service';
import { UsuarioModel } from '../usuario.model';

@Component({
  selector: 'app-prueba-itocreate',
  templateUrl: './prueba-itocreate.component.html',
  styleUrls: ['./prueba-itocreate.component.scss']
})
export class PruebaITOCreateComponent implements OnInit {
  formGroup: FormGroup;
  usuarioModel: UsuarioModel = new UsuarioModel();
  constructor(private formBuilder: FormBuilder, private pruebaService: PruebaITOService) {
    this.formGroup = this.formBuilder.group({
      emailCtrl: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      usuarioCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9._%+-]$")]],
      nombreCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      apellidoCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      estadoCtrl: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.pruebaService.createUser(this.usuarioModel);
  }

  clear() {
    this.usuarioModel = new UsuarioModel();
  }

}
