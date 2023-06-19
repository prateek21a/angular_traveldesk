export class Document{

    aadharFile : string;

    adharCardNo: string;

 documentId : number;
passportFile : string;

passportNo : string;

 visaFile : string;
 visaNo : string;
 /**
  *
  */
 constructor() {
    this.documentId=0;
    this.adharCardNo="";
    this.aadharFile="";
    this.passportFile="";
    this.passportNo="";
    this.visaFile="";
    this.visaNo="";
 }
}