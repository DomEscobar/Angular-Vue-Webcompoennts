import { FASTElement } from "@microsoft/fast-element";
import { Message } from "./message.model";
export declare class AppShell extends FASTElement {
    recalledMessage?: Message;
    providedMessage?: Message;
    sendText(message: Message): void;
    dateFormated(date?: Date): string;
}
//# sourceMappingURL=app-shell.d.ts.map