var expect = require ('expect');
var {generateMessage, generateLocationMessage} = require ('./message');

describe ('generateMessage', ()=> {
  it ('should generare correct message object', ()=> {
    var from = 'Rodney';
    var text ='Hello how are you';
    var result = generateMessage (from, text);
    expect(typeof result).toBe ('object');
    expect (typeof result.createdAt).toBe ('number');
    expect (result.from).toBe (from);
    expect (result.text).toBe (text);
  });
});

describe ('generateLocationMessage', ()=> {
  it ('should generare correct location object', ()=> {
    var from = 'Rodney';
    var latitude = 5;
    var longitude = -3;
    var result = generateLocationMessage (from, latitude, longitude);
    expect(typeof result).toBe ('object');
    expect (typeof result.createdAt).toBe ('number');
    expect (result.from).toBe (from);
    expect (result.url).toBe (`https://www.google.com/maps?q=${latitude},${longitude}`);

    });
});
