import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-data-search',
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './data-search.component.html',
  styleUrl: './data-search.component.scss'
})
export class DataSearchComponent {

}
