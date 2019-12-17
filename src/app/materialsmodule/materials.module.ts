import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class MaterialsModule{ }
