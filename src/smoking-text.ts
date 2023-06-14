const css = String.raw
const html = String.raw
const rad = Math.PI / 180

class Loop extends HTMLElement {
  fps = 60
  tolerance = 0.1
  #rafID = 0

  get interval() {
    return Number.isFinite(this.fps) ? 1000 / this.fps : this.tolerance
  }

  start(
    cb?: (data: {
      /** delta time */
      delta: DOMHighResTimeStamp
      then: DOMHighResTimeStamp
      interval: number
    }) => void
  ) {
    if (this.#rafID) return

    let then = performance.now()
    let interval: number

    const gameLoop = (now: DOMHighResTimeStamp) => {
      this.#rafID = requestAnimationFrame(gameLoop)
      interval !== this.interval && (interval = this.interval)
      const delta = now - then

      if (delta >= interval - this.tolerance) {
        then = now - (delta % interval)
        if (delta >= interval - this.tolerance) {
          cb?.({ delta, then, interval })
        }
      }
    }
    this.#rafID = requestAnimationFrame(gameLoop)
  }

  stop() {
    if (this.#rafID === 0) return
    cancelAnimationFrame(this.#rafID)
    this.#rafID = 0
  }
}

class SmokingText extends Loop {
  bfx!: number
  bfy!: number
  turbulence!: HTMLElement

  constructor() {
    super()
    this.fps = 15

    const styleEl = document.createElement("style")
    styleEl.textContent = css`
      :host {
        --bodyBg: var(--ph);
        --textColor: var(--blood);
        --textSize: 10;
        user-select: none;
        pointer-events: none;
        display: inline-block;
      }

      .smoke {
        filter: url("#filter");
      }

      .text {
        background: linear-gradient(#fff, #999, #ddd, #888);
        background-clip: text;
        filter: blur(5px) contrast(120%);
        color: var(--textColor);
        font-size: calc(var(--textSize) * 1rem);
      }
    `

    const markupEl = document.createElement("div")
    markupEl.classList.add("smoke")
    markupEl.innerHTML = html`
      <slot class="text"></slot>
      <svg width="0">
        <filter id="filter">
          <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03" numOctaves="20"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    `

    this.attachShadow({ mode: "open" }).append(styleEl, markupEl)
  }

  connectedCallback() {
    this.turbulence = this.shadowRoot!.querySelector("#turbulence")!

    this.start(({ then }) => {
      this.turbulence.setAttributeNS(null, "baseFrequency", this.freq(then / 50))
    })
  }

  freq(frames: number) {
    frames += 0.2
    this.bfx = 0.03
    this.bfy = 0.03
    this.bfx += 0.005 * Math.cos(frames * rad)
    this.bfy += 0.005 * Math.sin(frames * rad)
    return `${String(this.bfx)} ${String(this.bfy)}`
  }
}

customElements.define("smoking-text", SmokingText)
