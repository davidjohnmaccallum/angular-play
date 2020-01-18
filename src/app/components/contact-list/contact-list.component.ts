import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/models/contact.service';
import { Contact } from 'src/app/models/contact';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  totalContacts: number;
  displayedColumns: string[] = ['picture', 'firstName', 'lastName', 'email'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private contactService: ContactService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.contactService.list(0, 10).then((res) => {
      this.contacts = res.contacts;
      this.totalContacts = res.totalCount;
    });

  }

  onPaginate(event: PageEvent) {
    console.log("onPaginate", event);
    this.contactService.list(event.pageIndex, event.pageSize).then((res) => {
      this.contacts = res.contacts;
      this.totalContacts = res.totalCount;
    });

  }


}
