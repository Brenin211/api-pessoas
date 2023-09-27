import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa('João','111111111',new Date(2000,9,15),'00000000000','Rua Número 1',170,70);

let pessoa2 = new Pessoa('Maria','222222222',new Date(2006,8,9),'9999999999','Rua Número 2',160,50);

pessoa.falar();
pessoa.falarFrase(`Vai Curintia!!!`);

pessoa.andar();
pessoa.andandoDistancia(100);

pessoa.comer();
pessoa.comendoComida(`Banana`);