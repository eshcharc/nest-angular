import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'tip-app'}),
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'Backend',
      useValue: environment.api
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
