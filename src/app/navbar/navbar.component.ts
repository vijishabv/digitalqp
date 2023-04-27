import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  regid=""
  constructor(private router:Router){}
logout(){
  var regno=localStorage.getItem("regno")||""
  if(regno==""){
   alert("please login")
   this.router.navigateByUrl('login')

  }
  else{
  
    localStorage.clear()
    this.router.navigateByUrl('')
  }
}
loghome(){
  var regno=localStorage.getItem("regno")||""

if(regno==""){
  alert("please login")
  this.router.navigateByUrl('login')
}
else{
  this.router.navigateByUrl('loghome')

}
}
}
