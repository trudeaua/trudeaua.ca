import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    /**
     * Indicates if the navbar is expanded or not
     */
  public isExpanded: boolean = false;

    /**
     * collapse the navbar
     * */
  public collapse() {
    this.isExpanded = false;
  }
    ngOnInit() {
    }
    /**
     * toggle the navbar expansion
     **/
  public toggle() {
    this.isExpanded = !this.isExpanded;
    }

    /**
     * Scroll to a section
     * @param id id of the section
     */
    public scrollToSection(id: string) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
}
