import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  private unsubscriber : Subject<void> = new Subject<void>();
  constructor(private router:Router){}
  ngOnInit(): void {
    history.pushState(null, '');

  fromEvent(window, 'popstate').pipe(
    takeUntil(this.unsubscriber)
  ).subscribe((_) => {
    history.pushState(null, '');
    alert(`You can't make changes or go back at this time. if you want to close the application please logout and click on close icon(X) on the right corner of your desktop oyher wise continue`);
  });
  }
logout(){
localStorage.clear()
this.router.navigateByUrl("")

}
ngOnDestroy(): void {
  this.unsubscriber.next();
  this.unsubscriber.complete();
}



}
