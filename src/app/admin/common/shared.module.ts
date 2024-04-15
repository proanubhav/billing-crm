import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})
export class SharedModule { }