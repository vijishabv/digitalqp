import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from'@angular/common/http'
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='https://digitalqp.onrender.com'
  constructor(private http:HttpClient) { }
  //api to store question
  appendtoken(){
    //to get token from local storage
    const token=localStorage.getItem("token")||""
    let headers=new HttpHeaders()
  
    if(token){
      //create request header
      //append token in verifytoken as key in header
      headers=headers.append('verifytoken',token)
      options.headers=headers
    }
    return options
  
  }
  qpstore( id:any,question:any,option1:any,option2:any,option3:any,option4:any,rightanswer:any){
  const  body={
    id,
    question,
    option1,
    option2,
    option3,
    option4,
    rightanswer
  }
  return this.http.post(`${this.baseurl}/questions/questionsstore`,body,this.appendtoken())
}
 qpget(){
  return this.http.get(`${this.baseurl}/questions/qpget`,this.appendtoken())

}
userreg(username:any,regno:any,pswd:any,cpassword:any){
  const body={
    username,regno,pswd,cpassword
  }
  return this.http.post(`${this.baseurl}/registers/register`,body)
}
qpgetjs(){
  return this.http.get(`${this.baseurl}/jss/jsstore`,this.appendtoken())

}
qpgethtml(){
  return this.http.get(`${this.baseurl}/htmls/htmlstore`,this.appendtoken())

}
 qpgetcss(){
  return this.http.get(`${this.baseurl}/css/cssstore`,this.appendtoken())

}
qpgetangular(){
  return this.http.get(`${this.baseurl}/angulars/angularstore`,this.appendtoken())

}
login(regno:any,pswd:any){
  const body={
    regno,
    pswd
  }
  return this.http.post(`${this.baseurl}/login`,body)
}

// function add token to header

}
