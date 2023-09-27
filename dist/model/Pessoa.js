"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    //métodos GETTERS and SETTERS
    /**
     *
     * @returns nome: nome da pessoa
     */
    getNome() {
        return this.nome;
    }
    /**
     *
     * @param _nome
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     * Retorna o CPF da pessoa
     *
     * @returns cpf: cpf da pessoa
     */
    getCPF() {
        return this.cpf;
    }
    /**
     *
     * @param _cpf
     */
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    /**
     *
     * @returns Data: data de nascimento da pessoa
     */
    getData() {
        return this.data_nascimento;
    }
    /**
     *
     * @param _data_nascimento
     */
    setData(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    /**
     *
     * @returns telefone: telefone da pessoa
     */
    getTelefone() {
        return this.telefone;
    }
    /**
     *
     * @param _telefone
     */
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    /**
     *
     * @returns endereco: endereco da pessoa
     */
    getEndereco() {
        return this.endereco;
    }
    /**
     *
     * @param _endereco
     */
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    /**
     *
     * @returns altura: altura da pessoa
     */
    getAltura() {
        return this.altura;
    }
    /**
     *
     * @param _altura
     */
    setAltura(_altura) {
        this.altura = _altura;
    }
    /**
     *
     * @returns peso: peso da pessoa
     */
    getPeso() {
        return this.altura;
    }
    /**
     *
     * @param _peso
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    // implementar os métodos
    falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map