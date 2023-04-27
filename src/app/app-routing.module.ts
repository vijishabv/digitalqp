import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestiongenerationComponent } from './questiongeneration/questiongeneration.component';
import { QpviewComponent } from './qpview/qpview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { QpviewhtmlComponent } from './qpviewhtml/qpviewhtml.component';
import { QpviewcssComponent } from './qpviewcss/qpviewcss.component';
import { QpviewjsComponent } from './qpviewjs/qpviewjs.component';
import { QpviewangularComponent } from './qpviewangular/qpviewangular.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { QpjsComponent } from './qpjs/qpjs.component';
import { QpcssComponent } from './qpcss/qpcss.component';
import { QpangularComponent } from './qpangular/qpangular.component';

const routes: Routes = [
  {
    path:"quest",component:QuestiongenerationComponent
  },
  {
    path:"qpview",component:QpviewComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"reg",component:RegisterComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"loghome",component:LoginhomeComponent

  },
  {
    path:"html",component:QpviewhtmlComponent
  }
  ,
  {
    path:"css",component:QpviewcssComponent
  },
  
  {
    path:"javascript",component:QpviewjsComponent
  },
  
  {
    path:"angular",component:QpviewangularComponent
  },
  {
    path:"teacher",component:TeacherpageComponent
  }, 
  {
    path:"courses",component:CoursesComponent
  }
  ,
  {
    path:"htmlqp",component:QuestionpaperComponent

  },
  {
    path:"qpjs",component:QpjsComponent
  },
  {
    path:"qpcss",component:QpcssComponent
  },
  {
    path:"qpa",component:QpangularComponent
  },
  {
    path:"**",component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
