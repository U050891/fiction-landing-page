import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalHeaderComponent } from "../global-header/global-header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, GlobalHeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
