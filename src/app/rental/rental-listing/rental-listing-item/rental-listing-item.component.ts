import { Component,OnInit, Input} from '@angular/core';

@Component({
    selector:'app-rental-listing-item',
    templateUrl:'./rental-listing-item.component.html',
    styleUrls:['rental-listing-item.component.scss']

})
export class RentalListingItemComponent implements OnInit{

    @Input() currentrental:any;
   ngOnInit()
   {


   }
    

}