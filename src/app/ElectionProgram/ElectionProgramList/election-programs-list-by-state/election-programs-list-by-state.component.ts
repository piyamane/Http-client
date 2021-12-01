import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ElectionProgram } from 'src/app/model/ElectionProgram';
import { ElectionProgramService } from '../../service/election-program.service';

@Component({
  selector: 'app-election-programs-list-by-state',
  templateUrl: './election-programs-list-by-state.component.html',
  styleUrls: ['./election-programs-list-by-state.component.css']
})
export class ElectionProgramsListByStateComponent implements OnInit {

  @Output() click = new EventEmitter<void>();

   electionProgram: ElectionProgram[] = [];
  constructor(private electionProgramService: ElectionProgramService) { }
  
 
  ngOnInit() {
    this.getElectionProgramsByState();
  }
  getElectionProgramsByState(){
    debugger
   let stateId= 27;
    this.getElectionProgramsByStateId(stateId);
  }
  getElectionProgramsByStateId(stateId: any){
    debugger
    this.electionProgramService.getElectionProgramByStateId(stateId)
      .subscribe(
        data => {
          debugger
          this.electionProgram= data['response'];
          console.log("api response- ", this.electionProgram);
        },
        error => {
          console.log(error);
        });
  }

  onClickEvent(){
    this.click.emit();

  }
}
