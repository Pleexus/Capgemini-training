import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from '../advertise.service';
import { Advertisement } from '../models/ad.model';

@Component({
  selector: 'app-advertisement-table-component',
  templateUrl: './advertisement-table-component.component.html',
  styleUrls: ['./advertisement-table-component.component.css']
})
export class AdvertisementTableComponentComponent implements OnInit {

  advertisements!: Advertisement[];
  // public categorys = ["Furniture","Hardware","Mobile"];
  // selected = "Category";

  title!: string;

  constructor(private advertisementService: AdvertiseService) { }

  ngOnInit(): void {
    this.advertisements=this.advertisementService.onGet();
  }

  // onSelect(category: any){
  //   this.selected= category;
  // }
  onDelete(id: number){
    this.advertisementService.onDelete(id);
  }

  searchBox(){
    if(this.title != ""){
      this.advertisements = this.advertisements.filter(
        res => {return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
        });
    } 
    else if (this.title == ""){
      this.ngOnInit();
    }
    
  }
}
