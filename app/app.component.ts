import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent {
    entrada: string;
    private handleKeyDown(event: any) {
        if (event.keyCode == 13) {
            console.log('Enter');
        }
        else if (event.keyCode == 40) {
            // action
        }
        else if (event.keyCode == 38) {
            // action
        }
    }
    private SalvarMarcacao(marcacao: string): void {
        this.Verifica_Hora(marcacao);
    }

    Verifica_Hora(campo: any) {
        var patt = new RegExp('^([01]\d|2[0-3]):?([0-5]\d)$');
        patt.test(campo);
        let hrs: number = (campo.substring(0, 2));
        let min: number = (campo.substring(3, 5));
        let estado = "";
        if ((hrs < 0o0) || (hrs > 23) || (min < 0o0) || (min > 59)) {
            estado = "errada";
        }
        if (campo.value == "") {
            estado = "errada";
        }
        if (estado == "errada") {
            alert("Hora invalida!");
            campo.focus();
        }
    }
}
