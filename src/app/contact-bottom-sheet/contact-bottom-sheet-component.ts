import { Component } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


@Component({
    selector: 'contact-bottom-sheet',
    templateUrl: './contact-bottom-sheet-component.html'
})
export class ContactBottomSheetComponent {
    faLinkedinIn = faLinkedinIn;

    constructor(private _bottomSheetRef: MatBottomSheetRef<ContactBottomSheetComponent>) { }

    openLink(event: MouseEvent): void {
        //this._bottomSheetRef.dismiss();
        //event.preventDefault();
    }
}