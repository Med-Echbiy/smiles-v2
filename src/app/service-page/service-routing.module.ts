import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServiceComponent } from './our-service/our_service.component';
const route: Routes = [{ path: '', component: OurServiceComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class serviceRoutingModule {}
