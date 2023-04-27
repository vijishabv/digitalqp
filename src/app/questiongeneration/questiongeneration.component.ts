import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-questiongeneration',
  templateUrl: './questiongeneration.component.html',
  styleUrls: ['./questiongeneration.component.css']
})
export class QuestiongenerationComponent implements OnInit  {
  id:any
  question:String=""
  option1:String=""
  option2:String=""
  option3:String=""
  option4:String=""
  rightanswer:String=""
  qp:any
  private unsubscriber : Subject<void> = new Subject<void>();

  constructor(private api:ApiService){}
  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
    });  }
 
 
  insertq(){
    this.api.qpstore(this.id,this.question,this.option1,this.option2,this.option3,this.option4,this.rightanswer)
    .subscribe((result:any)=>{
      console.log(result);
      this.qp=result
      alert(this.qp);
      
      this.reset()
    },
    (result:any)=>{
      alert(result.error);
    }
    )
  }
  reset(){
    this.id=+this.id+1
    this.question=""
    this.option1=""
    this.option2=""
    this.option3=""
    this.option4=""
    this.rightanswer=""
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
