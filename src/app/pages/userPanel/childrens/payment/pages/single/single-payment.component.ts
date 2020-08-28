import { Component, OnInit } from "@angular/core";
import { Payment } from "@app/pages/userPanel/models/payment";
import { UserPanelService } from "@app/pages/userPanel/services/userPanel.service";
import { AuthService } from "@app/authentication/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { PaymentHistory } from "@app/pages/userPanel/models/paymenthistory";

@Component({
  selector: 'app-single-payment',
  templateUrl: './single-payment.component.html',
  styleUrls: ['./single-payment.component.css']
})
export class SinglePaymentComponent implements OnInit {

  paymentHistory: PaymentHistory[] = [];
  paymentId: number;

  constructor(
    private userPanelService: UserPanelService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.paymentId = this.route.snapshot.params['paymentId'];
    this.titleService.setTitle("تاریخچه پرداخت");


    this.userPanelService.GetPaymentHistory(this.paymentId, this.authService.getUserInfo().id)
      .subscribe((res: PaymentHistory[]) => {
        this.paymentHistory = res;
        
        console.log(res);
      });
  }
}
