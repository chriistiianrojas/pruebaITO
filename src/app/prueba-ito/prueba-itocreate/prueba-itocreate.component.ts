import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PruebaITOService } from '../prueba-ito.service';
import { UsuarioModel } from '../usuario.model';

@Component({
  selector: 'app-prueba-itocreate',
  templateUrl: './prueba-itocreate.component.html',
  styleUrls: ['./prueba-itocreate.component.scss']
})
export class PruebaITOCreateComponent implements OnInit {

  @Input() title: string;
  @Input() user: UsuarioModel;
  @Input() set typeForm(v: number) {
    this.typeFormVal = v;
    if (v === 2) {
      this.edit();
    } else if (v === 3) {
      this.disabledForm()
    }
  }
  typeFormVal: number;
  @Output() formSaved = new EventEmitter<any>();

  formGroup: FormGroup;
  usuarioModel: UsuarioModel = new UsuarioModel();
  constructor(private formBuilder: FormBuilder, private pruebaService: PruebaITOService) {
    this.formGroup = this.formBuilder.group({
      emailCtrl: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      usuarioCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$")]],
      nombreCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      apellidoCtrl: ["", [Validators.required, Validators.minLength(3), , Validators.maxLength(100)]],
      estadoCtrl: ["", []]
    })
  }

  ngOnInit(): void {
  }

  edit() {
    this.usuarioModel = this.user;
  }
  disabledForm() {
    this.usuarioModel = this.user;
    this.formGroup.disable()
  }
  save() {
    this.pruebaService.saveUser(this.usuarioModel);
    this.closeModal();
  }

  clear() {
    this.usuarioModel = new UsuarioModel();
    this.closeModal();
  }
  closeModal() {
    this.formSaved.emit({
      okay: true
    });

  }

}


