import { Routes } from '@angular/router';
import { DataSearchComponent } from '../components/data-search/data-search.component';
import { DataUploadComponent } from '../components/data-upload/data-upload.component';

export const routes: Routes = [{ path: '', component: DataSearchComponent }, { path: 'search', component: DataSearchComponent }, { path: 'upload', component: DataUploadComponent }];
