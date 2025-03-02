import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent,{
  providers: [
   importProvidersFrom(
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        loadComponent:()=> import("./app/ui/components/layouts/layouts.component").then(m => m.LayoutsComponent),
        children:[
          {
            path: "",
            loadComponent:()=> import("./app/ui/components/blank/blank.component").then(m => m.BlankComponent)
          }
        ]
      }
    ])
   )
  ]
});
