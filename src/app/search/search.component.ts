import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatInput,MatFormField,MatLabel} from '@angular/material/input';
import { MatOption} from '@angular/material/core';
import { NgFor } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-search',
  imports: [MatInput,MatFormField,MatLabel,MatOption,NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  nzaddList: any[] = [];
  constructor(private http:HttpClient){
  }

  getAddressesBySearchKey(searchkeyword:any){
    this.http.get(environment.searchAddressAPIEndpoint+searchkeyword)
    .subscribe((response:any) => {
      this.nzaddList = response.addresses;
      console.log(this.nzaddList);
    })
}

}
