import { Directive, Input , ElementRef, HostListener, HostBinding } from '@angular/core';
import { TaskType,RoleType,SubjectType,Permission } from '@app/core/models';
import {  ActivatedRoute } from '@angular/router';
import { PermissionService } from '@app/authentication/services/permission.service';



@Directive({
  selector: '[permission]'
})
export class PermissionDirective {

  
  @Input() roles :string;
  @Input() task :string;
  @Input() subject :string;
  @Input() disableType :string;

  private hasPermission =false;

  constructor(private el: ElementRef,private router:ActivatedRoute,private permissionService:PermissionService)  {  
  }

  ngOnInit() :void{

   let _subject = SubjectType[this.subject];
   let _task = TaskType[this.task];

   this.hasPermission= this.permissionService.HasPermission(_subject,_task);
   this._setElementDisplayStyle(this.hasPermission);

    }

  
    _setElementDisplayStyle(state:boolean){

      var style ='';
      state?style ='block':style ='none';
      this.el.nativeElement.style.display=style;
      if(style=='none')
      this.el.nativeElement.remove();

    }

    

  
}


