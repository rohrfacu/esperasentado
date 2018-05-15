import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    texto = 'Clickeá en el botón para generar el texto!';
    palabras: string[] = ['sentado', 'parado', 'cansado'];
    final: string[] = ['sentar', 'parar', 'cansar'];

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
    }

    esperaSentado() {
        const texto1 = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        const texto2 = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        const textoFinal = this.final[Math.floor(Math.random() * this.final.length)];
        this.texto = 'Espera ' + texto1 + ' porque ' + texto2 + ' te vas a ' + textoFinal;
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
