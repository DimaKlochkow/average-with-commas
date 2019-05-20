import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
var numbers = prompt("Введите числа через запятую!");
var str = numbers.split(',');
console.log(str);
var sum = 0;
for(var i = 0; i < str.length; i++){
    sum += +str[i] / str.length;
}
console.log(sum);