import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileGalleryComponent} from "./profile-gallery/profile-gallery.component";
import {AddFormComponent} from "./add-form/add-form.component";

const routes: Routes = [
  {path: '', component: ProfileGalleryComponent},
  {path: 'add-pet', component: AddFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
