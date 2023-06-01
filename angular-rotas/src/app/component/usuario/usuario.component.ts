import { Component, OnInit } from '@angular/core';
import { UsuarioService} from 'src/app/services/usuario.service';
import {Users} from 'src/app/Users';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit  {

  constructor(private usuarioService: UsuarioService){}
  
  ngOnInit(): void{

  }


 
usuario: Users[]= [
  { id:1, nome: "Rafael", idade: 42}
]

}
