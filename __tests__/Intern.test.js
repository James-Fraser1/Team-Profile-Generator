const Intern = require('../lib/Intern');

const interns = new Intern('Tatiana', '42', 'ouroboros@gruyere.tech');

test('decide if the new person created from engineer is received', () => {
    expect(interns.name).toBe('Tatiana');
    expect(interns.id).toBe('42');
    expect(interns.email).toBe('ouroboros@gruyere.tech');
    expect(interns.school).toBe('Hogwarts');
}
);

test('show that the new interns gets their name'), () => {
    expect(interns.getName())
    .toBe('Tatiana');
};

test('show that the new interns gets their ID'), () => {
    expect(interns.getId())
    .toBe('42');
};

test('show that the new interns gets their email'), () => {
    expect(interns.getEmail())
    .toBe('ouroboros@gruyere.tech');
};

test('show that the new interns gets their school'), () => {
    expect(interns.getschool())
    .toBe('Hogwarts');
};

test('show that the new interns gets added'), () => {
    expect(interns.getRole())
    .toBe('Intern');
};