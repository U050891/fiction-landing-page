import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, HostListener, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {
  @Input() pushContent: boolean = false;

  links = [
    { key: 'HOME', link: '/home' },
    // { key: 'CATÁLOGO', link: '/catalogue' },
    { key: 'SERVICIOS', link: '/services' },
    { key: 'NOSOTROS', link: '/about-us' },
    { key: 'CONTACTO', link: '/contact' },
  ];
  showMenu = false;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  isCurrentLink(path: string): boolean {
    return this.router.url.startsWith(path);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.cd.detectChanges();
  }

  onLinkClicked() {
    this.showMenu = false;
    this.cd.detectChanges();
  }
}
