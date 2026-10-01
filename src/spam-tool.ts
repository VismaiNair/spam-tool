import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import "@material/web/textfield/outlined-text-field.js"
import '@material/web/button/filled-button.js'
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

@customElement('spam-tool')
export class SpamTool extends LitElement {

  @query('#text')
  textbox!: MdOutlinedTextField;

  @query('#count')
  countbox!: MdOutlinedTextField;

  @state()
  private outputText: string = '';

  static styles = css`
  :host {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    min-height: 100vh;
    --md-sys-color-primary: #0b214a;
    border-radius: 5px;
  }

  .grid {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    flex: 1;
  }

  footer {
    background-color: #0b214a;
    font-family: "Google Sans Flex";
    color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    text-align: center;
  }

  header {
   background-color: #0b214a;
    font-family: "Google Sans Flex";
    color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    text-align: center;
    
  }

  /* Exclude footer and structural divs from the blanket margin */
  .grid * {
    margin: 1rem;
  }

  a {
    color: #72c1ee;
  }

  md-filled-button {
    height: 10vh;
    width: 33vw;
    --md-filled-button-container-shape: 8px;
    --md-filled-button-label-text-font: 'Google Sans Flex', sans-serif;
  }

  md-outlined-text-field {
    
    width: 33vw;
    --md-outlined-text-field-input-text-font: 'Google Sans Flex', sans-serif;
    --md-outlined-text-field-label-text-font: 'Google Sans Flex', sans-serif;
    --md-outlined-text-field-container-shape: 8px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #output {
    border-width: 4px;
    border-color: #0b214a;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-family: "Google Sans Flex";
  }
`;

  private handleClick() {
    const text:string = this.textbox.value

    const count:number = Number(this.countbox.value)

    let result:string = ""

    for (let i:number = 0; i < count; i += 1) {
      result += text
    }

    this.outputText = result;
  }

  render() {
    return html`
    <header>
      <h1>Auto Spam Tool</h1>
    </header>
    <div class="grid">
      <div>
      <md-outlined-text-field id="text" label="Spam Text" placeholder="Enter Text to be Spammed">
      </md-outlined-text-field>
      <md-outlined-text-field id="count" label="Count" type="number" placeholder="Enter number of times">
      </md-outlined-text-field>
      <md-filled-button @click="${this.handleClick}" >Generate</md-filled-button>
      </div>
      <div id="output">
        ${this.outputText}
      </div>
    </div>
    <footer>
      <p>Made with ❤️ by Vismai Nair</p>
      <a href="https://github.com/vismainair/spam-tool" target="_blank">See the code</a>
    </footer>
      
    `;
  }
}
