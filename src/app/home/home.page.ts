import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  customHeaderFn(record, recordIndex, records) {
    if (recordIndex > 0) {
      if (record.name.charAt(0) !== records[recordIndex - 1].name.charAt(0)) {
        return record.name.charAt(0);
      } else {
        return null;
      }
    } else {
      return record.name.charAt(0);
    }
  }

}
