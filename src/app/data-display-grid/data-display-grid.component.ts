import { Component } from '@angular/core';

@Component({
  selector: 'app-data-display-grid',
  templateUrl: './data-display-grid.component.html',
  styleUrls: ['./data-display-grid.component.css']
})
export class DataDisplayGridComponent {
  timeSlots: string[] = [];

  constructor() {
    this.generateTimeSlots();
    this.generateUIArray();
  }

  outputlist : any[][]= [[]];

 inputList: any[] =[
  {
    "activityName": "Activity 1",
    "startTime": "2024-05-08T08:00:00",
    "endTime": "2024-05-08T09:45:00",
    "type": "scheduled"
  },
  {
    "activityName": "Activity 2",
    "startTime": "2024-05-08T10:15:00",
    "endTime": "2024-05-08T11:00:00",
    "type": "busy"
  },
  {
    "activityName": "Activity 3",
    "startTime": "2024-05-08T11:30:00",
    "endTime": "2024-05-08T12:15:00",
    "type": "scheduled"
  },
  {
    "activityName": "Activity 4",
    "startTime": "2024-05-08T08:45:00",
    "endTime": "2024-05-08T09:30:00",
    "type": "busy"
  },
  // {
  //   "activityName": "Activity 5",
  //   "startTime": "2024-05-08T09:00:00",
  //   "endTime": "2024-05-08T09:45:00",
  //   "type": "scheduled"
  // },
  // {
  //   "activityName": "Activity 6",
  //   "startTime": "2024-05-08T09:15:00",
  //   "endTime": "2024-05-08T10:00:00",
  //   "type": "busy"
  // },
  // {
  //   "activityName": "Activity 7",
  //   "startTime": "2024-05-08T09:30:00",
  //   "endTime": "2024-05-08T10:15:00",
  //   "type": "scheduled"
  // },
  // {
  //   "activityName": "Activity 8",
  //   "startTime": "2024-05-08T09:45:00",
  //   "endTime": "2024-05-08T10:30:00",
  //   "type": "busy"
  // },
  // {
  //   "activityName": "Activity 9",
  //   "startTime": "2024-05-08T10:00:00",
  //   "endTime": "2024-05-08T10:45:00",
  //   "type": "scheduled"
  // },
  // {
  //   "activityName": "Activity 10",
  //   "startTime": "2024-05-08T10:15:00",
  //   "endTime": "2024-05-08T11:00:00",
  //   "type": "busy"
  // }
]

 
 intersects(e1:any, e2:any) {
    return (new Date(e1?.startTime) >= new Date(e2?.startTime) && new Date(e1?.startTime) < new Date(e2?.endTime)) || (new Date(e2?.startTime) >= new Date(e1?.startTime) && new Date(e2?.startTime) < new Date(e1?.endTime))
}
 
// [
//     [{ activityName : "asdf", startTime : 1 , endTime : 4}, { activityName : "asdf", startTime : 5 , endTime : 6},{ activityName : "asdf", startTime : 9 , endTime : 13}],
//     [{ activityName : "asdf", startTime : 5 , endTime : 7}, { activityName : "asdf", startTime : 11 , endTime : 15}]
// ]


generateUIArray(){
  for(let element of this.inputList) {
    let placed = false;
    for(let row of this.outputlist) {
        let intFlag = false;
        for(let existingElemetn of row) {
            intFlag ||= this.intersects(element, existingElemetn);
        }
        if(!intFlag) {
            row.push(element);
            placed = true;
            break;
        }
    }
    if(!placed) {
        this.outputlist.push([element]);
    }
}

this.outputlist.forEach(el => el.map(act => this.getActivityStyle(act)))

console.log(JSON.stringify(this.outputlist, null, 2));

 
// [
//     [{ activityName : "asdf", startTime : 1 , endTime : 4}, { activityName : "asdf", startTime : 5 , endTime : 6},{ activityName : "asdf", startTime : 9 , endTime : 13}],
//     [{ activityName : "asdf", startTime : 5 , endTime : 7}, { activityName : "asdf", startTime : 11 , endTime : 15}]
// ]
 
}

  generateTimeSlots() {
    for (let hour = 8; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const startTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const endTime = `${(minute + 15).toString() == "60" ? (hour+1).toString().padStart(2, '0') :hour.toString().padStart(2, '0')}:${(minute + 15).toString() == "60" ? "00":(minute + 15).toString().padStart(2, '0')}`;
        this.timeSlots.push(`${startTime}-${endTime}`);
      }
    }
  }

  getActivityStyle(activity:any ) {

    let startTime: string =  activity.startTime;
    let endTime: string = activity.endTime;
    const startMinutes = this.getMinutesFromTimeString(startTime);
    const endMinutes = this.getMinutesFromTimeString(endTime);
    const today = new Date();
    today.setHours(8, 30, 0, 0);
    const diff = (new Date(startTime).getTime() - today.getTime());
    let differenceInMinutes = Math.round(diff / (1000 * 60));

    differenceInMinutes /= 15;
    const pxPer15Minutes = 140;
    let left = (differenceInMinutes+2)*pxPer15Minutes;
    let diff2 = new Date(endTime).getTime() - new Date(startTime).getTime()
    let difference2InMinutes = Math.round(diff2 / (1000 * 60));

    difference2InMinutes /= 15;
    let width = (difference2InMinutes)*pxPer15Minutes;
    //const left = (startMinutes / 15) * pxPer15Minutes;
    //const width = ((endMinutes - startMinutes) / 15) * pxPer15Minutes;

    activity.left = `${left}px`;
    activity.width = `${width}px`;

    return activity;
}

getMinutesFromTimeString(timeString: string): number {
    let hours = new Date(timeString).getHours();
    let minutes = new Date(timeString).getMinutes();
    console.log("hrs - ", hours, "mins - ", minutes)
    return hours * 60 + minutes;
}

 
}

