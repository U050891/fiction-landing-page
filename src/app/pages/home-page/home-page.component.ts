import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundVideo') videoRef!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngOnInit() {
    // Handle route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.playVideo();
      });
  }

  ngAfterViewInit() {
    this.playVideo();
  }

  playVideo() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.currentTime = 0;
    
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn('Video playback failed:', error);
        // Try again with user interaction fallback
        document.addEventListener('click', () => video.play(), { once: true });
      });
    }
  }
}
