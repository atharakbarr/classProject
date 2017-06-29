export class NavPillItem {
    name : string;
    logo : string;
    link : string;
    active : boolean;

    constructor(nm : string, lg : string, lnk : string,ac : boolean) {
        this.name = nm;
        this.logo = lg;
        this.link =lnk;
        this.active = ac;
     }
}