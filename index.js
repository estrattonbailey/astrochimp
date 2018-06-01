let count = 0

function encode (o) {
  const keys = Object.keys(o)
  let qs = []

  for (let i = 0; i < keys.length; i++) {
    qs.push(`${keys[i]}=${o[keys[i]]}`)
  }

  return encodeURIComponent(qs.join('&'))
}

export default function astrochimp (url, data, done) {
  if (!url || !data) {
    throw new Error(`astrochimp requires both a URL and a data object`)
  }

  const s = document.createElement('script')
  const cb = `__astrochimp${count++}`
  s.src = `${url}&${encode(data)}&c=${cb}`.replace(/post\?u=/, 'post-json?u=')

  window[cb] = function (data) {
    if (/[0-9]\s-/.test(data.msg) || data.result === 'error') return done(data, null)
    done(null, data)
    cleanup()
  }

  function cleanup () {
    window[cb] = () => {}
    document.head.removeChild(s)
  }

  document.head.appendChild(s)

  return function cancel () {
    cleanup()
  }
}
