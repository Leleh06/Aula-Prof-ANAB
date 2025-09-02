class ContaBancaria {
    #saldo

    constructor (saldoInicial) { //Inicializar meu saldo
        this.#saldo = saldoInicial
    }

    //metodo depositar É O SET 
    depositar(valor){
        if(valor > 0)
            this.#saldo = this.#saldo + valor;
    }

    //metodo de sacar É O SET
    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor;
    }

    getExtrato () {
        return this.#saldo
    }
}

module.exports = ContaBancaria;