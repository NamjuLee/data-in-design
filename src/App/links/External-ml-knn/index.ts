export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const iframe = document.createElement('iframe');
        iframe.src = 'https://namjulee.github.io/njs-lab-public/lab/ai-&-ml-for-designers/knn-iris-prediction?ui=0';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border ='none';
        iframe.style.background = '#fff';
        div.appendChild(iframe);
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}

