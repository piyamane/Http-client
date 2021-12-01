import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { Election } from './Election';
import { ElectionProgram } from './model/ElectionProgram';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();
  constructor() {
    
}
  ngOnInit(): void {
    
    
  }

  onChange(){
     const Demo = 'demo';
     this.clicked.emit(Demo);

  }


}


  








function compareValidator(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

function isEmailValid(arg0: string) {
  throw new Error('Function not implemented.');
}

