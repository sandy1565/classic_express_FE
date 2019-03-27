import { Injectable } from '@angular/core';

@Injectable()
export class SidebarAdminService {

  adminSidebarVisible: boolean;

  constructor() { this.adminSidebarVisible = true; }

  hide() { this.adminSidebarVisible = false; }

  show() { this.adminSidebarVisible = true; }

  toggle() { this.adminSidebarVisible = !this.adminSidebarVisible; }
}
