import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';


//define routes here
const routes: Routes = [
  {path : 'directory' , component : DirectoryComponent},
  { path: 'directory/:ninja', component: DirectoryComponent },
  {path :'', component : HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  exports: [RouterModule],

  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  
})


export class AppModule { }
