import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyimageComponent } from './components/lazyimage/lazyimage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LazyimageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyimageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
