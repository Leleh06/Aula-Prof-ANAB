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
