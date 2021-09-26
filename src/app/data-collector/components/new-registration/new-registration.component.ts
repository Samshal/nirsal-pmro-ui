import { Component, OnInit } from '@angular/core';

// import 'js-camera';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  isContentEditable: any = true;
  farmers: any = [];
  showFarmerAddForm: any = false;
  farmerForm: any = {
    id: 1,
    bvn: '',
    landSize: ''
  }

  camera: any;

  constructor() { }

  ngOnInit(): void {
    // this.camera = document.querySelector('#camera');
  }

  addFarmer(): void {
    if (!this.showFarmerAddForm){
      this.showFarmerAddForm = true;
    }
    else {
      this.farmers.push(this.farmerForm);
      this.farmerForm = {
        id: this.farmers.length+1,
        bvn: '',
        landSize: ''
      }
    }
  }

  removeFarmer(index: any): void {
    this.farmers.splice(index, 1);
    this.farmerForm = {
      id: this.farmers.length+1,
      bvn: '',
      landSize: ''
    }
  }

  capturePhoto(): any {
    // this.camera.open('back');
  }

}
