import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpUrlEncodingCodec } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';
import { Answer } from '../app/answer'



@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private httpClient: HttpClient) { }

  //SERVER_URL: string = "http://10.70.6.70/api/solveAlg?equation="
  SERVER_URL: string = "http://192.168.50.233/api/solveAlg?equation="
  

  public sendMath(data:string) {
    console.log("sending");
    data=encodeURIComponent(data)
    let uploadURL = `${this.SERVER_URL}`+data;
    console.log(uploadURL);

    let stuff = this.httpClient.get<Answer>(uploadURL).subscribe((answer:Answer)=> 
    console.log(answer.ans));
    return stuff;
  }
}