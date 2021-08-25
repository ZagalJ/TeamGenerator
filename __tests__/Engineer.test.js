const Engineer = require ('../lib/Engineer');

test ('creates an Engineer', () => {
    const engineer = new Engineer ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'ZagalJ');

    expect (engineer.github).toEqual(expect.any(String));
});

test('gets engineer github user', () => {
    const engineer = new Engineer ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'ZagalJ');
    expect (engineer.getGithub()).toEqual(expect.stringContaining(engineer.github,toString()));
});
test('gets engineer role', () => {
    const engineer = new Engineer ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'ZagalJ');
    expect (engineer.getRole()).toEqual("Engineer");
});