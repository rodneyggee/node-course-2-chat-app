var expect = require ('expect');
var {isRealString} = require ('./validation');

describe ('isRealString', ()=> {


  it ('should reject non string values', ()=> {
    var result = isRealString (5);
    expect (result).toBe (false);
  });

  it ('should reject strings with only spaces', ()=> {
    var result = isRealString ('    ');
    expect (result).toBe (false);
  });

  it ('should allow strings with non-space characters', ()=> {
    var result = isRealString ('ccc');
    expect (result).toBe (true);
  });

});
