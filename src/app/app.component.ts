import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Sample Angular 17 App';
  workingHours : number = 9;
  IsActive :  boolean = true;
  salary : number = 3000.59;
  imgUrl:string = "assets/logo.png";
  name : string = "";
  btnClick() : void{
    this.salary = 10000.40;
  }
}
