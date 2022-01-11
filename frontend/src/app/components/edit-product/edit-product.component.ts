import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products/products.service';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from '../tools/modal-base/modal-base.component';
import { ModalService } from 'src/app/services/tools/modal.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    nombre: new FormControl(null,Validators.required),
    precio_unitario: new FormControl(null,Validators.required),
    estado: new FormControl('Disponible',null),
    descripcion: new FormControl(null,null),
    // img: new FormControl(null,null),
  });

  public files: any [] = [];
  public fileCapture: any;
  product: Product = new Product();
  public preview: any;
  public message: string;
  modalReference: NgbModalRef;
  readonly URL_API = GLOBAL.URL2;
  isSelImg: boolean = false;
  @ViewChild('modal') private modalContent: TemplateRef<ModalBaseComponent>

  constructor(private sanitizer: DomSanitizer, 
    private productService: ProductsService, 
    private route: ActivatedRoute, 
    private http: HttpClient,
    private modalEmmitService: ModalService,
    config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.getProduct();
    this.closeModal();
    if(!this.product.path_img){
      this.preview = null;
    }
    // console.log(this.product);
    
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
    this.isSelImg = false;
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

  getProduct(){
    const id_product = this.route.snapshot.paramMap.get('id_producto');

    this.productService.getProduct(id_product).subscribe(
      res => {
        
        this.product = res;
        // if(!this.product.path_img){
        //     this.preview = null;
        //   }
        // console.log('d',this.product);
        this.productForm.get('nombre')?.setValue(this.product.nombre);
        this.productForm.get('precio_unitario')?.setValue(this.product.precio_unitario);
        this.productForm.get('estado')?.setValue(this.product.estado);
        this.productForm.get('descripcion')?.setValue(this.product.descripcion);
      },
      error => {
        console.log(error);
        
      }
    )
  }

  updateImg(){
    if(!this.preview){
      // console.log('No a seleccionado nada');
      this.isSelImg = true;
    }
    const id_product = this.route.snapshot.paramMap.get('id_producto');
    try {
      const formFile = new FormData();
      this.files.forEach( archivo => {
        console.log(archivo);
        formFile.append('img',archivo);
      });
      this.productService.putProductImg(id_product,formFile).subscribe(
        res =>{
          console.log(res);
          this.message = "Se actualizo la Imagen"
        },
        error => {
          console.log(error);
          this.message = "Ocurrio un error al actualizar el producto"
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  updateProduct(){
    if (this.productForm.invalid) {
      return;
    }
    const id_product = this.route.snapshot.paramMap.get('id_producto');

    this.productService.putProduct(id_product,this.productForm.value).subscribe(
      res => {
        
      },
      error =>{

      }
    )
  }
}
