import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../services/userPanel.service';
import { AlertifyService } from '@app/shared/services';
import { Bank } from '../../models/bank';
import { UserAccountInfo } from '../../models/useraccountInfo';
import { Payment } from '../../models/payment';

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
    });
  }
}
