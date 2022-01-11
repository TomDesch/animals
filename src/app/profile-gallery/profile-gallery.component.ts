import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  _selectedPet?: Pet;
  searchText?: string;

  constructor(private petService: PetService) {

  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet): void {
    if (this._selectedPet === pet) {
      this._selectedPet = undefined;
      return;
    }
    this._selectedPet = pet;
  }

  get selectedPet(): Pet {
    return this._selectedPet!;
  }
}
