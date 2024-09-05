import { Campainha } from './Campainha';
import { SecretariaEletronica } from './SecretariaEletronica';
import { IdentificadorChamada } from './IdentificadorChamada';

export class Telefone {
  conectado: boolean;
  private campainha: Campainha;
  private secretariaEletronica: SecretariaEletronica;
  private identificadorChamada: IdentificadorChamada;

  constructor() {
    this.conectado = true;
    this.campainha = new Campainha();
    this.secretariaEletronica = new SecretariaEletronica();
    this.identificadorChamada = new IdentificadorChamada();
  }

  setCampainha(status: boolean): void {
    this.campainha.status = status;
    console.log(`Campainha ${status ? "ligada" : "desligada"}`);
  }

  setSecretariaEletronica(status: boolean): void {
    this.secretariaEletronica.status = status;
    console.log(`Secretária Eletrônica ${status ? "ligada" : "desligada"}`);
  }

  setIdentificadorChamada(status: boolean): void {
    console.log(`Identificador de Chamada ${status ? "ativado" : "desativado"}`);
  }
}
