import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PetService} from "../service/pet.service";


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });


  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.petService.addPet(this.addPetForm.getRawValue()).subscribe();
    this.addPetForm.reset();
  }

}
