import should from 'should'
import regMatchArr from '../src/index'

describe('regMatchArr', function () {
  it('return matched array', function () {
    const str = 'hi, i am timqian, 600, 564, 112'
    const regExp = /(\d{3})(,)/ig
    const matchedArr = regMatchArr(str, regExp)
    matchedArr.should.deepEqual([ [ '600', ',' ], [ '564', ',' ] ])
  })
})
