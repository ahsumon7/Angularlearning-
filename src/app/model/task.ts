export interface ITask {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    completedOn: Date | null;
  }
  

export interface ApiResponceModel{
    message: string;
    result: string;
    data: any;
}