import { ApiService } from './http.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = [];
  constructor(private _http: ApiService) {
    this._http.retrieve()
    .then( obj => {
      console.log('OBJECT RECEIVED', obj)
      this.notes = obj.reverse();
    })
    .catch( err => { console.log(err);})
  }
  dataFromChild(data){
    console.log('Data from child', data);
    this.notes.unshift(data);
  }
}
