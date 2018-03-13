import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";

const matModules = [MatButtonModule, MatInputModule, MatCardModule];

@NgModule({
  declarations: [],
  exports: [...matModules],
  imports: [...matModules]
})
export class SharedMaterialsModule {}
