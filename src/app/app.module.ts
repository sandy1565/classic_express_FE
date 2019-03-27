/* Core Components  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';


/*  SERVICES  */
import { NavbarUserService } from './services/navbar-user.service';
import { SidebarAdminService } from './services/sidebar-admin.service';
import { SidebarSuperadminService } from './services/sidebar-superadmin.service';
import { DataCourierService } from './services/CourierDataService';
import { DataAdminService } from './services/AdminDataService';
import { DataUserService } from './services/UserDataService';
import {LogService} from './services/LoginService';
import {userDashboard} from './services/UserDashService';
import { adminDashboard} from './services/AdminDashService';
import {LocalAssets} from './services/LocalDataService';
import { AuthGuard } from './services/AuthGuard';

/*  PIPES  */

//Super Admin Pipe
import { AdminPipe, UserPipe, BookPipe, PymentPipe } from './gpipe.pipe';

/*  COMPONENTS  */

/*  Index Components  */

import { HomeComponent } from './components/index/home/home.component';
import { AboutUsComponent } from './components/index/about-us/about-us.component';
import { ErrorComponent } from './components/index/error/error.component';
import { FaqComponent } from './components/index/faq/faq.component';
import { NavbarComponent } from './components/index/navbar/navbar.component';
import { ContactUsComponent } from './components/index/contact-us/contact-us.component';
import { LoginComponent } from './components/index/login/login.component';
import { RegisterComponent } from './components/index/register/register.component';
import { QtrackComponent } from './components/index/qtrack/qtrack.component';
import { UnAuthComponent } from './components/index/un-auth/un-auth.component';

/*  Admin Components  */

import { DashboardAdminComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminAddcourierComponent } from './components/admin/manage-couriers/addcourier/addcourier.component';
import { AdminShowcourierComponent } from './components/admin/manage-couriers/showcourier/showcourier.component';
import { AdminCreateuserComponent } from './components/admin/manage-users/createuser/createuser.component';
import { AdminShowuserComponent } from './components/admin/manage-users/showuser/showuser.component';
import { SidebarAdminComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminPassComponent } from './components/admin/admin-pass/admin-pass.component';

/*  Superadmin Components  */

import { DashboardSuperadminComponent } from './components/superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminCreateadminComponent } from './components/superadmin/manage-admins/createadmin/createadmin.component';
import { SuperadminShowadminComponent } from './components/superadmin/manage-admins/showadmin/showadmin.component';
import { SuperadminCreateuserComponent } from './components/superadmin/manage-users/createuser/createuser.component';
import { SuperadminShowuserComponent } from './components/superadmin/manage-users/showuser/showuser.component';
import { SuperadminAddcourierComponent } from './components/superadmin/manage-couriers/addcourier/addcourier.component';
import { SuperadminShowcourierComponent } from './components/superadmin/manage-couriers/showcourier/showcourier.component';
import { SuperadminShowpaymentComponent } from './components/superadmin/manage-payments/showpayment/showpayment.component';
import { SidebarSuperadminComponent } from './components/superadmin/superadmin-sidebar/superadmin-sidebar.component';


/* User Components */
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { CbookingComponent } from './components/user/cbooking/cbooking.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PasschangeComponent } from './components/user/passchange/passchange.component';
import { TrackreportComponent } from './components/user/trackreport/trackreport.component';

@NgModule({
    declarations: 
        [           AppComponent,
                //Pipes
                    AdminPipe, UserPipe, BookPipe, PymentPipe,
                //Index
                    HomeComponent,
                    AboutUsComponent,
                    ErrorComponent,
                    FaqComponent,
                    NavbarComponent,
                    ContactUsComponent,
                    LoginComponent,
                    RegisterComponent,
                    QtrackComponent,
                
                //Admin
                    DashboardAdminComponent,
                    AdminAddcourierComponent,
                    AdminShowcourierComponent ,
                    AdminCreateuserComponent,
                    AdminShowuserComponent,
                    SidebarAdminComponent,
                    AdminPassComponent,

                //Superadmin
                    DashboardSuperadminComponent,
                    SuperadminCreateadminComponent,
                    SuperadminShowadminComponent,
                    SuperadminCreateuserComponent,
                    SuperadminShowuserComponent,
                    SuperadminAddcourierComponent,
                    SuperadminShowcourierComponent,
                    SuperadminShowpaymentComponent,
                    SidebarSuperadminComponent,

                //User
                    UserDashboardComponent, 
                    OrdersComponent, 
                    CbookingComponent, 
                    ProfileComponent, 
                    PasschangeComponent, 
                    TrackreportComponent, UnAuthComponent
        ],
  
    imports: 
        [BrowserModule,HttpModule,routing,RouterModule,ChartsModule,FormsModule],

    /* Global Services */
    providers:
        [
            NavbarUserService,SidebarAdminService,SidebarSuperadminService,
            DataAdminService,DataCourierService, DataUserService,
            LogService, userDashboard, LocalAssets, AuthGuard
        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
