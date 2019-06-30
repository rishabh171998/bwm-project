import { NgModule } from '@angular/core';
import { RentalComponent } from './rental.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalListingItemComponent } from './rental-listing/rental-listing-item/rental-listing-item.component';
import { RentalService } from './shared/rental.service';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
const routes: Routes=[{

    path:'rentals',
    component:RentalComponent,
    children:[
        {path:'',component:RentalListingComponent},
          


            {path:'rentalId',component:RentalDetailComponent}

        
    ]
}

];
@NgModule(
    {
        declarations:[
            RentalComponent,
            RentalListingComponent,
            RentalListingItemComponent,
            RentalDetailComponent
        ],
        imports:[CommonModule,
        RouterModule.forChild(routes)],
providers:[RentalService]
    }
)

export class RentalModule{}