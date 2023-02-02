/* eslint-disable no-unused-vars */
import { json } from 'stream/consumers';
import { TASK } from '../../../mocks/tasks';
import { TaskStructure } from '../../../models/task';

const storeName: string = '';

localStorage.getItem(storeName);
// Se va a buscar esto, y si en el local storage hay algo con esta clave se lo trae

localStorage.setItem(storeName, 'value');
//

localStorage.removeItem(storeName);
// Lo mismo que el KEY pero borrandolo

export class TaskStorageRepo {
  constructor(public storeName: string = 'Tasks') {
  getTasks(): TaskStructure[] {
    const data = localStorage.getItem(this.storeName);
    if (!data) {
      this.setTasks(TASK);
      return TASK;
    }

    return JSON.parse(data);
  }

  setTasks(tasks: TaskStructure[]) {
    const data = JSON.stringify(tasks);
    localStorage.setItem(this.storeName, data);
  }

  removeTasks() {
    localStorage.removeItem(this.storeName);
  }
}

}

