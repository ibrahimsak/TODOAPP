import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=[
    {description:'Kahvaltı',action:'no'},
    {description:'Sinema',action:'no'},
    {description:'Spor',action:'no'},
    {description:'Ders Çalış',action:'no'}
  ];
}
