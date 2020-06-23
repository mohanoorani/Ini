import { Component } from '@angular/core';
import { ContactUs } from '@app/pages/contactus/models/contactus';
import { ContactUsService } from '@app/pages/contactus/services/contactus.service';
import { AlertifyService } from '@app/shared/services';

@Component({
  selector: 'app-contactus-detail',
  templateUrl: './app-contactus-detail.component.html',
  styleUrls: ['./app-contactus-detail.component.css']
})
export class AppContactUsDetailComponent {

  selectedFile: File;
  contactItem: ContactUs = new ContactUs();
  saveProcessStart: boolean = false;

  constructor(private contactusService: ContactUsService, private alertifyService: AlertifyService) { }
  save() {
    if (!this.contactItem.FullName || !this.contactItem.MobileNumber) {
      this.alertifyService.error("نام و شماره همراه خود را وارد نمایید.")
      return;
    }

    this.saveProcessStart = true;
    this.contactusService.Save(this.contactItem, this.selectedFile).subscribe(() => {
      
      this.alertifyService.success("پیام شما با موفقیت ارسال شد.")

      this.contactItem = new ContactUs();
      this.saveProcessStart = false;
    })
  }

  fileChange(file: any){}
}
