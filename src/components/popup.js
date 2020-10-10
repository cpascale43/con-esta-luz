// Uncomment to work on popup.

/* import React, { useEffect, useState } from "react"

import "./popup.css"

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 5 seconds!")
      setIsOpen("fd-is-open")
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = e => {
    console.log(e.target.value)
  }

  //   By default, your popup form will not display. To display it, add class fd-is-open at <div class="fd-modal ff__modal"> to the code above.

  return (
    <div className="fd-ef-5f81313776d8d68c6dcf0050">
      <div className={`fd-modal ff__modal ${isOpen}`}>
        <div className="fd-modal__dialog ff__dialog">
          <div className="fd-modal__content ff__content">
            <div className="fd-modal__body ff__body">
              <div className="ff__wrapper">
                <div className="ff__left">
                  <div className="ff__image">
                    <div className="ff__imageInner">&nbsp;</div>
                  </div>
                </div>
                <div className="ff__right">
                  <form
                    className="ff__form"
                    action="https://form.flodesk.com/submit"
                    method="post"
                    data-form="fdv2"
                    onChange={handleChange}
                  >
                    <h3 className="ff__title">
                      <div>Join our mailing list.</div>
                    </h3>
                    <div className="ff__subtitle">
                      <div>
                        Be the first to know about new arrivals, sales, and
                        special events.
                      </div>
                    </div>
                    <div className="ff__fields">
                      <div className="fd-form-group">
                        <input
                          className="fd-form-control ff__control"
                          type="text"
                          name="email"
                          placeholder="Email address"
                        />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value=""
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <input
                        type="hidden"
                        name="submitToken"
                        onChange={handleChange}
                        value="1070169a0d581ea8c859d67a0de73f3afa35e655e81a93125a17263fb51c0b8b3506aa846a1f1e84bb46f193fcc85c3300fcc0f2cb6124056970ac407719f85aef03a72294e2d9ab87da24de75a25b12786bd7d9fb4f7130d12efcb8f8a562bd"
                      />
                    </div>
                    <div className="ff__footer">
                      <button
                        type="submit"
                        className="fd-btn ff__button"
                        data-form-el="submit"
                      >
                        <span>Subscribe</span>
                      </button>
                    </div>
                    <div
                      className="fd-success ff__success"
                      data-form-el="success"
                    >
                      <p>Thank you for subscribing!</p>
                    </div>
                    <div
                      className="fd-error ff__error"
                      data-form-el="error"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
            <button
              className="fd-modal__close ff__close"
              onClick={() => setIsOpen(null)}
            >
              <svg
                style={{ width: "1em" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.51 14.51"
              >
                <line
                  x1="1"
                  y1="1"
                  x2="13.51"
                  y2="13.51"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <line
                  x1="13.51"
                  y1="1"
                  x2="1"
                  y2="13.51"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://t.flodesk.com/utm.gif?r=5f81313776d8d68c6dcf0050"
      />
      <script src="https://assets.flodesk.com/form.js?v=1602302406843"></script>
    </div>
  )
}

*/