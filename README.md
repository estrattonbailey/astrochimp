# astrochimp
Tiny MailChimp list subscribe utility. **394 bytes gzipped.**

## Install
```
npm i astrochimp --save
```

# Usage
```javascript
import astrochimp from 'astrochimp'

const form = document.getElementById('form')
const data = { EMAIL: 'my@email.com' }

astrochimp(form.action, data, (err, data) => {})
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
