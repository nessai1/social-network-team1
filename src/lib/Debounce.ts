export default class Debounce {
    private isBusy: boolean;
    private readonly timer: number;
    private readonly updated: boolean;

    constructor(timer: number = 500, updated: boolean = false) {
        this.timer = timer;
        this.updated = updated;

        this.isBusy = false;
    }

    tryProcess(callback: Function, callbackArgs: Array<any> = []) {
        if (!this.isBusy) {
            this.isBusy = true;
            setTimeout(() => {
                this.isBusy = false;
            }, this.timer);

            return callback(...callbackArgs);
        }

        return null;
    }
}
