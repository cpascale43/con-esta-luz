export const popupScript = (function (w, d, t, s, n) {
  console.log(document.cookie)
  console.log("im running!!!")
  w.FlodeskObject = n
  var fn = function () {
    ;(w[n].q = w[n].q || []).push(arguments)
  }
  w[n] = w[n] || fn
  var f = d.getElementsByTagName(t)[0]
  var e = d.createElement(t)
  var h = "?v=" + new Date().getTime()
  e.async = true
  e.src = s + h
  f.parentNode.insertBefore(e, f)
})(window, document, "script", "https://assets.flodesk.com/universal.js", "fd")
window.fd("form", {
  formId: "5f80fc68bf43d82e71bfb4a8",
})
