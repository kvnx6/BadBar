import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BatheWeather } from './pages/bathe-weather/bathe-weather';
import { CommunityImages } from './pages/community-images/community-images';
import { Contact } from './pages/contact/contact';
import { Imprint } from './pages/imprint/imprint';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'badewetter', component: BatheWeather},
  {path: 'communitybilder', component: CommunityImages},
  {path: 'kontakt', component: Contact},
  {path: 'impressum', component: Imprint},
];
