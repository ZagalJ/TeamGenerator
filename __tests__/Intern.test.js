const Intern = require ('../lib/Intern');

test ('creates an Intern', () => {
    const intern = new Intern ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'UMN');

    expect (intern.school).toEqual(expect.any(String));
});

test('gets Intern school', () => {
    const intern = new Intern ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'UMN');
    expect (intern.getSchool()).toEqual(expect.stringContaining(intern.school,toString()));
});
test('gets Intern role', () => {
    const intern = new Intern ('Jonathan', 2, "jonathan.zagal@hotmail.com", 'UMN');
    expect (intern.getRole()).toEqual("Intern");
});