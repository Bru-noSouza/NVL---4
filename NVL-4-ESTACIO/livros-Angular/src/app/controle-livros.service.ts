import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    { 
      codigo: 1,
      codEditora: 1,
      titulo: 'Descobrindo Java', 
      resumo: 'Java é uma linguagem de programação popular e amplamente usada para criar aplicativos, jogos, serviços web e sistemas corporativos. Com sua sintaxe clara e orientação a objetos, Java é uma excelente escolha para desenvolvedores que desejam criar aplicativos robustos e escaláveis.', 
      autores: ['Lucas Santos','Ana Oliveira','Tiago Almeida']
    },
    { 
      codigo: 2,
      codEditora: 2,
      titulo: 'Desvendando C#', 
      resumo: 'C# é uma linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft. Ela é amplamente utilizada para criar aplicativos de desktop, jogos, aplicativos móveis e serviços web.', 
      autores: ["Mariana Silva","Pedro Costa","Julia Fernandes"]
    },
    { 
      codigo: 3,
      codEditora: 3,
      titulo: 'Lógica de programação', 
      resumo: 'A lógica de programação é a base para a criação de softwares eficientes e confiáveis. Ela consiste em organizar as instruções de um programa de forma lógica e estruturada, seguindo uma sequência lógica de ações.', 
      autores: ["Rafael Souza","Camila Rodrigues","João Pereira"]
    }
  ];
  

  constructor() { }


  obterLivros(): Livro[] {
    return this.livros;
  }



  incluir(livro: Livro): void {
    
    let maiorCodigo = 0;
    for (const l of this.livros) {
      if (l.codigo > maiorCodigo) {
        maiorCodigo = l.codigo;
      }
    }

    
    livro.codigo = maiorCodigo + 1;

    
    this.livros.push(livro);
  }


  excluir(codigo: number): void {
    // Encontra o índice do livro com o código fornecido
    const index = this.livros.findIndex(l => l.codigo === codigo);

    // Remove o livro com o uso de splice
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

