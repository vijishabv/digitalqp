import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-qpviewcss',
  templateUrl: './qpviewcss.component.html',
  styleUrls: ['./qpviewcss.component.css']
})
export class QpviewcssComponent {
  html="qpcss"
  i:number=0//index number
  score:number=0//score storing variable
  qstn1:any//variable to store first element of array
  qstns:any//variable to store the array that contain the detais of questions
  answer=''//variable to store answer opt by student
  rightanswer:any//variable to store right answer of each question
  level=""
  mark=""
  
  private unsubscriber : Subject<void> = new Subject<void>();

  constructor(private api:ApiService,private router:Router){ }
  
  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
    });
   this.qpget()
  }
  //api call to get questions and answers
qpget(){
 this.api.qpgetcss()
  .subscribe((result:any)=>{
    this.qstns=result
    console.log(this.qstns.length);
    this.rightanswer=this.qstns[0].rightanswer
    this.qstn1=this.qstns[0]
    
  })
 
  }
  //function to display questions one by one
   displayquestion(){
    if(this.answer==""){
      alert("please select an option")
      this.i=this.i-1
      this.router.navigateByUrl("css")
    }
    if(this.answer==this.rightanswer){
      this.score=this.scorecalc()
      
    }
    
    this.i=this.i + 1
    console.log(this.i);
    if(this.i==this.qstns.length){
      alert(`your score is${this.score}`)
      
      this.mark=this.score+""
      localStorage.setItem("mark",this.mark)
      localStorage.setItem("html",this.html)
     

      if(this.score<5)
      {
        this.level="BEGINNER"
        localStorage.setItem("level",this.level)
        this.router.navigateByUrl('teacher')
      }
      else{
        this.level="INTERMEDIATE"
        localStorage.setItem("level",this.level)
        this.router.navigateByUrl('teacher')
      }
      
    
      
    }
    if(this.i<=this.qstns.length)
    {
    this.qstn1=this.qstns[this.i]
    console.log(this.qstn1);
    this.rightanswer=this.qstn1.rightanswer
    this.answer=""

    }

   
   }
   //function to calculate score
   scorecalc(){
    return this.score=this.score+1
    
   }
   ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
