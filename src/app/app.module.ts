import { NgModule, ViewContainerRef } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
// import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { UserService } from './userservice/user.service';
import { MessageService } from './userservice/message.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Broadcaster} from './broadcaster';
import { SearchPipe} from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubCategoryComponent } from './subcategories/subcategories.component'; 
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsnConditionsComponent } from './terms/terms.component';
import { HelpComponent } from './help/help.component';
import { GuideComponent } from './guide/guide.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CmsComponent } from './cms/cms.component';
import { JsonCreatorComponent } from './json-creator/json-creator.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CategoryComponent } from './categories/categories.component'; 
import { karaokeComponent } from './karaoke/karaoke.component'; 
import { AuthGuard } from './guards/index';
// import { ToastOptions } from 'ng2-toastr'; //angular-toastr
import { ToastrModule } from 'ngx-toastr';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { CKEditorModule } from 'ng2-ckeditor';
import { SubCategoriesModule } from './subcategories/subcategories.module';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
// import { LoaderComponent } from './loader/loader.component';
// import { LoaderService } from './loader/loader.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    AboutComponent,    
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AdduserComponent,    
    ChangepasswordComponent,
    ForgotpasswordComponent,
    CategoryComponent,
    SubCategoryComponent,
    karaokeComponent,
    CmsComponent,
    JsonCreatorComponent,
    PrivacyComponent,
    TermsnConditionsComponent,
    HelpComponent,
    FaqComponent,
    GuideComponent
   ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    HttpClientModule,
    CKEditorModule,
    TruncateModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes, { useHash: true }),
    SubCategoriesModule,
    ToastrModule.forRoot()
  ], 
  providers: [
    Broadcaster,
    UserService, 
    MessageService,
    DatePipe,
    AuthGuard,
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}
