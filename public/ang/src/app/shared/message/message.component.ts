import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [ MessageService ]
})
export class MessageComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.msgs = [];
    // this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }
}
