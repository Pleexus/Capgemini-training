import { Injectable } from '@angular/core';
import { Advertisement } from './models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  ads: Advertisement[]=[
    {
      id: 1,
      title: "Halo Marketing",
      name: "Halo Infinite",
      category: "Mobile",
      description: "Free access to all previous Halo titile Holders"
    },
    {
      id: 2,
      title: "Hoyoverse",
      name: "Genshin Impact",
      category: "Furniture",
      description: "Yelan Drip Marketing"
    }
  ]
  constructor() { }

  onGet(){
    return this.ads;
  }

  onAdd(ads: Advertisement){
    this.ads.push(ads);
  }
  onDelete(id: number){
    let advert = this.ads.find(a => a.id===id) as any;
    let index = this.ads.indexOf(advert,0);
    this.ads.splice(index,1);
  }
  onGetAd(id: number){
    return this.ads.find(a => a.id === id);
  }

  onUpdate(ads: Advertisement){
    let oldad = this.ads.find(a => a.id===ads.id) as any;
    oldad.title = ads.title;
    oldad.name = ads.name;
    oldad.category = ads.category;
    oldad.description = ads.description;
  }
}
