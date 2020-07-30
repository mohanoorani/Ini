import { Component, OnInit } from "@angular/core";
import { UserAccountInfo } from "@app/pages/userPanel/models/useraccountInfo";
import { Bank } from "@app/pages/userPanel/models/bank";
import { UserPanelService } from "@app/pages/userPanel/services/userPanel.service";
import { AlertifyService } from "@app/shared/services";

@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.css']
})
export class BankInfoComponent implements OnInit {

  userInfo: UserAccountInfo = new UserAccountInfo();
  banks: Bank[] = [];
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.userPanelService.GetBanks().subscribe((res: Bank[]) => {
      this.banks = res;

      this.userPanelService.GetUserAccountInfo().subscribe((res: UserAccountInfo[]) => {
        if(res.length > 0)
          this.userInfo = res[0];
        else{
          this.userInfo = new UserAccountInfo();
        }
      })
    });
  }

  submitForm() {
    this.userPanelService.SaveUserAccountInfo(this.userInfo).subscribe((res: any) => {
        
      if(res[0].Status == "Failed"){
          this.alertifyService.error(res[0].Response);
          return;
      }

      this.alertifyService.success("با موفقیت ذخیره شد");
    });
  }

}
