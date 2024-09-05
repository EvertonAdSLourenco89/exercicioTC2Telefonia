export class SecretariaEletronica {
  status: boolean;

  constructor() {
    this.status = false;
  }

  apagar(): void {
    console.log("Mensagem apagada.");
  }

  reproduzir(): void {
    console.log("Reproduzindo mensagem...");
  }

  gravar(): void {
    console.log("Gravando mensagem...");
  }
}
