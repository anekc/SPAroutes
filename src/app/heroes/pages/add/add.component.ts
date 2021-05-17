import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  constructor(
    private heroesS: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroesS.getHeroesbyId(id)))
        .subscribe((heroe) => (this.heroe = heroe));
      
    }

    console.log(this.router.url);
  }

  add() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //Actualizar
      this.heroesS
        .updateHeroe(this.heroe)
        .subscribe((heroes) => this.mostarSnakcBar('registro Actualizado') );
    } else {
      //Crear

      this.heroesS.addHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/edit/', heroe.id]);
        this.mostarSnakcBar('Registro creado');
      });
    }
  }

  deleteHeroe(){

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      result => { 
        if (result){
          this.heroesS.deleteHeroe(this.heroe.id)
          .subscribe(resp => {
            this.router.navigate(['/heroes'])
          })

        }
        console.log(result);
      }
    )
  }

  mostarSnakcBar(mensaje: string){
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });

  
  }
}
