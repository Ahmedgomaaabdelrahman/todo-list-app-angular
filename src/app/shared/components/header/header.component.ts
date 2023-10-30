import { Component, Renderer2 } from '@angular/core';
import { TaskService } from 'src/app/Tasks/services/task-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isRTL: boolean | undefined;
  
  constructor(private renderer: Renderer2, private taskService: TaskService) {
  }
  
  toggleDirection() {
    this.isRTL = !this.isRTL;
    this.taskService.isRTLDirection.next(this.isRTL)
    if (this.isRTL) {
      this.renderer.setAttribute(document.body, 'dir', 'rtl');
    } else {
      this.renderer.setAttribute(document.body, 'dir', 'ltr');
    }
  }
}
