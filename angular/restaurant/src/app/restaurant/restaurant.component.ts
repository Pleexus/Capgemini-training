import { Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restmenu:any = new Map<any,string[]>();
  rm:any = new Map<any,string[]>();
  errormsg: any;
  public sid: any ;
  id:any;

  constructor(private menuService:MenuService,private _Router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.sid = (<any>params.get('id'));})
    this.restmenu = this.menuService.getRestmenu();
    if(this.restmenu.has(this.sid)){
      this.errormsg = null;
      this.id = this.sid;
      this.rm =this.restmenu.get(this.sid);
    }
    else{
      this.errormsg = "Not Available";
    }
   }
  public name ="";
  public item="";
  addtoarray(item:string){
    this.rm.push(item);
    
    this.id=String(this.id);
    this.restmenu.set(this.id,this.rm);
    
    this.menuService.setRestmenu(this.restmenu);
  }
  Deletefromarray(item: any){
    this.rm.splice(this.rm.indexOf(item),1);
    this.id=String(this.id);
    this.restmenu.set(this.id,this.rm);
    this.menuService.setRestmenu(this.restmenu);}
  

}
