import { Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private RestmenuService:MenuService) { }
  restmenu:any = new Map<any,string[]>();

  ngOnInit() {
  this.restmenu = this.RestmenuService.getRestmenu();
  }

}
