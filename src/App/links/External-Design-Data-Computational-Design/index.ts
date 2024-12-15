export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const iframe = document.createElement('iframe');
        iframe.src = 'https://namjulee.github.io/njs-lab-public/data-in-design?ui=0';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.background = '#000';
        iframe.style.border = '0px';
        div.appendChild(iframe);

    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}
