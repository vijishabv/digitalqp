import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestiongenerationComponent } from './questiongeneration/questiongeneration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QpviewComponent } from './qpview/qpview.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { HomeComponent } from './home/home.component';
import { QpviewjsComponent } from './qpviewjs/qpviewjs.component';
import { QpviewcssComponent } from './qpviewcss/qpviewcss.component';
import { QpviewangularComponent } from './qpviewangular/qpviewangular.component';
import { QpviewhtmlComponent } from './qpviewhtml/qpviewhtml.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { Router } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ExitComponent } from './exit/exit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { QpjsComponent } from './qpjs/qpjs.component';
import { QpcssComponent } from './qpcss/qpcss.component';
import { QpangularComponent } from './qpangular/qpangular.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestiongenerationComponent,
    NavbarComponent,
    QpviewComponent,
    LoginComponent,
    RegisterComponent,
    TeacherpageComponent,
    HomeComponent,
    QpviewjsComponent,
    QpviewcssComponent,
    QpviewangularComponent,
    QpviewhtmlComponent,
    LoginhomeComponent,
    CoursesComponent,
    ExitComponent,
    PagenotfoundComponent,
    QuestionpaperComponent,
    QpjsComponent,
    QpcssComponent,
    QpangularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
