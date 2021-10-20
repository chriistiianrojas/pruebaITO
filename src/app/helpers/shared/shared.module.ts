import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';
import { MaterialPaginatorIntl } from 'src/app/material-paginator-intl';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MaterialPaginatorIntl }
  ]
})
export class SharedModule { }
