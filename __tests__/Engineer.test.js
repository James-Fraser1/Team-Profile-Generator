const Engineer = require('../lib/Engineer');

const engineers = new Engineer('Tatiana', '42', 'ouroboros@gruyere.tech', 'Alatreon-01', 'Engineer');

test('decide if the new person created from engineer is received', () => {
    expect(engineers.name).toBe('Tatiana');
    expect(engineers.id).toBe('42');
    expect(engineers.email).toBe('ouroboros@gruyere.tech');
    expect(engineers.gitHub).toBe('Alatreon-01');
}
);

test('show that the new engineers gets their name', () => {
    expect(engineers.getName())
        .toBe('Tatiana');
});

test('show that the new engineers gets their ID', () => {
    expect(engineers.getId())
        .toBe('42');
});

test('show that the new engineers gets their email', () => {
    expect(engineers.getEmail())
        .toBe('ouroboros@gruyere.tech');
});

test('show that the new engineers gets their Github', () => {
    expect(engineers.getgitHub())
        .toBe('Alatreon-01');
});

test('show that the new engineers gets added', () => {
    expect(engineers.getRole())
        .toBe('Engineer');
});