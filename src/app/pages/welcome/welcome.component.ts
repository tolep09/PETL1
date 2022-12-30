import { Component, OnChanges, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements  OnInit {
  my_data: my_data[];
  longText = 'Hola mi nombre es Porfirio, soy de Cuautla Morelos y tengo 34 años';
  displayedColumns = ["Name", "Age", "IS", "City", "State"];

  constructor(private welcomeService: WelcomeService) {
    this.my_data = [];
  }

  ngOnInit(): void {
    this.welcomeService.getData().subscribe(
      data => {
        if (data.my_data) {
          this.my_data = data.my_data;
          
          console.log(this.my_data);
        }
      });
  }

}

interface my_data {
  name: string,
  age: number,
  IS: string,
  city: string,
  state: string
}
