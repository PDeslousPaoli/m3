class Widget extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <p>Super carte</p>
    `

  }
}

customElements.define('account-card', Widget);
