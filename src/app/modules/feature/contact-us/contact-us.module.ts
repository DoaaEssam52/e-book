import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { OurInformationComponent } from './components/our-information/our-information.component';
import { ContactUsBannerComponent } from './components/contact-us-banner/contact-us-banner.component';

@NgModule({
  declarations: [ContactUsComponent, ContactUsFormComponent, OurInformationComponent, ContactUsBannerComponent],
  imports: [CommonModule, ContactUsRoutingModule, SharedModule],
})
export class ContactUsModule {}
