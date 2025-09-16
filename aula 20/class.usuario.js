//19. Imagine que temos uma classe Usuario com os atributos id, nome, ativo, documento. Crie os métodos getters e setters desses atributos e depois instancie essa classe utilizando esses métodos.


class Usuario {
    //class pronta

    setId(id) {
        this.id = id;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setAtivo(ativo){
        this.ativo = ativo;
    }

    setDocumento(documento){
        this.documento = documento;
    }

    getId(){
        return this.id = id;
    }

    getNome(){
        return this.nome = nome;
    }

    getAtivo(){
        return this.ativo = ativo;
    }
    
    getDocumento(){
        return this.documento = documento;
    }

}

const usuario1 = new Usuario();
usuario1.setId(1);
usuario1.setNome("Leticya");
usuario1.setAtivo(true);
usuario1.setDocumento("111122333344")

usuario1.getAtivo;
usuario1.getDocumento;
usuario1.getNome;
usuario1.getId;