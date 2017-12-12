// Agnular
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

//City autocomplete
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

//With maps
import { AgmCoreModule } from '@agm/core';



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
import { UserService } from './services/user.service';


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
import { MapAutocompletePlacesComponent } from './components/map-autocomplete-places/map-autocomplete-places.component';
import { MapAutocompleteCitiesComponent } from './components/map-autocomplete-cities/map-autocomplete-cities.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { SignleUserComponent } from './pages/signle-user/signle-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapAllConnectionsComponent } from './components/map-all-connections/map-all-connections.component';
import { MapAllMyTipsComponent } from './components/map-all-my-tips/map-all-my-tips.component';
import { MapConnectionTipsDestinationComponent } from './components/map-connection-tips-destination/map-connection-tips-destination.component';
import { PlacesListEditorComponent } from './components/places-list-editor/places-list-editor.component';

// Router
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' , canActivate: [RequestUser] },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', canActivate: [RequireAnonGuard], component: LoginPageComponent },
  { path: 'auth/signup', canActivate: [RequireAnonGuard], component: SignupPageComponent },
  { path: 'profile', canActivate: [RequireAuthGuard], component: ProfilePageComponent },
  { path: 'profile/edit', canActivate: [RequireAuthGuard], component: EditProfileComponent },
  { path: 'connections', canActivate: [RequireAuthGuard], component: ConnectionListComponent },
  { path: 'connections/:id', canActivate: [RequireAuthGuard], component: SingleConnectionComponent },
  { path: 'posts', canActivate: [RequireAuthGuard], component: PostListComponent },
  { path: 'add', canActivate: [RequireAuthGuard], component: AddTipComponent },
  { path: 'tips',  component: SingleTipComponent },
  { path: 'tips/:id',  component: SingleTipIdComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'destination/:id',  component: DestinationDetailsComponent },
  { path: 'users',  component: AllUsersComponent },
  { path: 'users/:id',  component: SignleUserComponent },
  
  
  
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
    MapAutocompletePlacesComponent,
    MapAutocompleteCitiesComponent,
    AllUsersComponent,
    SignleUserComponent,
    FooterComponent,
    MapAllConnectionsComponent,
    MapAllMyTipsComponent,
    MapConnectionTipsDestinationComponent,
    PlacesListEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng4GeoautocompleteModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDR3bs8bskPY1F7d0bFMvaiQ9J3s9bq16I",
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [
    AuthService,
    TipService,
    UserService,
    RequireAuthGuard,
    RequireAnonGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }