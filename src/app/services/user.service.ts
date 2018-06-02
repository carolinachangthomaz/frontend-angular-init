import { HELP_DESK_API } from './helpdesk.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { CredenciaisDTO } from '../model/credenciaisDTO.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(cred: CredenciaisDTO){
     return this.http.post(`${HELP_DESK_API}/login`,
    cred,
    {
    observe: 'response',
    responseType: 'text'
    });
  }

  createOrUpdate(user: User){
    if(user.id != null && user.id != ''){
      return this.http.put(HELP_DESK_API+'/usuarios', user);
    }
  }

  findAll(){
    return this.http.get(HELP_DESK_API+'/usuarios');
  }

  findById(id: string){
    return this.http.get(HELP_DESK_API+'/usuarios/${id}');
  }

  delete(id: string){
    return this.http.delete(HELP_DESK_API+'/usuarios/${id}');
  }
}
