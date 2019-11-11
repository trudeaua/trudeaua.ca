import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public year: Number;
  constructor(private router: Router) { 
    this.year = new Date().getFullYear();
  }

  public openPrivacyPolicy(): void {
    this.router.navigate(['privacy']);
  }
}
