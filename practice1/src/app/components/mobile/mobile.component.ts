import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileForm: any= FormGroup;  // Form group for mobile data
  mobiles: any[] = [];    // List of mobiles
  successMessage: string | null = null; // Success message
  errorMessage: string | null = null;   // Error message

  constructor(private mobileService: MobileService, private fb: FormBuilder) {
    this.mobileForm = this.fb.group({
      id: [''],
      brand: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    this.getMobiles(); // Load the list of mobiles when the component is initialized
  }

  // Fetch all mobile entries from the backend
  getMobiles() {
    this.mobileService.getMobiles().subscribe(
      data => {
        this.mobiles = data;
      },
      error => {
        this.errorMessage = 'Error fetching mobiles!';
      }
    );
  }

  // Add a new mobile
  addMobile() {
    this.mobileService.saveMobile(this.mobileForm.value).subscribe(
      response => {
        this.successMessage = 'Mobile added successfully!';
        this.getMobiles(); // Refresh the list of mobiles
      },
      error => {
        this.errorMessage = 'Error adding mobile!';
      }
    );
  }

  // Update an existing mobile
  updateMobile() {
    const id = this.mobileForm.get('id')?.value;
    this.mobileService.updateMobile(id, this.mobileForm.value).subscribe(
      response => {
        this.successMessage = 'Mobile updated successfully!';
        this.getMobiles();
      },
      error => {
        this.errorMessage = 'Error updating mobile!';
      }
    );
  }

  // Delete a mobile by ID
  deleteMobile(id: number) {
    this.mobileService.deleteMobile(id).subscribe(
      response => {
        this.successMessage = 'Mobile deleted successfully!';
        this.getMobiles();
      },
      error => {
        this.errorMessage = 'Error deleting mobile!';
      }
    );
  }
}

