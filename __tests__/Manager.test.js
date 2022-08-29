const Manager = require('../lib/Manager');

const managers = new Manager('Tatiana', '42', 'ouroboros@gruyere.tech', '37', 'Manager');

test('decide if the new person created from manager is received', () => {
    expect(managers.name).toBe('Tatiana');
    expect(managers.id).toBe('42');
    expect(managers.email).toBe('ouroboros@gruyere.tech');
    expect(managers.officenumber).toBe("37");
});

test('show that the new managers gets their name', () => {
    expect(managers.getName())
        .toBe('Tatiana');
});

test('show that the new managers gets their ID', () => {
    expect(managers.getId())
        .toBe('42');
});

test('show that the new managers gets their email', () => {
    expect(managers.getEmail())
        .toBe('ouroboros@gruyere.tech');
});

test('show that the new managers gets their officenumber', () => {
    expect(managers.getofficeNumber())
        .toBe('37');
});

test('show that the new manager gets added', () => {
    expect(managers.getRole())
        .toBe('Manager');
});