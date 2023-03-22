export default class LoadMoreButton {
    constructor({selector, hidden=false}) {
        this.refs = this.getRefs(selector);
        if (hidden) {
            this.hide();
        }
    };

    getRefs(selector) {
        const refs = {
            button: document.querySelector('.load-more'),
            label: document.querySelector('.label'),
            };
        return refs;
    };
    
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = "Load more";
    };

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = "Loading...";
    };

    show() {
        this.refs.button.classList.remove('is-hidden');
    };

    hide() {
        this.refs.button.classList.add('is-hidden');
    };
};