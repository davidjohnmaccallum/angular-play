import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss']
})
export class ErrorInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private error: Error) { }

  ngOnInit() {
  }

}
