import { Component, OnInit, Input } from '@angular/core';
import { Influencer } from '../../../influencer/models/influencer';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { CreateRequest } from '../../models/createrequest';

@Component({
  selector: 'app-create-request',
  templateUrl: './app-create-request.component.html',
  styleUrls: ['./app-create-request.component.css']
})

export class AppCreateRequestComponent implements OnInit {

  @Input() instagramId: string;
  instagramsId: Influencer[] = [];
  request: CreateRequest = new CreateRequest();

  constructor(private userPanelService: UserPanelService) { }

  ngOnInit() {
    this.getInstagramsId();
  }

  getInstagramsId() {
    this.userPanelService.GetAllAccounts().subscribe((res: Influencer[]) => {
      // if(res.length == 0){
      //     this.message = "حساب اینستاگرامی برای شما ثبت نشده است. لطفا از قسمت پروفایل کاربری > حساب اینستاگرام، اقدام به افزودن حساب نمایید.";
      //     return;
      // }
      this.instagramsId = res;
    });
  }

  submitForm(){
      
  }
}