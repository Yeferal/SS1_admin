import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products/products.service';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from '../tools/modal-base/modal-base.component';
import { ModalService } from 'src/app/services/tools/modal.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    nombre: new FormControl(null,Validators.required),
    precio_unitario: new FormControl(null,Validators.required),
    estado: new FormControl('Disponible',null),
    descripcion: new FormControl(null,null),
    img: new FormControl(null,null),
  });

  public files: any [] = [];
  public fileCapture: any;
  public preview: any;
  public message: string;
  modalReference: NgbModalRef;
  @ViewChild('modal') private modalContent: TemplateRef<ModalBaseComponent>

  constructor(private sanitizer: DomSanitizer, 
    private productService: ProductsService, 
    private http: HttpClient,
    private modalEmmitService: ModalService,
    config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.closeModal();
  }

  captureFile(event: any): any{
    this.fileCapture = event.target.files[0];
    this.extraerBase64(this.fileCapture).then((imagen: any) => {
      this.preview = imagen.base;
      // console.log(imagen);
      
    });
    // this.files.cl
    this.files.splice(0, this.files.length);
    this.files.push(this.fileCapture);
      // console.log(this.files);
    // console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          // blob: $event,
          // image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          // blob: $event,
          // image,
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  });


  addProduct(){
    try {
      this.open();
      if(this.productForm.invalid){
        return ;
      }
      const formFile = new FormData();
      // console.log(this.files);
      this.files.forEach( archivo => {
        console.log(archivo);
        formFile.append('img',archivo);
      });
      // let file: any = this.captureFile;
      formFile.append('nombre',this.productForm.get('nombre')?.value);
      formFile.append('precio_unitario',this.productForm.get('precio_unitario')?.value);
      formFile.append('estado',this.productForm.get('estado')?.value);
      formFile.append('descripcion',this.productForm.get('descripcion')?.value);

      this.productService.loadImg(formFile).subscribe(
        res =>{
          console.log(res);
          this.message = "Se agrego correctamente el Producto"
        },
        error => {
          console.log(error);
          this.message = "Ocurrio un error al agregar el producto"
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  open() {
    this.modalReference = this.modalService.open(ModalBaseComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
    // this.modalReference.result.then()
    // this.modalService.open(ModalBaseComponent);
    // this.modalReference = this.modalService.open(ModalBaseComponent, {centered: true});
  }

  closeModal(){
    this.modalEmmitService.invocationAddProduct.subscribe( (data) => {
      console.log(data);
      this.modalReference.close();
      this.productForm.reset();
      this.preview = null;
    })
  }

}
