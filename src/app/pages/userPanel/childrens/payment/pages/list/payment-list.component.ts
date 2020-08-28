import { Component, OnInit } from "@angular/core";
import { Payment } from "@app/pages/userPanel/models/payment";
import { UserPanelService } from "@app/pages/userPanel/services/userPanel.service";
import { AuthService } from "@app/authentication/services/auth.service";

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(private userPanelService: UserPanelService, private authService: AuthService) { }

  ngOnInit() {
    this.userPanelService.GetPayments(this.authService.getUserInfo().id).subscribe((res: Payment[]) => {
        this.payments = res;

        console.log(this.payments)
    });
  }
}
