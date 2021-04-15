import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Forms} from '../forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('form1') form1!: NgForm;
  forms!: Forms;

  constructor() {
  }

  ngOnInit(): void {
    this.forms = {
      form2: {
        name: 'form2',
        form21: {
          name: 'form21'
        },
        form22: {
          name: 'form22'
        },
        form3: {
          name: 'form3',
          form31: {
            name: 'form31'
          }
        },
        form4: {
          name: 'form4',
          form41: {
            name: 'form41'
          }
        }
      }
    };

    setTimeout(() => {
      this.form1.setValue(this.forms);
    });
  }

  onSubmit(): void {
    console.log(this.form1.value);
  }

}
