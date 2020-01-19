import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/models/contact.service';
import { Contact } from 'src/app/models/contact';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorInfoComponent } from '../error-info/error-info.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  totalContacts: number;
  pageSize = 10;
  pageIndex = 0;
  displayedColumns: string[] = ['picture', 'firstName', 'lastName', 'email', 'actions'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private contactService: ContactService, private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.contactService.list(this.pageIndex, this.pageSize).then((res) => {
      this.contacts = res.contacts;
      this.totalContacts = res.totalCount;
    }).catch(error => {
      this.dialog.open(ErrorInfoComponent, {
        width: '600px',
        data: error
      });
    });
  }

  onPaginate(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.refreshList();
  }

  add() {
    console.log('add');
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe((result: Contact) => {
      if (!result) { return; }
      this.contactService.create(result).then(() => {
        this.refreshList();
      }).catch(error => {
        this.dialog.open(ErrorInfoComponent, {
          width: '600px',
          data: error
        });
      });
    });
  }

  update(contact: Contact) {
    console.log('update', contact);
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '600px',
      data: contact,
    });
    dialogRef.afterClosed().subscribe((result: Contact) => {
      if (!result) { return; }
      this.contactService.update(result).then(() => {
        this.refreshList();
      }).catch(error => {
        this.dialog.open(ErrorInfoComponent, {
          width: '600px',
          data: error
        });
      });
    });
  }

}
