import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { SharedMaterialsModule } from "./shared-material.module";

import { DaterangePickerComponent } from "./ang.daterange.picker.component";
import { DatePickerComponent } from "./ang.datepicker.component";

export * from "./ang.daterange.picker.component";

@NgModule({
  declarations: [DaterangePickerComponent, DatePickerComponent],
  exports: [DaterangePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedMaterialsModule
  ]
})
export class DaterangePickerModule {}
