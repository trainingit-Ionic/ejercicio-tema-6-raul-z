import { Component } from '@angular/core';
import * as Users from '../data/users';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usersData : any; 
  public selected : boolean;
  public selectedUser: any; 

  constructor(private callNumber: CallNumber) { }

  
  
  

  ngOnInit(): void {
    this.selected = false;    
    this.usersData = Users.USERS;
  }

  showUserDetails(user): void {
    this.selectedUser = user;
    this.selected = true;
  }

  hideUserDetails(): void {
    this.selected = false;
  }

  openDialer(): void {
    this.callNumber.callNumber(this.selectedUser.phone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  } 
}

