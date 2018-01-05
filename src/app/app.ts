import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty';
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        EmptyComponent
    ],
    declarations: [
        EmptyComponent
    ],
    providers: [
    ],
})
export class EmptyModule { }

