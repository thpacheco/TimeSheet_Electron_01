import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {
    horaEntrada: string = '00:00';
    msgErroMarcacao: boolean = true;
    campoMarcao: string;
    marcacaoEntradaRegistrado: boolean = false;
    textoMarcacaoRegistrado: string = 'Registrado!'
    element: ElementRef;
    constructor(elementRef: ElementRef) {
        this.element = elementRef;
    }
    ngOnInit() {
    }

    private handleKeyDown(event: any, inputAll: ElementRef) {
        if (event.keyCode == 13) {
            this.salvarMarcacao(inputAll);
        }
        else if (event.keyCode == 40) {
            // action
        }
        else if (event.keyCode == 38) {
            // action
        }
    }

    private salvarMarcacao(inputAll: ElementRef): void {
        console.log(inputAll);
    }
    mostrarMsgErroMarcacao(idMarcacao: string) {
        switch (idMarcacao) {
            case 'entrada':
                this.msgErroMarcacao = false;
                this.campoMarcao = 'Entrada';
                break;

            default:
                break;
        }
    }
    atualizarMarcacao(idMarcacao: string, marcacao: string) {
        switch (idMarcacao) {
            case 'entrada':
                this.marcacaoEntrada(marcacao);
                break;
            default:
                break;
        }
    }

    verifica_Hora(campo: any): boolean {
        var regex = new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$");
        return regex.test(campo);
    }

    private marcacaoEntrada(marcacao: string) {
        this.marcacaoEntradaRegistrado = true;
        this.horaEntrada = marcacao;
        this.msgErroMarcacao = true;
    }

    private validarMarcacao(marcacao: string, idMarcacao: string) {
        if (marcacao !== "") {
            let validarRegex: boolean = this.verifica_Hora(marcacao);
            if (validarRegex) {
                this.atualizarMarcacao(idMarcacao, marcacao);
            } else {
                this.mostrarMsgErroMarcacao(idMarcacao);
            }
        } else {
            this.mostrarMsgErroMarcacao(idMarcacao);
        }
    }
}
