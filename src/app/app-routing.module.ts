import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionProgramsListByStateComponent } from './ElectionProgram/ElectionProgramList/election-programs-list-by-state/election-programs-list-by-state.component';

const routes: Routes = [
  { path: '', component: ElectionProgramsListByStateComponent },
  { path: 'ElectionProgramsList', component: ElectionProgramsListByStateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
