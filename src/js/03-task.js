// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

const users = [
  { name: 'Bobby', phone: 24543543 },
  { name: 'Peter', phone: 345634 },
  {name: 'Will', phone: 43543645},
]

for (const user of users) {
  console.log(`${user.name} - ${user.phone}`);
}