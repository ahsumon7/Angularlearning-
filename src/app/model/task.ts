export interface ITask {
  itemId: number;
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  completedOn: Date | null;
}

export class Task {
  itemId: number;
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  tags: string;
  completedOn: Date | null;

  constructor() {
    this.itemId = 0;
    this.taskDescription = '';
    this.completedOn = new Date();
    this.createdOn = new Date();
    this.isCompleted = false;
    this.tags = '';
    this.taskName = '';
    this.dueDate = new Date();
  }
}

export interface ApiResponceModel {
  message: string;
  result: string;
  data: any;
}
