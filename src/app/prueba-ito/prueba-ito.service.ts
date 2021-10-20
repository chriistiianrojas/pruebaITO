import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';

const ELEMENT_DATA: UsuarioModel[] = [
  { _id: 1, name: 'Hydrogen', lastname: 'Hydrogen', user: "Hydrogen", email: "prueba@prueba.com", state: true },
  { _id: 2, name: 'Helium', lastname: 'Helium', user: "Helium", email: "prueba@prueba.com", state: true },
  { _id: 3, name: 'Lithium', lastname: 'Lithium', user: "Lithium", email: "prueba@prueba.com", state: true },
  { _id: 4, name: 'Beryllium', lastname: 'Beryllium', user: "Beryllium", email: "prueba@prueba.com", state: true },
  { _id: 5, name: 'Boron', lastname: 'Boron', user: "Boron", email: "prueba@prueba.com", state: true },
  { _id: 6, name: 'Carbon', lastname: 'Carbon', user: "Carbon", email: "prueba@prueba.com", state: true },
  { _id: 7, name: 'Nitrogen', lastname: 'Nitrogen', user: "Nitrogen", email: "prueba@prueba.com", state: true },
  { _id: 8, name: 'Oxygen', lastname: 'Oxygen', user: "Oxygen", email: "prueba@prueba.com", state: true },
  { _id: 9, name: 'Fluorine', lastname: 'Fluorine', user: "Fluorine", email: "prueba@prueba.com", state: true },
  { _id: 10, name: 'Neon', lastname: 'Neon', user: "Neon", email: "prueba@prueba.com", state: true },
];

@Injectable({
  providedIn: 'root'
})
export class PruebaITOService {
  userList: UsuarioModel[];
  constructor() {
    this.userList = ELEMENT_DATA;
  }

  getuserList() {
    return this.userList;
  }

  createUser(user: UsuarioModel) {
    user._id = this.userList.length;
    this.userList.push(user);
  }
  edituser(user: UsuarioModel) {
    this.userList.filter(u => u._id === user._id ? u = user : null)
  }
}
