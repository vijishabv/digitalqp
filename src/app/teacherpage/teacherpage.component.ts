import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.css']
})
export class TeacherpageComponent implements OnInit {
mark:any
username:String=""
level=""
htmls=""
private unsubscriber : Subject<void> = new Subject<void>();

constructor(private router:Router){

 this.username=localStorage.getItem("username")||""
 this.mark=localStorage.getItem("mark")||""
 this.level=localStorage.getItem("level")||""
 this.htmls=localStorage.getItem("html")||""
    

}
  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
    });  }
answerkey(){
  if(this.htmls==""){
    alert(" You already visited this page once...please answer qp  once again to view questions and answers ")
  }
  if(this.htmls=="qpa"){
    localStorage.removeItem("html")
  this.router.navigateByUrl('qpa')
}
if(this.htmls=="qpcss"){
  localStorage.removeItem("html")
this.router.navigateByUrl('qpcss')
}
if(this.htmls=="qpjs"){
  localStorage.removeItem("html")
this.router.navigateByUrl('qpjs')
}
if(this.htmls=="htmlqp"){
  localStorage.removeItem("html")
this.router.navigateByUrl('htmlqp')
}
}
ngOnDestroy(): void {
  this.unsubscriber.next();
  this.unsubscriber.complete();
}
}
