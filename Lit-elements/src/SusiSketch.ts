import {litelement, html, customelement, property, css} from 'lit-element';
import {scriptinjector} from './utils/scriptinjector';

@customelement('susi-sketch')
export class susisketch extends litelement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property({type: array})
  images = [];

  @property({type: number})
  count = 0;


  protected initialize() {
    super.initialize();

    scriptinjector.injectscript('https://unpkg.com/konva@7.0.2/konva.min.js');
  }

  render() {
    return html`
      <button @click='${this._onclick}' part='button'>
        click : ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onclick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface htmlelementtagnamemap {
    'susi-sketch': susisketch;
  }
}
