import { Observable, observable } from "@microsoft/fast-element";

export class Message {

    @observable public text: string = "";
    @observable public amount: string = "";

    constructor(
        private _amount: string = "",
        private _text: string = "",
        public name?: string,
        public postDate?: Date
    ) {
        this.text = this._text;
        this.amount = this._amount;
    }
}