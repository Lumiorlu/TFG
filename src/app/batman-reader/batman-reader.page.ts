import { Component, OnInit } from '@angular/core';
import {ref, Storage, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-batman-reader',
  templateUrl: './batman-reader.page.html',
  styleUrls: ['./batman-reader.page.scss'],
})
export class BatmanReaderPage implements OnInit {

  images:string[];

  constructor(private storage: Storage){
    this.images=[];
   }

  ngOnInit(){
    this.getImagenes();
  }
 
  cargarImagen($event:any){
    const file =$event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `Cómics/BatmanNMM/${file.name}`);
    uploadBytes(imgRef, file).then(resp => console.log(resp)).catch(err => console.log(err));

  }

  getImagenes(){
    const imagenesRef= ref(this.storage, '/Cómics/BatmanNMM');
    listAll(imagenesRef).then(async resp=>{
      console.log(resp);
      this.images=[];
      for(let item of resp.items){
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    
    }).catch(err=>{console.log(err)});
  }

}

