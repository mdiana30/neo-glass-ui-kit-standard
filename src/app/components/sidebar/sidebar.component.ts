import { Component } from '@angular/core';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: SidebarItem[] = [
    { label: 'Buttons', icon: 'fas fa-hand-pointer', route: '/buttons' },
    { label: 'Cards', icon: 'fas fa-clone', route: '/cards' },
    { label: 'Alerts', icon: 'fas fa-exclamation-triangle', route: '/alerts' },
    { label: 'Modals', icon: 'fas fa-window-maximize', route: '/modals' },
    { label: 'Forms', icon: 'fas fa-edit', route: '/forms' },
    { label: 'Inputs', icon: 'fas fa-keyboard', route: '/inputs' },
    { label: 'Tabs', icon: 'fas fa-columns', route: '/tabs' },
    { label: 'Tooltips', icon: 'fas fa-info-circle', route: '/tooltips' }
  ];
}
