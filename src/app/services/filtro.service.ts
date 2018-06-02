import { Injectable, EventEmitter } from '@angular/core';
import { CredenciaisDTO } from '../model/credenciaisDTO.model';

@Injectable()
export class FiltroService {

  public static instance : FiltroService = null;
  cred: CredenciaisDTO;
  token: string;
  showTemplate = new EventEmitter<boolean>();
  constructor() {
    return FiltroService.instance = FiltroService.instance || this;
   }

   public static getInstance(){
     if(this.instance == null){
       this.instance = new FiltroService();
     }
     return this.instance;
   }

   isLoggedIn():boolean{
    if(this.cred == null){
      return false;
    }
    return this.cred.email != '';
   }
}
