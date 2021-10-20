import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaITOListComponent } from './prueba-itolist/prueba-itolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../helpers/shared/shared.module';
import { PruebaITOService } from './prueba-ito.service';
import { PruebaITORoutingModule } from './prueba-ito-routing.module';
import { PruebaITOCreateComponent } from './prueba-itocreate/prueba-itocreate.component';
import { PruebaITOComponent } from './prueba-ito.component';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [PruebaITOComponent, PruebaITOListComponent, PruebaITOCreateComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PruebaITORoutingModule,
    TranslateModule.forChild({})
  ],
  providers: [PruebaITOService, TranslateService, TranslateStore],
  exports: [
    PruebaITOComponent, TranslateModule
  ]
})
export class PruebaITOModule { }
