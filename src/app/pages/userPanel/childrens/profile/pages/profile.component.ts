import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '@app/shared/services';
import { User } from '@app/pages/userPanel/models/user';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.userPanelService.GetUserProfile().subscribe((res: User) => {
      this.user = res[0];
    })
  }

  submitForm() {
    this.userPanelService.SaveUserProfile(this.user).subscribe((res: any) => {
      this.alertifyService.success("با موفقیت ذخیره شد");
    })
  }
}
