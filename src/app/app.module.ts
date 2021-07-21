import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

@NgModule({
  declarations: [AppComponent, ProgressBarComponent, ButtonToggleComponent],
  imports: [
      BrowserModule, 
      BrowserAnimationsModule, 
      MatProgressBarModule,
			MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
