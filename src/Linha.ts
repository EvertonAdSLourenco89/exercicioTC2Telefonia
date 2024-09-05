export class Linha {
  ocupado: boolean;

  constructor() {
    this.ocupado = false;
  }

  discar(n: number): void {
    console.log(`Discando para o número: ${n}`);
    this.ocupado = true;
  }
}
