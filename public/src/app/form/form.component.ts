import { ApiService } from './../http.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() passNote = new EventEmitter();
  note_obj = new Note();
  notes = [];
  constructor(private _http: ApiService) { }

  onSubmit(note, form){
    console.log('Inside onSubmit', note);
    this._http.create(note)
    .then ( obj => {
      console.log('OBJECT CREATED', obj);
      form.resetForm();
      this.passNote.emit(obj)
    })
    .catch ( err => { console.log(err); })
  }

  ngOnInit() {
  }

}
