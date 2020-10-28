import { BinaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable , Operator } from 'rxjs'; 
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

    this.returnObservable()
    .subscribe( 
      num =>console.log('numero', num),
      error=> console.error(error),
      () => console.log('termino de manera correcta')
    );


  }

  ngOnInit() {
  }

  //funcion que regresa el observable
  returnObservable() : Observable<any>{

       // crear observable
       return new Observable(observer => {
      
        let contador = 0;
  
        // cada 1000 mlseg se añade un contador
        let interval = setInterval(()=>{
          // añadir el contador
          contador +=1;
  
          // pasar al siguiente contador 
          observer.next( contador);
  
          // para que termine el observable
          if(contador === 3){
            clearInterval(interval);
            observer.complete();
          }
  

          // si sucede un error
          if(contador === 2){
            clearInterval(interval);
            observer.error('error porque es 2');
          }
  
        },1000);
  
      })
  }

}
