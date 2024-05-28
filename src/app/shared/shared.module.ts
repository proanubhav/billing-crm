import { NgModule } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ]
})
export class SharedModule { }
