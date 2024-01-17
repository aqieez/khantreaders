import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteFooterComponent,
    ModalComponent
  ],
  exports: [
    SiteHeaderComponent,
    SiteFooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
