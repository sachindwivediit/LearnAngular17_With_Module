import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  title = 'Sample Angular 17 App';
  workingHours: number = 9;
  IsActive: boolean = true;
  salary: number = 3000.59;
  imgUrl: string = "assets/logo.png";
  name: string = "";
  btnClick(): void {
    this.salary = 10000.40;
  }

  course = ["ASP.NET", "C#.NET", "SQL Server", 1];

  subject = [
    {
      subcode: 101,
      name: "Asp.Net Core"
    },
    {
      subcode: 102,
      name: "Microservice"
    },
    {
      subcode: 103,
      name: "C#"
    },
    {
      subcode: 104,
      name: "Entity Framework"
    },
    {
      subcode: 105,
      name: "Angular 17"
    },
  ];

  isShowButton : boolean = false;

  onShowButton() : void{
    this.isShowButton = !this.isShowButton;
  }
}
