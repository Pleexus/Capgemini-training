import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertiseService } from '../advertise.service';
import { Advertisement } from '../models/ad.model';

@Component({
  selector: 'app-advertisement-form-component',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {

  id!: number;
  header!:string;
  public categorys = ["Furniture","Hardware","Mobile"];
  selected = "Category";
  // AdModel = new Advertisement();
  ad: Advertisement = {
    id: 0,
    title: '',
    name: '',
    category: '',
    description: ''
  }
 

  constructor(private router: Router ,private route: ActivatedRoute, private advertiseService: AdvertiseService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.header = this.id === 0? 'Add Advertisement':'Edit Advertisement';

    if(this.id != 0){
      this.ad =this.advertiseService.onGetAd(this.id) as any;
    }
  }

  onSelect(category: any){
    this.selected= category;
  }

  onSubmit(form: NgForm){
    // console.log(form.value);
    let ad : Advertisement = {
      id: Number(form.value.id),
      title: form.value.title,
      name: form.value.name,
      category: form.value.category,
      description: form.value.description
    }
    if(this.id ===0){
      this.advertiseService.onAdd(ad);
    }
    else{
      this.advertiseService.onUpdate(ad);
    }
    
    this.router.navigateByUrl(''); //to home page

    
  }



}
