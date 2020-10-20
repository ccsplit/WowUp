import { Component, Input } from "@angular/core";
import { AddonSearchResult } from "app/models/wowup/addon-search-result";

@Component({
  selector: "app-get-addon-status-column",
  templateUrl: "./get-addon-status-column.component.html",
  styleUrls: ["./get-addon-status-column.component.scss"],
})
export class GetAddonStatusColumnComponent {
  @Input() addonSearchResult: AddonSearchResult;
}
