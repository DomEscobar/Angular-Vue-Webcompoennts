import { FASTElement } from "@microsoft/fast-element";
import { Message } from "./message.model";
export declare class FountainSubmit extends FASTElement {
    message: Message;
    private _message$;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get canSubmit(): boolean;
    submit(): void;
    onChangeText(event: Event): void;
    onChangeAmount(event: Event): void;
}
//# sourceMappingURL=fountain-submit.d.ts.map