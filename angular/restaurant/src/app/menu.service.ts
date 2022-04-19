import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restMenu :any = new Map<any,string[]>();

  getRestmenu() {
    return this.restMenu;
  }
  setRestmenu(rm:any) {
    this.restMenu = rm;
  }
  setrest(r:any){
    this.restMenu.set(r,[]);
  }
  deleteRest(item: any) {
    this.restMenu.delete(item);
  }
  
  constructor() {
    //default restaurant
    this.restMenu.set("La place",["pepproni pizza","Garlic bread","Taco","Chicken Burger"]);
   }
}
