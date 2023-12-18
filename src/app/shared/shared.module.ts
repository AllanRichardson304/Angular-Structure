import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    NgZorroAntdModule,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ],
})
export class SharedModule { }
