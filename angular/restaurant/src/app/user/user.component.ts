import { Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private RestmenuService:MenuService) { }
  restmenu:any = new Map<any,string[]>();

  ngOnInit() {
  this.restmenu = this.RestmenuService.getRestmenu();
  }

}
