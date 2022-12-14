const Employee = require('../lib/Employee');

const person = new Employee('Tatiana', '42', 'ouroboros@gruyere.tech', 'Employee');

test('decide if the new person created from employee is received', () => {
    expect(person.name).toBe('Tatiana');
    expect(person.id).toBe('42');
    expect(person.email).toBe('ouroboros@gruyere.tech');
}
);

test('show that the new person gets their name', () => {
    const name = "Tatiana";
    const e = new Employee(name);

    expect(e.getName())
        .toBe(name);
});

test('show that the new person gets their ID', () => {
    expect(person.getId())
        .toBe('42');
});

test('show that the new person gets their email', () => {
    expect(person.getEmail())
        .toBe('ouroboros@gruyere.tech');
});

test('show that the new person gets added', () => {
    expect(person.getRole())
        .toBe('Employee');
});

