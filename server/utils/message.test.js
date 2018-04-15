var expect = require ('expect');
var {generateMessage} = require ('./message');

describe ('generateMessage', ()=> {
  it ('should generare correct message object', ()=> {
    var from = 'Rodney';
    var text ='Hello how are you';
    var result = generateMessage (from, text);
    expect(typeof result).toBe ('object');
    expect (typeof result.createdAt).toBe ('number');
    expect (result.from).toBe (from);
    expect (result.text).toBe (text);
  })
})
