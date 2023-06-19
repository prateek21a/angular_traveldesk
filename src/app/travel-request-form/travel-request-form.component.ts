import { Component, OnInit } from '@angular/core';
import { TravelRequestService } from '../../services/travel-request-form.service';
import { submitTravelRequest } from 'src/model/submitTravelRequest';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-travel-request-form',
  templateUrl: './travel-request-form.component.html',
  styleUrls: ['./travel-request-form.component.css']
})
export class TravelRequestFormComponent implements OnInit {
  submitTravelRequestList: submitTravelRequest[] = [];
  comment: submitTravelRequest = new submitTravelRequest();

  constructor(private travelRequestService: TravelRequestService) {}

  ngOnInit(): void {
    this.travelRequestService.GetComments().subscribe(res => {
      console.log(res);
      this.submitTravelRequestList = res;
    });
  }

  minDepartureDate(): string {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Add 1 day to get the minimum allowed date
    return today.toISOString().split('T')[0];
  }
  

  select(comment: any) {
    console.log(comment);
  }

  submitForm() {
    this.travelRequestService.createTravelRequest(this.comment).subscribe(
      (response) => {
        console.log('Post request successful', response);
        // Perform any additional actions after the request is successful
      },
      (error) => {
        console.error('Post request error', error);
        // Handle the error case
      }
    );
  }
}


// import { FormsModule } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import { TravelRequestService } from '../../services/travel-request-form.service';
// import { submitTravelRequest } from 'src/model/submitTravelRequest';


// @Component({
//   selector: 'app-travel-request-form',
//   templateUrl: './travel-request-form.component.html',
//   styleUrls: ['./travel-request-form.component.css']
// })
// export class TravelRequestFormComponent implements OnInit {
//   submitTravelRequestList: submitTravelRequest[] = [];
//   comment: submitTravelRequest = new submitTravelRequest();
//   isDomesticFlight: boolean = false;
//   isInternationalFlight: boolean = false;

//   constructor(private travelRequestService: TravelRequestService) { }

//   ngOnInit(): void {
//     this.travelRequestService.GetComments().subscribe(res => {
//       console.log(res);
      
//       this.submitTravelRequestList = res;
//     });
//   }
// }
