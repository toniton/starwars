import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Services
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';

// Modules
import { CoreModule } from './core/core.module';
import { GuardsModule } from './guards/guards.module';
import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './services/services.module';
import { WidgetsModule } from './widgets/widgets.module';
import { AlertService } from './widgets/alert/alert.service';
import { DirectivesModule } from './directives/directives.module';

export function getAuthServiceConfigs() {
    // TODO: move key to config
    const config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('916269502837-k1ngpanseef3gd8cted87kgk24nikoeg.apps.googleusercontent.com')
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('341103606397398')
        }
    ]);
    return config;
}

@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        SocialLoginModule,
        CoreModule,
        DirectivesModule,
        GuardsModule,
        ResolversModule,
        WidgetsModule,
        ServicesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AlertService,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
