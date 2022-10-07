import { Injectable } from '@angular/core';
import data from '../../assets/config.json'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(){
    let config = JSON.parse(sessionStorage.getItem('config')!);
    if(config != null){
      return config;
    }else{
      sessionStorage.setItem('config', JSON.stringify(data))
      return data;
    }
  }
}
