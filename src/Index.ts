import { Linha } from './models/Linha';
import { Telefone } from './models/Telefone';

const linha = new Linha();
linha.discar(12345678);

const telefone = new Telefone();
telefone.setCampainha(true);
telefone.setSecretariaEletronica(true);
