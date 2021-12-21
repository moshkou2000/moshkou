'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">moshkou documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0f6cb27aaf4b453679d087bed893f18a14411c73d255de8ceed964b04ae82eab28ff445c45cee2540eed05f6797264e81a1d384a5eca76cf394a7af74679610f"' : 'data-target="#xs-components-links-module-AppModule-0f6cb27aaf4b453679d087bed893f18a14411c73d255de8ceed964b04ae82eab28ff445c45cee2540eed05f6797264e81a1d384a5eca76cf394a7af74679610f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0f6cb27aaf4b453679d087bed893f18a14411c73d255de8ceed964b04ae82eab28ff445c45cee2540eed05f6797264e81a1d384a5eca76cf394a7af74679610f"' :
                                            'id="xs-components-links-module-AppModule-0f6cb27aaf4b453679d087bed893f18a14411c73d255de8ceed964b04ae82eab28ff445c45cee2540eed05f6797264e81a1d384a5eca76cf394a7af74679610f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnackbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatatableModule.html" data-type="entity-link" >DatatableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' : 'data-target="#xs-components-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' :
                                            'id="xs-components-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' }>
                                            <li class="link">
                                                <a href="components/DatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatatableDetailRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatatableDetailRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatatableToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatatableToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' : 'data-target="#xs-directives-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' :
                                        'id="xs-directives-links-module-DatatableModule-0b6d0d387f9c2375d81d83f3d6bb722320b6e5e6bbf8871f8b3b0276c9718de4bed7ec761f1cbf410f4ab539f84e8c42446ababdde04630b505ed5097ecd508a"' }>
                                        <li class="link">
                                            <a href="directives/CdkDetailRowDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdkDetailRowDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorModule.html" data-type="entity-link" >ErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ErrorModule-486203b086392a55cae05d1c61bd048b332b21bf3ac7a959c1a969e174800b6ed5c817fd26d67a8455fe994ee3a69013301d1631a47d993ae554be49e07ba606"' : 'data-target="#xs-components-links-module-ErrorModule-486203b086392a55cae05d1c61bd048b332b21bf3ac7a959c1a969e174800b6ed5c817fd26d67a8455fe994ee3a69013301d1631a47d993ae554be49e07ba606"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-486203b086392a55cae05d1c61bd048b332b21bf3ac7a959c1a969e174800b6ed5c817fd26d67a8455fe994ee3a69013301d1631a47d993ae554be49e07ba606"' :
                                            'id="xs-components-links-module-ErrorModule-486203b086392a55cae05d1c61bd048b332b21bf3ac7a959c1a969e174800b6ed5c817fd26d67a8455fe994ee3a69013301d1631a47d993ae554be49e07ba606"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorRoutingModule.html" data-type="entity-link" >ErrorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link" >HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-b81244a9efae17506a4780a6c9b6c32c11236ef39cd7f44d18a505cf697bf4f0532625feaec55839be014c7ab3a4c70e26d8933d68235bba66be649456ddfeb4"' : 'data-target="#xs-components-links-module-HelpModule-b81244a9efae17506a4780a6c9b6c32c11236ef39cd7f44d18a505cf697bf4f0532625feaec55839be014c7ab3a4c70e26d8933d68235bba66be649456ddfeb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-b81244a9efae17506a4780a6c9b6c32c11236ef39cd7f44d18a505cf697bf4f0532625feaec55839be014c7ab3a4c70e26d8933d68235bba66be649456ddfeb4"' :
                                            'id="xs-components-links-module-HelpModule-b81244a9efae17506a4780a6c9b6c32c11236ef39cd7f44d18a505cf697bf4f0532625feaec55839be014c7ab3a4c70e26d8933d68235bba66be649456ddfeb4"' }>
                                            <li class="link">
                                                <a href="components/HelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link" >HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-2c942a3a975e64ba4a89a96605cbcd14a6ee1c3a8f1a372b0ded60b83184020c745534cd9d7a3a9fbb81a46e7dea8419c1028fa21aad42f313931203092fb18d"' : 'data-target="#xs-components-links-module-HomeModule-2c942a3a975e64ba4a89a96605cbcd14a6ee1c3a8f1a372b0ded60b83184020c745534cd9d7a3a9fbb81a46e7dea8419c1028fa21aad42f313931203092fb18d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-2c942a3a975e64ba4a89a96605cbcd14a6ee1c3a8f1a372b0ded60b83184020c745534cd9d7a3a9fbb81a46e7dea8419c1028fa21aad42f313931203092fb18d"' :
                                            'id="xs-components-links-module-HomeModule-2c942a3a975e64ba4a89a96605cbcd14a6ee1c3a8f1a372b0ded60b83184020c745534cd9d7a3a9fbb81a46e7dea8419c1028fa21aad42f313931203092fb18d"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-36a9f3fd70873d0f157a9a2ecd1a0a78ad46a9ae72b93a11329412145daff5895e0d85668c0805b81b097c6dad80ca2815885bf8de80a3b9d30a7097764000a3"' : 'data-target="#xs-components-links-module-LoginModule-36a9f3fd70873d0f157a9a2ecd1a0a78ad46a9ae72b93a11329412145daff5895e0d85668c0805b81b097c6dad80ca2815885bf8de80a3b9d30a7097764000a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-36a9f3fd70873d0f157a9a2ecd1a0a78ad46a9ae72b93a11329412145daff5895e0d85668c0805b81b097c6dad80ca2815885bf8de80a3b9d30a7097764000a3"' :
                                            'id="xs-components-links-module-LoginModule-36a9f3fd70873d0f157a9a2ecd1a0a78ad46a9ae72b93a11329412145daff5895e0d85668c0805b81b097c6dad80ca2815885bf8de80a3b9d30a7097764000a3"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlanningModule.html" data-type="entity-link" >PlanningModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlanningModule-eea2b9ab13999a46d5d2902a58b96295bf5c14e8f95ddc7b64735b8c6461bcfd323cd7b64cb2317dcf60bd0d102096d41e4ff6ca6a7f0c0817f85facfd7969ef"' : 'data-target="#xs-components-links-module-PlanningModule-eea2b9ab13999a46d5d2902a58b96295bf5c14e8f95ddc7b64735b8c6461bcfd323cd7b64cb2317dcf60bd0d102096d41e4ff6ca6a7f0c0817f85facfd7969ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlanningModule-eea2b9ab13999a46d5d2902a58b96295bf5c14e8f95ddc7b64735b8c6461bcfd323cd7b64cb2317dcf60bd0d102096d41e4ff6ca6a7f0c0817f85facfd7969ef"' :
                                            'id="xs-components-links-module-PlanningModule-eea2b9ab13999a46d5d2902a58b96295bf5c14e8f95ddc7b64735b8c6461bcfd323cd7b64cb2317dcf60bd0d102096d41e4ff6ca6a7f0c0817f85facfd7969ef"' }>
                                            <li class="link">
                                                <a href="components/PlanningComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlanningComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanningRoutingModule.html" data-type="entity-link" >PlanningRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-2aa7722760a75e80311aca580ada143e9976efbbf7dd6687feb65d0f2f8a28ad41eb95c86a1f8725fa002e5b83046aa55064438ee5a196989790d01e3b932c69"' : 'data-target="#xs-components-links-module-ProfileModule-2aa7722760a75e80311aca580ada143e9976efbbf7dd6687feb65d0f2f8a28ad41eb95c86a1f8725fa002e5b83046aa55064438ee5a196989790d01e3b932c69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-2aa7722760a75e80311aca580ada143e9976efbbf7dd6687feb65d0f2f8a28ad41eb95c86a1f8725fa002e5b83046aa55064438ee5a196989790d01e3b932c69"' :
                                            'id="xs-components-links-module-ProfileModule-2aa7722760a75e80311aca580ada143e9976efbbf7dd6687feb65d0f2f8a28ad41eb95c86a1f8725fa002e5b83046aa55064438ee5a196989790d01e3b932c69"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link" >RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-446012b163e492560eabe64eff0f016b6c132cf8da745910df364829473d979d4c35e556ba9190f547aedcc337d214f0c3bffd06c0ae6ae040647b582aba1832"' : 'data-target="#xs-components-links-module-RegisterModule-446012b163e492560eabe64eff0f016b6c132cf8da745910df364829473d979d4c35e556ba9190f547aedcc337d214f0c3bffd06c0ae6ae040647b582aba1832"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-446012b163e492560eabe64eff0f016b6c132cf8da745910df364829473d979d4c35e556ba9190f547aedcc337d214f0c3bffd06c0ae6ae040647b582aba1832"' :
                                            'id="xs-components-links-module-RegisterModule-446012b163e492560eabe64eff0f016b6c132cf8da745910df364829473d979d4c35e556ba9190f547aedcc337d214f0c3bffd06c0ae6ae040647b582aba1832"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link" >RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-9543aff7e3f41419b9b42d2dde8a501fbf0075f534f1ade271e65835367497a09f10dc75335495fb4769151aedd92f5a0f40817333de2b8bace98a65fa2ab4f8"' : 'data-target="#xs-components-links-module-SettingsModule-9543aff7e3f41419b9b42d2dde8a501fbf0075f534f1ade271e65835367497a09f10dc75335495fb4769151aedd92f5a0f40817333de2b8bace98a65fa2ab4f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-9543aff7e3f41419b9b42d2dde8a501fbf0075f534f1ade271e65835367497a09f10dc75335495fb4769151aedd92f5a0f40817333de2b8bace98a65fa2ab4f8"' :
                                            'id="xs-components-links-module-SettingsModule-9543aff7e3f41419b9b42d2dde8a501fbf0075f534f1ade271e65835367497a09f10dc75335495fb4769151aedd92f5a0f40817333de2b8bace98a65fa2ab4f8"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f7000bc37a96a2d8d640c9b9e147a8f8efb435f83738c907414019d0e243351d7608676592b94af8322e69229739e5d129232ba64ca00340332bfc2bff9d18e6"' : 'data-target="#xs-components-links-module-SharedModule-f7000bc37a96a2d8d640c9b9e147a8f8efb435f83738c907414019d0e243351d7608676592b94af8322e69229739e5d129232ba64ca00340332bfc2bff9d18e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f7000bc37a96a2d8d640c9b9e147a8f8efb435f83738c907414019d0e243351d7608676592b94af8322e69229739e5d129232ba64ca00340332bfc2bff9d18e6"' :
                                            'id="xs-components-links-module-SharedModule-f7000bc37a96a2d8d640c9b9e147a8f8efb435f83738c907414019d0e243351d7608676592b94af8322e69229739e5d129232ba64ca00340332bfc2bff9d18e6"' }>
                                            <li class="link">
                                                <a href="components/AnnouncementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnouncementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CdkBottomSheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdkBottomSheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarRatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StarRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewStatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewStatesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TipsModule.html" data-type="entity-link" >TipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TipsModule-17667024945664f30e9572bff0b96a08ac52548d3be2221a9d5677cc58e421482c04979ebd690e30ec5c4971b268f16863ee7dd5a445f1d9a457202fa0744450"' : 'data-target="#xs-components-links-module-TipsModule-17667024945664f30e9572bff0b96a08ac52548d3be2221a9d5677cc58e421482c04979ebd690e30ec5c4971b268f16863ee7dd5a445f1d9a457202fa0744450"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TipsModule-17667024945664f30e9572bff0b96a08ac52548d3be2221a9d5677cc58e421482c04979ebd690e30ec5c4971b268f16863ee7dd5a445f1d9a457202fa0744450"' :
                                            'id="xs-components-links-module-TipsModule-17667024945664f30e9572bff0b96a08ac52548d3be2221a9d5677cc58e421482c04979ebd690e30ec5c4971b268f16863ee7dd5a445f1d9a457202fa0744450"' }>
                                            <li class="link">
                                                <a href="components/TipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TipsRoutingModule.html" data-type="entity-link" >TipsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AnnouncementModel.html" data-type="entity-link" >AnnouncementModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmationButtonModel.html" data-type="entity-link" >ConfirmationButtonModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmationModel.html" data-type="entity-link" >ConfirmationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatatableDatasourseModel.html" data-type="entity-link" >DatatableDatasourseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatatableToolbarModel.html" data-type="entity-link" >DatatableToolbarModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/IServices.html" data-type="entity-link" >IServices</a>
                            </li>
                            <li class="link">
                                <a href="classes/LayoutModel.html" data-type="entity-link" >LayoutModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationModel.html" data-type="entity-link" >NotificationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Options.html" data-type="entity-link" >Options</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseBodyModel.html" data-type="entity-link" >ResponseBodyModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseEventType.html" data-type="entity-link" >ResponseEventType</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseModel.html" data-type="entity-link" >ResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseStatusModel.html" data-type="entity-link" >ResponseStatusModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Temp.html" data-type="entity-link" >Temp</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewStatesModel.html" data-type="entity-link" >ViewStatesModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnnouncementService.html" data-type="entity-link" >AnnouncementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralService.html" data-type="entity-link" >GeneralService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SampleService.html" data-type="entity-link" >SampleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Services.html" data-type="entity-link" >Services</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidenavInfoService.html" data-type="entity-link" >SidenavInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidenavService.html" data-type="entity-link" >SidenavService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BaseInterceptor.html" data-type="entity-link" >BaseInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UnauthGuard.html" data-type="entity-link" >UnauthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBreadcrumb.html" data-type="entity-link" >IBreadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConstantNumber.html" data-type="entity-link" >IConstantNumber</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConstantStrinig.html" data-type="entity-link" >IConstantStrinig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISample.html" data-type="entity-link" >ISample</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISidenav.html" data-type="entity-link" >ISidenav</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusLevel.html" data-type="entity-link" >IStatusLevel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToolbarButton.html" data-type="entity-link" >IToolbarButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToolbarButtonsName.html" data-type="entity-link" >IToolbarButtonsName</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/ExamplePipe.html" data-type="entity-link" >ExamplePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});