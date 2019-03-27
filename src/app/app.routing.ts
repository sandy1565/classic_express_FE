import { CanActivate,RouterModule , Routes } from "@angular/router";

/*Auth Service*/
import {AuthGuard} from './services/AuthGuard';

/* Index Components  */
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

const APP_ROUTES:Routes=
[

//Index Routes
{ path:'' , component: HomeComponent } ,
{ path:'contact-us' , component: ContactUsComponent } ,
{ path:'about-us' , component: AboutUsComponent } ,
{ path:'faq' , component: FaqComponent } ,
{ path: 'login', component: LoginComponent},
{path:'uregister',component:RegisterComponent},
{ path:'error' , component: ErrorComponent } ,
{path:'qTrack', component: QtrackComponent,  canActivate:[AuthGuard]} ,
{path:'unAuth', component:UnAuthComponent},


//Admin Routes
    {
    path:'admin', canActivate:[AuthGuard] ,children:    
        [
            {
                path:'', component:DashboardAdminComponent,
            },
            {
                path:'createuser',component:AdminCreateuserComponent,
            },
            {
                path:'showuser',component:AdminShowuserComponent,
            },
            {
                path:'addcourier',component:AdminAddcourierComponent,
            },
            {
                path:'showcourier',component:AdminShowcourierComponent,
            },
            {
                path:'changePass' , component:AdminPassComponent,
            }
        ]
    },


//Superadmin routes
    {
    path:'master489912User_@postTrack' ,children:
        [
            {
                path:'',component:DashboardSuperadminComponent,
            },
            {
                path:'createadmin',component:SuperadminCreateadminComponent,
            },
            {
                path:'showadmin',component:SuperadminShowadminComponent,
            },
            {
                path:'createuser',component:SuperadminCreateuserComponent,
            },
            {
                path:'showuser',component:SuperadminShowuserComponent,
            },
            {
                path:'addcourier',component:SuperadminAddcourierComponent,
            },
            {
                path:'showcourier',component:SuperadminShowcourierComponent,
            },
            {
                path:'payments',component:SuperadminShowpaymentComponent,
            }
        ]
    },

    //User Routes
    {
        path:'user', canActivate:[AuthGuard] , component:UserDashboardComponent , children:
        [
            {
                path:'', component:OrdersComponent
            },
            {
                path:'userBookings', component:CbookingComponent
            },
            {
                path:'userProfile',component:ProfileComponent
            },
            {
                path:'userPchange', component:PasschangeComponent
            },
            {
                path:'userTrackRepo', component:TrackreportComponent
            }
        ]
    },

    //Error Route
    { 
    path:'**' , redirectTo:'error' , pathMatch:'full' 
    }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
