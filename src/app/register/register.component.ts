import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerStatus:boolean=false
  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    regno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    cpassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
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
  register(){
    let username=this.registerForm.value.username
    let regno=this.registerForm.value.regno
    let pswd=this.registerForm.value.pswd
    let cpassword=this.registerForm.value.cpassword

    if(this.registerForm.valid){
      this.api.userreg(username,regno,pswd,cpassword)
      .subscribe((result:any)=>{
        console.log(result);
        this.registerStatus=true
        //200 response
        setTimeout(()=>{
        alert(result)
        this.router.navigateByUrl('login')
      },5000)
        
      },
      (result:any)=>{
        alert(result.error)
        
      })
    }
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
