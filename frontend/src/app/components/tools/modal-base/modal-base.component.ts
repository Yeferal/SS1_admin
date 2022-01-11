import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/tools/modal.service';
// import {  } from "@angular/material";

export interface modelMsj {
  data: {
    msj: '',
    title: '',
  }
}


export interface ModalConfig {
  modalTitle: string
  dismissButtonLabel?: string
  closeButtonLabel?: string
  shouldClose?(): Promise<boolean> | boolean
  shouldDismiss?(): Promise<boolean> | boolean
  onClose?(): Promise<boolean> | boolean
  onDismiss?(): Promise<boolean> | boolean
  disableCloseButton?(): boolean
  disableDismissButton?(): boolean
  hideCloseButton?(): boolean
  hideDismissButton?(): boolean
}

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss']
})
export class ModalBaseComponent implements OnInit {

  modalReference: NgbModalRef;
  
  constructor(private modalService: NgbModal, private modalEmmitService: ModalService,) { }

  ngOnInit(): void {

  }

  close(){
    this.modalEmmitService.onAddProduct('dio');
    //  
    // this.modalReference. 
    // this.modalService.
  }

}
