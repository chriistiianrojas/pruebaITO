import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private isSearchCollection = new BehaviorSubject<any>(null);
  currentSearchCollection = this.isSearchCollection.asObservable();

  constructor() {
    this.userList = ELEMENT_DATA;
  }

  getuserList() {
    this.getList();
    return this.userList;
  }

  saveUser(user: UsuarioModel) {
    return user._id ? this.edituser(user) : this.createUser(user);
  }

  createUser(user: UsuarioModel) {
    user._id = this.userList.length;
    this.userList.push(user);
    this.getList();
    return true;
  }
  edituser(user: UsuarioModel) {
    this.userList.filter(u => u._id === user._id ? u = user : null);
    this.getList();
    return true;
  }

  filter(params: UsuarioModel) {
    if (params) {
      let collection: UsuarioModel[] = [];
      let collectionList: UsuarioModel[] = Object.assign([], this.userList);
      let add: boolean = false;

      if (params.email || params.name || params.lastname || params.user) {
        let arrayFilter: UsuarioModel[] = [...collectionList];
        for (let i = 0; i < arrayFilter.length; i++) {
          let item: UsuarioModel = Object.assign({}, arrayFilter[i]);
          add = false;
          if (params.email && item.email.toLocaleLowerCase().includes(params.email.toLocaleLowerCase())) {
            add = true;
          }
          if (params.user && item.user.toLocaleLowerCase().includes(params.user.toLocaleLowerCase())) {
            add = true;
          }
          if (params.name && item.name.toLocaleLowerCase().includes(params.name.toLocaleLowerCase())) {
            add = true;
          }
          if (params.lastname && item.lastname.toLocaleLowerCase().includes(params.lastname.toLocaleLowerCase())) {
            add = true;
          }
          if (add) {
            collection.push(item);
          }
        }
        this.isSearchCollection.next({ "list": collection });
      } else {
        this.getList();
      }
    } else {
      this.getList();
    }

  }

  getList() {
    this.isSearchCollection.next({ "list": this.userList });
  }

}
