class Usuario {
    constructor (nome,email,idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    setNome (nome){
        this.nome = nome;
    }
    setEmail(email){
        this.email = email;
    }
    setIdade (idade){
        this.idade = idade;
    }

    getNome(){
        return this.nome = nome;
    }

    getEmail(){
        return this.email = email;
    }

    getIdade(){
        return this.idade = idade;
    }
}

const objetoUsuario = new Usuario ();
objetoUsuario.setNome("Leticya");
objetoUsuario.getNome();

//5-
class Livro {
    constructor(titulo,autor,ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    setTitulo (){
        this.titulo = this.titulo;
    }

    getTitulo (){
        return this.titulo = this.titulo;
    }
}
const objetoLivro = new Livro();
objetoLivro.setTitulo("O menino do pijama Listrado")
let livro = objetoLivro.getTitulo();
console.log(livro)

const objetoLivro2 = new Livro();
objetoLivro2.setTitulo("O menino do pijama Listrado")
let livro2 = objetoLivro.getTitulo();
console.log(livro2)
