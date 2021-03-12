var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { litelement, html, customelement, property, css } from 'lit-element';
import { scriptinjector } from './utils/scriptinjector';
let susisketch = class susisketch extends litelement {
    constructor() {
        super(...arguments);
        this.images = [];
        this.count = 0;
    }
    initialize() {
        super.initialize();
        scriptinjector.injectscript('https://unpkg.com/konva@7.0.2/konva.min.js');
    }
    render() {
        return html `
      <button @click='${this._onclick}' part='button'>
        click : ${this.count}
      </button>
      <slot></slot>
    `;
    }
    _onclick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
susisketch.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property({ type: array })
], susisketch.prototype, "images", void 0);
__decorate([
    property({ type: number })
], susisketch.prototype, "count", void 0);
susisketch = __decorate([
    customelement('susi-sketch')
], susisketch);
export { susisketch };
//# sourceMappingURL=SusiSketch.js.map