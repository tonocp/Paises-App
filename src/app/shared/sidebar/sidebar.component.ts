import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [
        `
      li {
        cursor: pointer;
      }
    `
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SidebarComponent {

  constructor() { }

  

}
