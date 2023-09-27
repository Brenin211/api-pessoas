export class Pessoa {

    // atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {

            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso
    }

    //métodos GETTERS and SETTERS
    /**
     * 
     * @returns nome: nome da pessoa
     */
    public getNome() {
        return this.nome;
    }
    /**
     * 
     * @param _nome 
     */
    public setNome(_nome: string){
        this.nome = _nome;
    }
    /**
     * Retorna o CPF da pessoa
     * 
     * @returns cpf: cpf da pessoa
     */
    public getCPF(){
        return this.cpf;
    }
    /**
     * 
     * @param _cpf 
     */
    public setCPF(_cpf: string){
        this.cpf = _cpf;
    }
    /**
     * 
     * @returns Data: data de nascimento da pessoa
     */
    public getData(){
        return this.data_nascimento;
    }
    /**
     * 
     * @param _data_nascimento 
     */
    public setData(_data_nascimento: Date){
        this.data_nascimento = _data_nascimento;
    }
    /**
     * 
     * @returns telefone: telefone da pessoa
     */
    public getTelefone(){
        return this.telefone;
    }
    /**
     * 
     * @param _telefone 
     */
    public setTelefone(_telefone: string){
        this.telefone = _telefone;
    }
    /**
     * 
     * @returns endereco: endereco da pessoa
     */
    public getEndereco(){
        return this.endereco;
    }
    /**
     * 
     * @param _endereco 
     */
    public setEndereco(_endereco: string){
        this.endereco = _endereco;
    }
    /**
     * 
     * @returns altura: altura da pessoa
     */
    public getAltura(){
        return this.altura;
    }
    /**
     * 
     * @param _altura 
     */
    public setAltura(_altura: number){
        this.altura = _altura;
    }
    /**
     * 
     * @returns peso: peso da pessoa
     */
    public getPeso(){
        return this.altura;
    }
    /**
     * 
     * @param _peso 
     */
    public setPeso(_peso: number){
        this.peso = _peso;
    }

    // implementar os métodos
    public falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }

    /**
     * 
     * @param _frase 
     */
    public falarFrase(_frase: string) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    /**
     * 
     * função para andar
     * 
     */
    public andar():void {
        console.log(`${this.nome} esta andando`);
    }

    /**
     * 
     * @param _Quilometros 
     */
    public andandoDistancia(_Quilometros:number):void {
        setTimeout(() =>{
            console.log(`${this.nome} anda: ${_Quilometros} Quilometros`);
        },3000);
        
        
    }

    /**
     * 
     * comer: função para comer
     * 
     */
    public comer():void {
        console.log(`${this.nome} esta comendo`);
    }

    /**
     * 
     * @param _prato 
     */
    public comendoComida(_prato:string):void {
        console.log(`${this.nome} esta comendo: Uma${_prato}`);
    }
}