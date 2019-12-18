import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule ,
    MatDialogModule
} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule
    ]
})
export class MaterialsModule{ }
