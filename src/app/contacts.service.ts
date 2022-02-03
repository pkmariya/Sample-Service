import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  myName  = [
    {firstName: 'Mariya', lastName: 'Arul Raj', city: 'Chennai'},
    {firstName: 'Preeths', lastName: 'Caroline', city: 'Singapore'}
  ];

  constructor() { }

  getName() {
    return this.myName;
  }
}
