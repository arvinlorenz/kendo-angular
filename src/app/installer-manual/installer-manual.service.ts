import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstallerManualService {
  $installerManualVersions = new BehaviorSubject<any[]>([]);
  constructor() {
    this.$installerManualVersions?.next(this.installerManualVersions);
  }
  installerManualVersions = [
    {
      text: 'Fri Feb 25 2021', items: [
          { text: '8:50:17 PM', value: '<h1>THIS IS A TEST 1</h1>' },
          { text: '7:50:17 PM', value: '<h1>THIS IS A TEST 2</h1>' },
          { text: '7:50:17 AM', value: '<h1>THIS IS A TEST 3</h1>' }
      ]
    },
    {
        text: 'Fri Feb 4 2021', items: [
          { text: '8:51:17 PM', value: '<h1>THIS IS A TEST FOr 1</h1>' },
          { text: '7:53:17 PM', value: '<h1>THIS IS A TEST FOr2</h1>' },
          { text: '7:43:17 AM', value: '<h1>THIS IS A TEST 3FOr</h1>' }
        ]
    },
    {
      text: 'Fri Feb 3 2021',
      items: [
        { text: '7:43:17 AM', value: '<h1>COVI</h1>' }
      ]
    }
  ]


  getVersions() {
    return this.$installerManualVersions?.asObservable();
  }
}
