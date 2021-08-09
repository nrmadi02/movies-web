class FooterCustom extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: "open"});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
		<style>
		.textFooter {
			text-align: center;
			padding: 1em;
			font-weight: bold;
			color: white;
		}
		.bg-gelap{
			background-color: grey;
		}
		</style>
        <footer class="bg-gelap">
        <div>
            <p class="textFooter">by Nur Ahmadi 2021</p>
        </div>
        </footer>`;
	}
}

customElements.define("footer-custom", FooterCustom);
