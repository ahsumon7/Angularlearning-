import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor, *ngIf
import { MasterService } from '../Service/master.service';
import { ApiResponceModel, ITask, Task } from './model/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,], // ✅ This fixes the issue
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskObj : Task = new Task();
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

  addTask(){
    this.masterService.addNewTask(this.taskObj).subscribe((res: ApiResponceModel)=>{
    if(res.result){
      alert('task created sucessfully');
      this.loadAllTask();
      this.taskObj = new Task();
    }
    }
  ,error=> {
    alert('API call error')
  })
  }



  onEdit(item: ITask) {
    this.taskObj = Object.assign(new Task(), item);
  
  
  
    setTimeout(() => {
      const dat = new Date(this.taskObj.dueDate);
      const day = ('0' + dat.getDate()).slice(-2);
      const month = ('0' + (dat.getMonth() + 1)).slice(-2);
      const today = dat.getFullYear() + '-' + month + '-' + day;
  
      const input = <HTMLInputElement>document.getElementById('textDate');
      if (input) {
        input.value = today;
      }
    }, 1000);
    console.log('Editing Task ID:', this.taskObj.itemId);
  }
  updateTask() {
    this.masterService.updateTask(this.taskObj).subscribe(
      (res: ApiResponceModel) => {
        if (res.result) {
          alert('Task Updated Successfully');
          this.loadAllTask(); // fixed function name
          this.taskObj = new Task(); // reset form
        }
      },
      error => {
        alert('API Call Error');
      }
    );
  }
  onDelete(id: number) {
    const isConfirm = confirm("Are you sure you want to delete?");
    if (isConfirm) {
      this.masterService.deleteTask(id).subscribe(
        (res: ApiResponceModel) => {
          if (res.result) {
            alert('Task Deleted Successfully');
            this.loadAllTask();
          }
        },
        error => {
          alert('API Call Error');
        }
      );
    }
  }
  

 
}
