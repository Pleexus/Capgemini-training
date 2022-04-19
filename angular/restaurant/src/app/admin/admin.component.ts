import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private RestmenuService:MenuService) { }
  restmenu:any = new Map<any,string[]>();

  ngOnInit(): void {
  this.restmenu = this.RestmenuService.getRestmenu();
  }
  public name ="";
  addrest(item:string){
    this.RestmenuService.setrest(item);
  }
  public item ="";
  Deletefrommap(item: any){
    this.RestmenuService.deleteRest(item);
  }
}
