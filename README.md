# Find regExp matched item array of given string

# install

```
$ npm i reg-match-arr
```

# usage example:

```js
import regMatchArr from 'reg-match-arr'
const str = 'hi, i am timqian, 600, 564, 112'
const regExp = /(\d{3})(,)/ig
regMatchArr(str, regExp) // [ [ '600', ',' ], [ '564', ',' ] ]
```
