// Agnular
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

//City autocomplete
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';


import { AppComponent } from './app.component';

// Fileupload
import { FileUploadModule } from "ng2-file-upload";

// Guards
import { RequireAuthGuard } from './guards/require-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequestUser } from './guards/request-user.guard';

// Services
import { AuthService } from './services/auth.service';
import { TipService } from './services/tip.service';


// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddTipComponent } from './pages/add-tip/add-tip.component';



// Components
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ConnectionListComponent } from './components/connection-list/connection-list.component';
import { SingleConnectionComponent } from './components/single-connection/single-connection.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SingleTipComponent } from './pages/single-tip/single-tip.component';
import { SingleTipIdComponent } from './pages/single-tip-id/single-tip-id.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';

// Router
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' , canActivate: [RequestUser] },
  { path: 'auth/login', canActivate: [RequireAnonGuard], component: LoginPageComponent },
  { path: 'auth/signup', canActivate: [RequireAnonGuard], component: SignupPageComponent },
  { path: 'profile', canActivate: [RequireAuthGuard], component: ProfilePageComponent },
  { path: 'profile/edit', canActivate: [RequireAuthGuard], component: ProfilePageComponent },
  { path: 'connections', canActivate: [RequireAuthGuard], component: ConnectionListComponent },
  { path: 'connections/:id', canActivate: [RequireAuthGuard], component: SingleConnectionComponent },
  { path: 'posts', canActivate: [RequireAuthGuard], component: PostListComponent },
  { path: 'add', canActivate: [RequireAuthGuard], component: AddTipComponent },
  { path: 'tips', canActivate: [RequireAuthGuard], component: SingleTipComponent },
  { path: 'tips/:id', canActivate: [RequireAuthGuard], component: SingleTipIdComponent },
  { path: 'destination', canActivate: [RequireAuthGuard], component: DestinationComponent },
  { path: 'destination/:id', canActivate: [RequireAuthGuard], component: DestinationDetailsComponent },
  
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    EditProfileComponent,
    ConnectionListComponent,
    SingleConnectionComponent,
    PostListComponent,
    AddTipComponent,
    SingleTipComponent,
    SingleTipIdComponent,
    HeaderComponent,
    HomeComponent,
    DestinationComponent,
    DestinationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng4GeoautocompleteModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [
    AuthService,
    TipService,
    RequireAuthGuard,
    RequireAnonGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }