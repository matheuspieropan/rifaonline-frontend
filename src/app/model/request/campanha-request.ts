export class CampanhaRequest {

    nome: string = ''
    descricao: string = ''
    dataInicio: Date
    dataFim: Date
    quantidadeRifas: number = 0

    constructor(nome: string, descricao: string, dataInicio: Date, dataFim: Date, quantidadeRifas: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.quantidadeRifas = quantidadeRifas;
    }
}