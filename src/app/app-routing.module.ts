import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayersComponent } from "./components/players/players.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "players",
    component: PlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
