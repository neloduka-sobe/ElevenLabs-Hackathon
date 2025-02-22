import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,MatMenuModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

constructor(private router: Router){}

  onUpload(): void {
    this.router.navigate(['/upload']);
  }

  onFind(): void {
    this.router.navigate(['/search']);
  }
}
