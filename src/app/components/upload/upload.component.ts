import { Component, OnInit } from '@angular/core';
import { getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';
import { Storage } from '@angular/fire/storage';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  imagenes: string[];

  constructor(private storage: Storage){
    this.imagenes=[];
  };

  ngOnInit(){
    this.getImages();
  }

 uploadImage($event:any){
  const file=$event.target.files[0];
  console.log(file);

  const imgRef = ref(this.storage, `Mangas/Berserk/${file.name}`);

  uploadBytes(imgRef, file).then(resp => console.log(resp)).catch(err =>console.log(err))

 }

 getImages(){
   const imagesRef=ref(this.storage, 'Mangas/Berserk');
   listAll(imagesRef).then(async resp => {
     console.log(resp);
     this.imagenes=[];
     for(let item of resp.items){
       const url= await getDownloadURL(item);
       this.imagenes.push(url);
     }
   }).catch(err=> console.log(err));
   
 }
}