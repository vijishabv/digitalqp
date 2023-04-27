import { Component, OnInit } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.css']
})
export class LoginhomeComponent implements OnInit{
  username:String=""
  regno: any
  private unsubscriber : Subject<void> = new Subject<void>();

  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
    });
    this.username=localStorage.getItem("username")||""
    this.regno=localStorage.getItem("regno")||""
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
