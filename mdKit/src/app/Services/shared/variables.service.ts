import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class VariablesService {

  menuVisible : boolean = true;
  isLogin : boolean = false;
  isRegister : boolean = false;

  @Output() onMenuChanged = new EventEmitter<void>();
  @Output() onLoginChanged = new EventEmitter<void>();

  constructor() { }

  hideMenu()
  {
    this.menuVisible = false;
    this.onMenuChanged.emit();
    console.log("Hide menu");
  }

  showMenu(){
    this.menuVisible = true;
    this.isLogin = false;
    this.isRegister = false;
    this.onMenuChanged.emit();
    console.log("Show menu");
  }

  setLogin(){
    this.isLogin = true;
    this.isRegister = false;
    this.onLoginChanged.emit();
  }

  setRegister(){
    this.isLogin = false;
    this.isRegister = true;
    this.onLoginChanged.emit();
  }

}
