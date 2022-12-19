import { FeatureCardModule } from './../../shared/lazy-component/feature-card/feature-card.module';
import { BlogCardModule } from './../../shared/lazy-component/blog-card/blog-card.module';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FooterModule } from 'src/app/shared/components/footer/footer.module'; 
import { HeaderModule } from 'src/app/core/header/header.module'; 



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SwiperModule,
    SlickCarouselModule,
    ProductCardOneModule,
    BlogCardModule,
    FeatureCardModule,
    HeaderModule,
    FooterModule
  ]
})
export class HomeModule { }
