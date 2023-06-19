export class Comment{
    commentName: string;
    commentGivenBy: string;
    commentTime: string
    description: string;
    createdBy: string;
    createdDate:  string;
    modifiedBy: string;
    modifiedDate: string;
    isActive: boolean;
 /**
  *
  */
 constructor() {
    this.commentName="";
    this.commentGivenBy="";
    this.commentTime="";
    this.createdBy="";
    this.createdDate="";
    this.modifiedBy="";
    this.modifiedDate="";
    this.description="",
    this.isActive=true
 }
}