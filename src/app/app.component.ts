import { Component, OnInit } from '@angular/core';

// import jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  title = 'TODO APP';

  ngOnInit (): void {}

}
