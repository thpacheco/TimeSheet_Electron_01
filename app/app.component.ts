import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent {

    @ViewChild("inputEntrada") inputEntrada: ElementRef;
    @ViewChild("btnEntradaRegistrar") btnEntradaRegistrar: ElementRef;
    @ViewChild("btnEntradaVisualizar") btnEntradaVisualizar: ElementRef;

    @ViewChild("inputSaidaRefeicao") inputSaidaRefeicao: ElementRef;
    @ViewChild("btnSaidaRefeicaoVisualizar") btnSaidaRefeicaoVisualizar: ElementRef;
    @ViewChild("btnSaidaRefeicaoRegistrar") btnSaidaRefeicaoRegistrar: ElementRef;

    @ViewChild("inputRetornoRefeicao") inputRetornoRefeicao: ElementRef;
    @ViewChild("btnRetornoRefeicaoVisualizar") btnRetornoRefeicaoVisualizar: ElementRef;
    @ViewChild("btnRetonoRefeicaoRegistrar") btnRetonoRefeicaoRegistrar: ElementRef;

    @ViewChild("inputSaida") inputSaida: ElementRef;
    @ViewChild("btnSaidaVisualizar") btnSaidaVisualizar: ElementRef;
    @ViewChild("btnSaidaRegistrar") btnSaidaRegistrar: ElementRef;




    marcacaoEntradaRegistrado: boolean = false;
    horaEntrada: string = '00:00';

    horaSaidaRefeicao: string = '00:00';
    marcacaoSaidaRefeicaoRegistrado: boolean = false;

    horaRetornoRefeicao: string = '00:00';
    marcacaoRetornoRefeicaoRegistrado: boolean = false;

    horaSaida: string = '00:00';
    marcacaoSaidaRegistrado: boolean = false;

    msgErroMarcacao: boolean = true;
    campoMarcacao: string;
    textoMarcacaoRegistrado: string = 'Registrado!'

    private handleKeyDown(event: any, idMarcacao: string) {
        if (event.keyCode == 13) {
            this._registrarMarcacao(idMarcacao);
        }
        else if (event.keyCode == 40) {
            // action
        }
        else if (event.keyCode == 38) {
            // action
        }
    }

    private _retornarValorInputDesejado(idInput: string): string {
        switch (idInput) {
            case "entrada":
                return this.inputEntrada.nativeElement.value;
            case "saidaRefeicao":
                return this.inputSaidaRefeicao.nativeElement.value;
            case "retornoRefeicao":
                return this.inputRetornoRefeicao.nativeElement.value;
            case "saida":
                return this.inputSaida.nativeElement.value;
            default:
                break;
        }
    }

    private _retornaStatusButon(idMarcacao: string): string {
        switch (idMarcacao) {
            case "entrada":
                return this.btnEntradaRegistrar.nativeElement.innerText;
            case "saidaRefeicao":
                return this.btnSaidaRefeicaoRegistrar.nativeElement.innerText;
            case "retornoRefeicao":
                return this.btnRetonoRefeicaoRegistrar.nativeElement.innerText;
            case "saida":
                return this.btnSaidaRegistrar.nativeElement.innerText;
            default:
                break;
        }
    }

    private _registrarMarcacao(idMarcacao: string): void {
        this._retornaStatusButon(idMarcacao).trim() === "Registrar" ? this._salvarMarcacao(idMarcacao) : this._atualizaStatusEditarMarcacao(idMarcacao);
    }

    private _atualizaStatusEditarMarcacao(idMarcacao: string): void {
        switch (idMarcacao) {
            case "entrada":
                this.marcacaoEntradaRegistrado = false;
                this._atualizaInputEditarMarcacao(idMarcacao);
                break;
            case "saidaRefeicao":
                this.marcacaoSaidaRefeicaoRegistrado = false;
                this._atualizaInputEditarMarcacao(idMarcacao);
                break;
            case "retornoRefeicao":
                this.marcacaoRetornoRefeicaoRegistrado = false;
                this._atualizaInputEditarMarcacao(idMarcacao);
                break;
            case "saida":
                this.marcacaoSaidaRegistrado = false;
                this._atualizaInputEditarMarcacao(idMarcacao);
                break;
            default:
                break;
        }
    }

    private _atualizaInputEditarMarcacao(idMarcacao: string): void {
        switch (idMarcacao) {
            case "entrada":
                this.inputEntrada.nativeElement.value = this.btnEntradaVisualizar.nativeElement.value;
                break;
            case "saidaRefeicao":
                this.inputSaidaRefeicao.nativeElement.value = this.btnSaidaRefeicaoVisualizar.nativeElement.value;
                break;
            case "retornoRefeicao":
                this.inputRetornoRefeicao.nativeElement.value = this.btnRetornoRefeicaoVisualizar.nativeElement.value;
                break;
            case "saida":
                this.inputSaida.nativeElement.value = this.btnSaidaVisualizar.nativeElement.value;
                break;
            default:
                break;
        }
    }

    private _salvarMarcacao(idMarcacao: string): void {
        let marcacao = this._retornarValorInputDesejado(idMarcacao);

        if (this._validarMarcacao(marcacao)) {
            this._atualizarMarcacao(idMarcacao);
        } else {
            this._mostrarMsgErroMarcacao(idMarcacao);
        }
    }

    private _mostrarMsgErroMarcacao(idMarcacao: string) {
        switch (idMarcacao) {
            case 'entrada':
                this.msgErroMarcacao = false;
                this.campoMarcacao = 'Entrada';
                break;
            case 'saidaRefeicao':
                this.msgErroMarcacao = false;
                this.campoMarcacao = 'Saída Refeição';
                break;
            case 'retornoRefeicao':
                this.msgErroMarcacao = false;
                this.campoMarcacao = 'Retorno Refeição';
                break;
            case 'saida':
                this.msgErroMarcacao = false;
                this.campoMarcacao = 'Saída';
                break;
            default:
                break;
        }
    }

    private _atualizarMarcacao(idMarcacao: string) {
        switch (idMarcacao) {
            case 'entrada':
                this._marcacaoEntrada(idMarcacao);
                break;
            case 'saidaRefeicao':
                this._marcacaoSaidaRefeicao(idMarcacao);
                break;
            case 'retornoRefeicao':
                this._marcacaoRetornoRefeicao(idMarcacao);
                break;
            case 'saida':
                this._marcacaoSaida(idMarcacao);
                break;
            default:
                break;
        }
    }

    private _verificarFormatoHora(marcacao: any): boolean {
        var regex = new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$");
        return regex.test(marcacao);
    }

    private _marcacaoEntrada(idMarcacao: string) {
        let marcacao = this._retornarValorInputDesejado(idMarcacao);
        this.marcacaoEntradaRegistrado = true;
        this.horaEntrada = marcacao;
        this.btnEntradaVisualizar.nativeElement.value = marcacao;
        this.msgErroMarcacao = true;
        this._limparValorInputDesejado(idMarcacao);
    }

    private _marcacaoSaidaRefeicao(idMarcacao: string) {
        let marcacao = this._retornarValorInputDesejado(idMarcacao);
        this.marcacaoSaidaRefeicaoRegistrado = true;
        this.horaSaidaRefeicao = marcacao;
        this.btnSaidaRefeicaoVisualizar.nativeElement.value = marcacao;
        this.msgErroMarcacao = true;
        this._limparValorInputDesejado(idMarcacao);
    }

    private _marcacaoRetornoRefeicao(idMarcacao: string) {
        let marcacao = this._retornarValorInputDesejado(idMarcacao);
        this.marcacaoRetornoRefeicaoRegistrado = true;
        this.horaRetornoRefeicao = marcacao;
        this.btnRetornoRefeicaoVisualizar.nativeElement.value = marcacao;
        this.msgErroMarcacao = true;
        this._limparValorInputDesejado(idMarcacao);
    }

    private _marcacaoSaida(idMarcacao: string) {
        let marcacao = this._retornarValorInputDesejado(idMarcacao);
        this.marcacaoSaidaRegistrado = true;
        this.horaSaida = marcacao;
        this.btnSaidaVisualizar.nativeElement.value = marcacao;
        this.msgErroMarcacao = true;
        this._limparValorInputDesejado(idMarcacao);
    }

    private _limparValorInputDesejado(idInput: string): void {
        switch (idInput) {
            case "entrada":
                this.inputEntrada.nativeElement.value = "";
                this.inputEntrada.nativeElement.focus();
                break;
            case "saidaRefeicao":
                this.inputSaidaRefeicao.nativeElement.value = "";
                this.inputSaidaRefeicao.nativeElement.focus();
                break;
            case "retornoRefeicao":
                this.inputRetornoRefeicao.nativeElement.value = "";
                this.inputRetornoRefeicao.nativeElement.focus();
                break;
            case "saida":
                this.inputSaida.nativeElement.value = "";
                this.inputSaida.nativeElement.focus();
                break;
            default:
                break;
        }
    }

    private _validarMarcacao(marcacao: string): boolean {
        return marcacao === "" ? false : this._verificarFormatoHora(marcacao);
    }


    private _horaInicialMenorHoraFinal(horaInicial: string, horaFinal: string) {
        let horaIni = horaInicial.split(':');
        let horaFim = horaFinal.split(':');

        // Verifica as horas. Se forem diferentes, é só ver se a inicial
        // é menor que a final.
        let hIni = parseInt(horaIni[0], 10);
        let hFim = parseInt(horaFim[0], 10);
        if (hIni != hFim)
            return hIni < hFim;

        // Se as horas são iguais, verifica os minutos então.
        let mIni = parseInt(horaIni[1], 10);
        let mFim = parseInt(horaFim[1], 10);

        if (mIni != mFim)
            return mIni < mFim;
    }
}
