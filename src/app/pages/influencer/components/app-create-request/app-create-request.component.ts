import { Component, OnInit, Input } from '@angular/core';
import { Influencer } from '../../models/influencer';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../../userPanel/childrens/request/models/request';
import { AlertifyService } from '@app/shared/services';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-request',
  templateUrl: './app-create-request.component.html',
  styleUrls: ['./app-create-request.component.css']
})

export class AppCreateRequestComponent implements OnInit {

  @Input() instagramId: string;
  instagramsId: Influencer[] = [];
  request: Request = new Request();
  selectedFile: File;

  constructor(
    private userPanelService: UserPanelService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    debugger;
    this.getInstagramsId();
    
    this.resetForm();
  }

  getInstagramsId() {
    this.userPanelService.GetAllAccounts().subscribe((res: Influencer[]) => {
      this.instagramsId = res;
    });
  }

  fileChange(files: FileList) {

    if (files && files[0].size > 0) {
      this.userPanelService.UplodaAttachment(files[0]).subscribe((res: any) => {

        this.request.FileID = res.fileId;

        this.alertifyService.success('فایل با موفقیت ذخیره شد');
      });
    }
  }

  submitForm() {
    if (this.request.IsContent && !this.request.FileID) {
      this.alertifyService.error('فایل محتوا را آپلود نمایید');
      return;
    }

    if (!this.request.IsContent)
      this.request.FileID = 0;

    this.request.DestinationInstagramID = this.instagramId;
    
    this.userPanelService.CreateRequest(this.request).subscribe((res: any) => {
      this.alertifyService.success('درخواست با موفقیت ذخیره شد');
      
      $('#RequestModal').hide();
      $('.modal-backdrop').remove();

      this.resetForm();
    })
  }

  resetForm() {
    this.request.IsContent = false;
    this.request.IsPost = false;
    this.request.IsStory = false;
    this.request.IsContent = false;
    this.request.PresenceOnSite = false;
    this.request.FileID = 0;
    this.request.Description = '';
  }
}