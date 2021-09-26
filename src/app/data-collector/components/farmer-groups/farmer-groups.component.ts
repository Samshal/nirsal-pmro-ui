import { Component, OnInit } from '@angular/core';

import { StorageService } from "../../../shared/services/storage.service";

@Component({
  selector: 'app-farmer-groups',
  templateUrl: './farmer-groups.component.html',
  styleUrls: ['./farmer-groups.component.css']
})
export class FarmerGroupsComponent implements OnInit {

  farmerGroups: any = [
    {
      "group":"Jigawa Farmers",
      "location":"Jigawa"
    },
    {
      "group":"Abadam Farmers",
      "location":"Mallam Fatori, Abadam"
    },
    {
      "group":"Rivers CBN List",
      "location":"Rivers, Port Harcourt"
    }
  ];
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
  }

  storeFarmer(farmer: any): void {
    this.storage.setItem('farm-group', JSON.stringify(farmer));
  }

}
