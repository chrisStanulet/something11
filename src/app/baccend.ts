import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpUrlEncodingCodec } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private httpClient: HttpClient) { }

  SERVER_URL: string = "http://10.70.6.70/"

  public sendMath(data:string) {
    console.log("sending");
    data=encodeURIComponent(data)
    let uploadURL = `${this.SERVER_URL}api/solveAlg?equation=12x%2B5%3D15x-7`;
    return this.httpClient.post<string>(uploadURL, data);
  }
}