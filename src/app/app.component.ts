import { Component } from '@angular/core';
import { BackService } from '../app/baccend'
import { send } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fend';
  public mathsss: string;
  constructor(public bacc: BackService) {};



  send(){
    this.bacc.sendMath(this.mathsss);
  }

}

