import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //This is an in-line style below, the above line would reference .css file
  styles: [`h3{
    color: green;
  }`]
})



export class AppComponent {
}
