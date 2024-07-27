import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AboutUsComponent } from './about-us.component';
import { AboutUsBannerComponent } from './components/about-us-banner/about-us-banner.component';
import { AboutUsCardComponent } from './components/about-us-card/about-us-card.component';

@NgModule({
  declarations: [AboutUsComponent, AboutUsBannerComponent, AboutUsCardComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule],
})
export class AboutUsModule {}
