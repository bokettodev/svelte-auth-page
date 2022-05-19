import { Component, OnInit } from "@angular/core";
import {
  PERMISSIONS,
  requestPermissions,
} from "@master.technology/permissions";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    requestPermissions([PERMISSIONS.CAMERA, PERMISSIONS.MICROPHONE])
      .then(() => {
        console.log("Woo Hoo, I have the power!");
      })
      .catch(() => {
        console.log("Uh oh, no permissions - plan B time!");
      });
  }
}
