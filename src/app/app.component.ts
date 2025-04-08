import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor, *ngIf
import { MasterService } from '../Service/master.service';
import { ApiResponceModel, ITask } from './model/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // ✅ This fixes the issue
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskList: ITask[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.masterService.getAllTaskList().subscribe((res: ApiResponceModel) => {
      this.taskList = res.data;
    });
  }

  trackByItemId(index: number, item: ITask): any {
    return item.itemId;
  }
}
