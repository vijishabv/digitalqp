import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-qpjs',
  templateUrl: './qpjs.component.html',
  styleUrls: ['./qpjs.component.css']
})
export class QpjsComponent implements OnInit{
  questions:any
  private unsubscriber : Subject<void> = new Subject<void>();

  
  constructor( private api:ApiService){}
ngOnInit(): void {
  history.pushState(null, '');

  fromEvent(window, 'popstate').pipe(
    takeUntil(this.unsubscriber)
  ).subscribe((_) => {
    history.pushState(null, '');
    alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
  });
  this.getquestion()
}
getquestion(){
this.api.qpgetjs()
.subscribe((result:any)=>{
  this.questions=result
})
}
ngOnDestroy(): void {
  this.unsubscriber.next();
  this.unsubscriber.complete();
}
}