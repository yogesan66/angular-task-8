import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular ' + VERSION.major;

  public result:string = ""

  click1(){
    this.result = "Vegan salad";
  }

  click2(){
    this.result = "Chicken wings and fries"
  }

}
