import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username=""
  regid:any
  token:any
    //form validation 
   loginForm=this.fb.group({
    regno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   })
   private unsubscriber : Subject<void> = new Subject<void>();

   constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}
  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
    });  }
   login(){
    let regno=this.loginForm.value.regno
    let pswd=this.loginForm.value.pswd

    if(this.loginForm.valid){
      this.api.login(regno,pswd)
      .subscribe((result:any)=>{
        alert("login successfull")
        this.username=result.username
        this.regid=result.regno
        this.token=result.token
        console.log(this.username);
        localStorage.setItem("username",this.username)
        localStorage.setItem("regno",this.regid)
        localStorage.setItem("token",this.token)


      this.router.navigateByUrl('loghome')
    
      },
      (result:any)=>{
        alert(result.error)
      }
      )
    }
    else{
      alert('invalid form')
    }
   }
   ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  
}
