import { litelement } from 'lit-element';
export declare class susisketch extends litelement {
    static styles: import("lit-element/lib/css-tag").CSSResult;
    images: never[];
    count: number;
    protected initialize(): void;
    render(): import("lit-html/lib/template-result").TemplateResult;
    private _onclick;
    foo(): string;
}
declare global {
    interface htmlelementtagnamemap {
        'susi-sketch': susisketch;
    }
}
//# sourceMappingURL=SusiSketch.d.ts.map