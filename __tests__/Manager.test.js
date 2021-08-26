const Manager = require ('../lib/Manager');

test( "create manager", () =>{
    const manager = new Manager ("Jonathan", 2, 'Jonathan.zagal@hotmail.com', 3);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () =>{
    const manager = new Manager ("Jonathan", 2, 'Jonathan.zagal@hotmail.com', 3);
    expect (manager.getRole()).toEqual('Manager');
});