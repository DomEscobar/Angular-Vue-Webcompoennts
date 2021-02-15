import {
    FASTElement,
    html,
    observable,
    customElement,
    css,
    Observable,
} from "@microsoft/fast-element";
import { Message } from "./message.model";

const template = html<FountainSubmit>`
    <form @submit=${x => x.submit()}>

        <label> Amount </label>
        <input type="text" :value=${x => x.message.amount}  @input=${(x, c) => x.onChangeAmount(c.event)}/>

        <label> Message </label>
        <textarea
            :value=${x => x.message.text}
            @input=${(x, c) => x.onChangeText(c.event)}
        ></textarea>
        <button
            type="submit"
            ?disabled=${x => !x.canSubmit}
        >
            SHOUT
        </button>
    </form>
`;

const styles = css`
`;

@customElement({
    name: "fountain-submit",
    template,
    styles,
})
export class FountainSubmit extends FASTElement {

    @observable public message: Message = new Message();
    private _message$ = Observable.getNotifier(this.message);

    connectedCallback() {
        super.connectedCallback();

        this._message$.subscribe({
            handleChange(message: Message) {
                if (message.text === "domi") {
                    alert("cool");
                }
            }
        }, 'text');
    }

    disconnectedCallback() {
    }

    get canSubmit() {
        return !!this.message.text && !!this.message.amount;
    }

    public submit() {
        if (!this.canSubmit) {
            return;
        }

        this.$emit("submission-action", this.message);
    }

    public onChangeText(event: Event) {
        this.message.text = (event.target! as HTMLInputElement).value;
    }
    public onChangeAmount(event: Event) {
        this.message.amount = (event.target! as HTMLInputElement).value;
    }
}
