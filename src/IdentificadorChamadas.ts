export class IdentificadorChamada {
  id: number;

  constructor() {
    this.id = 0;
  }

  visualizar(n: number): void {
    console.log(`Visualizando chamada de ID: ${n}`);
  }

  apagar(): void {
    console.log('Chamada apagada.');
  }
}
