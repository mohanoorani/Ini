import { Component, OnInit } from "@angular/core";
import { Payment } from "@app/pages/userPanel/models/payment";
import { UserPanelService } from "@app/pages/userPanel/services/userPanel.service";
import { AlertifyService } from "@app/shared/services";

@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class PaymentInfoComponent implements OnInit {

  payments: Payment[] = [];
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.userPanelService.GetPaymentsInfo().subscribe((res: Payment[]) => {
        this.payments = res;
        console.log(res)
    });
  }
}
