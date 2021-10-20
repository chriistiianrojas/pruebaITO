import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaITOService } from '../prueba-ito.service';
import { UsuarioModel } from '../usuario.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-prueba-itolist',
  templateUrl: './prueba-itolist.component.html',
  styleUrls: ['./prueba-itolist.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PruebaITOListComponent implements OnInit {

  paginatorReport: MatPaginator;
  from = 0;
  pageSize = 5;
  pageIndex = 0;

  // Paginator variables
  total: number = 0;
  reportTableLength: number = 0;
  reportTableSize: number = 10;
  paginator: MatPaginator;
  softwareList: any[];
  loadingReserves: boolean;
  totalSoftware: number;

  @ViewChild('paginador', { static: false })
  set paginatorRef(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['user', 'email', 'name', 'lastname', 'option'];
  dataSource = null;
  formGroup: FormGroup;
  usuarioModel: UsuarioModel = new UsuarioModel();
  constructor(private formBuilder: FormBuilder, private pruebaService: PruebaITOService) {
    this.dataSource = new MatTableDataSource<any>(Object.assign([], []));
    this.formGroup = this.formBuilder.group({
      emailCtrl: [""],
      usuarioCtrl: [""],
      nombreCtrl: [""],
      apellidoCtrl: [""],
    })
  }

  ngOnInit(): void {
    console.log("pr")
    this.dataSource = new MatTableDataSource<UsuarioModel>();

    this.pruebaService.getuserList();
    this.pruebaService.currentSearchCollection.subscribe((completeList) => {
      if (completeList !== null) {

        if (completeList.list) {
          console.log(completeList.list);
          this.dataSource = new MatTableDataSource<UsuarioModel>(Object.assign([], completeList.list));
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);

          this.total = completeList.list;
        } else {
          this.dataSource = new MatTableDataSource<UsuarioModel>(Object.assign([], []));

        }
      }
    });

  }


  cambioPagina(evento) {

    this.pageSize = evento.pageSize;
    this.pageIndex = evento.pageIndex;
    this.from = this.pageIndex * this.pageSize;
  }
  filtart() {
    this.pruebaService.filter(this.usuarioModel);
  }
  clear() {

  }
}
