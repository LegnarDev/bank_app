import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{

    titulo: 'Ingresar',
    icono: '"nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios' },
      { titulo: 'Mi cuenta', url: 'productos' },
  //    { titulo: 'Stock', url: 'stock' },
    ]

  }];
  constructor() { }
}
