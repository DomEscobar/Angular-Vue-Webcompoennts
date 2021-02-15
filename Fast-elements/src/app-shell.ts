import {
    customElement,
    FASTElement,
    html,
    css,
    observable,
    ExecutionContext,
} from "@microsoft/fast-element";
import { Message } from "./message.model";

function eventDetail<T = any>(ctx: ExecutionContext) {
    return (ctx.event as CustomEvent).detail as T;
}

const template = html<AppShell>`
    <h1>Fast-elements</h1>
    
    <fountain-submit @submission-action=${(x, c) => x.sendText(eventDetail(c))}></fountain-submit>

    <i>${(x) =>  x.providedMessage?.name} : ${(x) => x.providedMessage?.text}</i>
`;

const styles = css`
`;

@customElement({
    name: "fountain-chain",
    template,
    styles,
})
export class AppShell extends FASTElement {
    @observable recalledMessage?: Message;
    @observable providedMessage?: Message;

    public sendText(message: Message) {

        message.name = "Me";
        message.postDate = new Date();

        this.providedMessage = message;
        this.recalledMessage = new Message("0.01", "Das ist cool", "Mifi", new Date());
    }

    // todo as component
    public dateFormated(date? :Date) : string{
        return `${date?.getDay()}`;
    } 
}
