import { Injectable } from '@angular/core';

@Injectable()
export class SidebarSuperadminService {

 superadminSidebarVisible: boolean;

  constructor() { this.superadminSidebarVisible = true; }

  hide() { this.superadminSidebarVisible = false; }

  show() { this.superadminSidebarVisible = true; }

  toggle() { this.superadminSidebarVisible = !this.superadminSidebarVisible; }

}
