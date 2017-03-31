import {NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toastr.service'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {CreateEventComponent} from './events/create-event.component'
import {Error404Component} from './errors/404.component'
import {appRoutes} from './routes'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'

@NgModule ({
    imports: [BrowserModule,
             RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
                  EventsListComponent,
                  EventThumbnailComponent,
                   EventDetailsComponent,
                   CreateEventComponent,
                   Error404Component,
                  NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService, EventRouteActivator]
})
 export class AppModule {}