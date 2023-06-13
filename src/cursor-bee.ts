import throttle from "lodash/throttle"
import { html, css } from "./misc"

customElements.define(
  "cursor-bee",
  class extends HTMLElement {
    constructor() {
      super()

      const style = document.createElement("style")
      style.textContent = css`
        .cursor {
          top: 0;
          left: 0;
          position: absolute;
          transform: var(--pos) translate(-50%, -50%);
          transition: transform 3s cubic-bezier(0.29, 1.01, 1, -0.68);
          mix-blend-mode: difference;
          pointer-events: none;
          touch-action: none;
          user-select: none;
        }
      `

      const el = document.createElement("div")
      el.innerHTML = html`<smoking-text class="cursor">🐝</smoking-text>`

      this.attachShadow({ mode: "open" }).append(style, el)
    }

    connectedCallback() {
      document.body.addEventListener(
        "mousemove",
        throttle(ev => {
          this.setAttribute("style", `--pos: translate(${ev.clientX}px, ${ev.clientY}px)`)
        }, 600)
      )
    }
  }
)
