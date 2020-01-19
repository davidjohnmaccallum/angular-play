import { Component, OnInit, Inject } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private contact: Contact,
    public dialogRef: MatDialogRef<ContactFormComponent>) { }

  ngOnInit() {
    console.log('ngOnInit', this.contact);
    this.contactForm = new FormGroup({
      firstName: new FormControl(this.contact.firstName, [Validators.required]),
      lastName: new FormControl(this.contact.lastName, [Validators.required]),
      email: new FormControl(this.contact.email, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log('onSubmit', this.contactForm.value);
    this.dialogRef.close({
      ...this.contact,
      ...this.contactForm.value,
    });
  }

}
