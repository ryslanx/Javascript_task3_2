// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let house = {
//     quantityOfRooms: 10,
//     light: true,
//     color: "white"
// };
// let book = {
//     author: "Ivan Bagryanii",
//     pages: 323,
//     title: "The hunter and the hunted"
// };
// let number = {
//     big: true,
//     exactlyHowMany: 100,
//     currency: "$"
// };
// let language = {
//     name: "ukrainian",
//     country: "Ukraine",
//     words: 100000
// };
// let programmingLanguage = {
//     interpreted: true,
//     hard: true,
//     transliteration: "J - A - V - A - S - C - R - I - P - T"
// }
//
// let car = {
//     model: "Bugatti Veyron",
//     fast: true,
//     boost: ['1 speed boost', '2 speed boost'],
//     owner: {
//         name: "Oleg from second floor"
//     }
// };
// let lamp = {
//     isOn: true,
//     operatingMode: ["day light", "night light"],
//     functions: {
//         onOrOFF: "switches on or switches off the lamp",
//         changeOperatingMode: "changes the mode",
//     }
// };
// let computerMouse = {
//     buttons: ["middle button", "right button", "left button", "circle"],
//     isOn: true,
//     functions: {
//         clickOnRightButton: "the click on the right button occurred",
//         clickOnLeftButton: "the click on the left button occurred",
//     }
// };
// let person = {
//     name: "Sergiy",
//     surname: "Peterson",
//     realEstate: ["flat", "house", "warehouse", "shop"],
//     wife: {
//         name: "Victoria",
//         age: 23
//     }
// };
// let computer = {
//     cpu: 4,
//     ram: 16,
//     devices: ["printer", "mouse", "Wi-Fi"],
//     functions: {
//         clock: "ordinary clock",
//         background: "blue",
//         checkWindowState: "300 ms"
//     }
// };
//
// let allObjects = [house, book, number, language, programmingLanguage, car, lamp, computerMouse, person, computer];
// for (let object of allObjects) {
//     for (const objectKey in object) {
//         console.log(objectKey);
//     }
// }

// for (let object of allObjects) {
//     for (const key of Object.keys(object)) {
//         console.log(key)
//     }
// }


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cars = [{
//     model: "Ferrari1",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari2",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari3",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari4",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari5",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari6",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari7",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari8",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari9",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari10",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// }];
//
// let cities = [{
//     name: "Lviv",
//     population: 700000,
//     country: "Ukraine",
//     region: "Western Ukraine"
// },{
//     name: "Lviv",
//     population: 700000,
//     country: "Ukraine",
//     region: "Western Ukraine"
// },{
//     name: "Lviv",
//     population: 700000,
//     country: "Ukraine",
//     region: "Western Ukraine"
// },{
//     name: "Lviv",
//     population: 700000,
//     country: "Ukraine",
//     region: "Western Ukraine"
// },{
//     name: "Lviv",
//     population: 700000,
//     country: "Ukraine",
//     region: "Western Ukraine"
// }];
//
// let carsWithDriver = [{
//     model: "Hyundai Elantra",
//     year: 2000,
//     power: "100 horses",
//     color: "black",
//     driver: {
//         name: "Rustam",
//         age: 30,
//         sex: "male",
//         experience: 3
//     }
// },{
//     model: "Hyundai Elantra",
//     year: 2000,
//     power: "100 horses",
//     color: "black",
//     driver: {
//         name: "Rustam",
//         age: 30,
//         sex: "male",
//         experience: 3
//     }
// },{
//     model: "Hyundai Elantra",
//     year: 2000,
//     power: "100 horses",
//     color: "black",
//     driver: {
//         name: "Rustam",
//         age: 30,
//         sex: "male",
//         experience: 3
//     }
// },{
//     model: "Hyundai Elantra",
//     year: 2000,
//     power: "100 horses",
//     color: "black",
//     driver: {
//         name: "Rustam",
//         age: 30,
//         sex: "male",
//         experience: 3
//     }
// },{
//     model: "Hyundai Elantra",
//     year: 2000,
//     power: "100 horses",
//     color: "black",
//     driver: {
//         name: "Rustam",
//         age: 30,
//         sex: "male",
//         experience: 3
//     }
// }];
//
//
//
// function whileIteration(array) {
//     let i = 0;
//     while (i < array.length) {
//         let objectKeys = Object.keys(array[i]);
//         let j = 0;
//         while (j < objectKeys.length) {
//             console.log(objectKeys[j], array[i][objectKeys[j]]);
//             j++;
//         }
//         i++;
//     }
// }
//
// function forIteration(array) {
//     for (let i = 0; i < array.length; i++) {
//         const arrayKeys = Object.keys(array[i]);
//         for (let j = 0; j < arrayKeys.length; j++) {
//             console.log(arrayKeys[j], array[i][arrayKeys[j]]);
//         }
//     }
// }
//
// function forOfIteration(array) {
//     for (const object of array) {
//         const arrayKeys = Object.keys(object);
//         for (const key of arrayKeys) {
//             console.log(key, object[key]);
//         }
//     }
// }

// function convertToJSON(array) {
//     let converted = [];
//     for (const object of array) {
//         converted.push(JSON.stringify(object));
//     }
//     return converted;
// }

// whileIteration(cities);
// whileIteration(carsWithDriver);
// whileIteration(cars);

// forIteration(cities);
// forIteration(carsWithDriver);
// forIteration(cars);

// forOfIteration(cities);
// forOfIteration(carsWithDriver);
// forOfIteration(cars);

// convertToJSON(cars);
// convertToJSON(cities)
// let newArray = convertToJSON(carsWithDriver);
// console.log(newArray);


//                                                                 - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// let house = {
//     quantityOfRooms: 10,
//     light: true,
//     color: "white"
// };
// let book = {
//     author: "Ivan Bagryanii",
//     pages: 323,
//     title: "The hunter and the hunted"
// };
// let number = {
//     big: true,
//     exactlyHowMany: 100,
//     currency: "$"
// };
// let language = {
//     name: "ukrainian",
//     country: "Ukraine",
//     words: 100000
// };
// let programmingLanguage = {
//     interpreted: true,
//     hard: true,
//     transliteration: "J - A - V - A - S - C - R - I - P - T"
// }
// let allObjects = [house, book, number, language, programmingLanguage];
// let jsonObjects = [];
// for (const object of allObjects) {
//     jsonObjects.push(JSON.stringify(object));
// }
// for (const jsonObject of jsonObjects) {
//     let object = JSON.parse(jsonObject);
//     console.log(object);
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {
//         name: "Ruslan",
//         age: 20,
//         yearOfBirth: 2000,
//         skills: ["programming", "skiing", "stretching", "dancing", "swimming", "cycling"]
//     },
//     {
//         name: "Yana",
//         age: 20,
//         yearOfBirth: 2000,
//         skills: ["stretching", "dancing", "swimming", "cycling"]
//     },
//     {
//         name: "Katya",
//         age: 20,
//         yearOfBirth: 2000,
//         skills: ["dancing", "rollerblading", "fishing"]
//     },
//     {
//         name: "Ruslan",
//         age: 20,
//         yearOfBirth: 2000,
//         skills: ["programming", "skiing", "stretching", "dancing", "swimming", "cycling"]
//     },
//     {
//         name: "Ruslan",
//         age: 20,
//         yearOfBirth: 2000,
//         skills: ["programming", "skiing", "stretching", "dancing", "swimming", "cycling"]
//     }
// ]
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     for (const key in user) {
//         console.log(key, user[key]);
//         if (key === "skills") {
//             for (const skill of user[key]) {
//                 console.log(skill);
//             }
//         }
//     }
// }
// let userSkills = [];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     for (const key in user) {
//         console.log(key, user[key]);
//         if (key === "skills") {
//             userSkills.push(user[key]);
//         }
//     }
// }
// console.log(userSkills);

//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: ['java', 'js', 'html']
// }, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: ['java', 'js']
// }, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (const user of users) {
//     for (const skill of user["skills"]) {
//         console.log(skill);
//     }
// }
//
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// let addressArray = [];
// for (const user of users) {
//     addressArray.push(user.address);
// }
// console.log(addressArray);
//
// for (const user of users) {
//     let element = document.createElement('div');
//     element.style.backgroundColor = "orange";
//     element.style.color = "white";
//     element.innerText = `username - ${user.name}, age - ${user.age}, status - ${user.status}, address - ${user.address}`
//     document.body.appendChild(element);
// }
//
//
// for (const user of users) {
//     let element = document.createElement('div');
//     element.style.backgroundColor = "orange";
//     element.style.color = "white";
//     for (const key in user) {
//         let newKey = document.createElement('div');
//         newKey.innerText = `${key} - ${user[key]}`;
//         element.appendChild(newKey);
//     }
//     document.body.appendChild(element);
// }
//
//
// for (const user of users) {
//     let element = document.createElement('div');
//     element.style.backgroundColor = "orange";
//     element.style.color = "white";
//     for (const key in user) {
//         let newKey = document.createElement('div');
//         newKey.innerText = `${key} - ${user[key]}`;
//         if (key === "address") {
//             for (const keyValue of Object.keys(user[key])) {
//                 let addressKey = document.createElement('div');
//                 addressKey.innerText = `${keyValue} - ${user[key][keyValue]}`;
//                 addressKey.style.margin = "20px 20px 20px 20px";
//                 newKey.appendChild(addressKey);
//             }
//         }
//         element.appendChild(newKey);
//     }
//     document.body.appendChild(element);
// }

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let usersWithAddress = [];
// for (const user of usersWithId) {
//     let userCopy = JSON.parse(JSON.stringify(user));
//     for (const address of citiesWithId) {
//         if (userCopy.id === address.user_id) {
//             userCopy.address = address;
//         }
//     }
//     usersWithAddress.push(userCopy);
// }
// console.log(usersWithAddress);
//
//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let elementByClass = document.getElementsByClassName('test');
// let elementById  = document.getElementById('test');
// let elementByTag = document.getElementsByTagName('div');
// elementById.style.backgroundColor = "red";
// console.log(elementByClass[0].innerText);
// console.log(elementById.innerText);
// console.log(elementByTag[0].innerText);
// elementByClass[0].innerText = "Hello, I have changed the text";
// console.log(elementById.innerText);
// elementById.innerText = "Hello, I have changed the text for the second time";
// console.log(elementById.innerText);
// elementByTag[0].innerText = "Hello, I have changed the text for the third time";
//
//
// elementByClass[0].style.width = "200px";
// elementByClass[0].style.height = "200px";
// elementById.style.height = "400px";
// elementById.style.width = "400px";
// elementByTag[0].style.width = "100px";
// elementByTag[0].style.height = "100px";

// let newElement = document.createElement('div');
// newElement.style.display = "flex";
// let childElement1 = document.createElement('div');
// childElement1.style.width = "50px";
// childElement1.style.height = "50px";
// childElement1.style.border = "1px solid orange";
// let childElement2 = document.createElement('div');
// childElement2.style.width = "50px";
// childElement2.style.height = "50px";
// childElement2.style.border = "1px solid orange";
// let childElement3 = document.createElement('div');
// childElement3.style.width = "50px";
// childElement3.style.height = "50px";
// childElement3.style.border = "1px solid orange";
// newElement.appendChild(childElement1);
// newElement.appendChild(childElement2);
// newElement.appendChild(childElement3);
//
// elementById.appendChild(newElement);


// for (let i = 0; i < 10; i++) {
//     let newElement = document.createElement('div');
//     newElement.style.display = "flex";
//     let childElement1 = document.createElement('div');
//     childElement1.style.width = "50px";
//     childElement1.style.height = "50px";
//     childElement1.style.border = "1px solid orange";
//     let childElement2 = document.createElement('div');
//     childElement2.style.width = "50px";
//     childElement2.style.height = "50px";
//     childElement2.style.border = "1px solid orange";
//     let childElement3 = document.createElement('div');
//     childElement3.style.width = "50px";
//     childElement3.style.height = "50px";
//     childElement3.style.border = "1px solid orange";
//     newElement.appendChild(childElement1);
//     newElement.appendChild(childElement2);
//     newElement.appendChild(childElement3);
//
//     elementById.appendChild(newElement);
//
// }

// for (let i = 0; i < 10; i++) {
//     let newElement = document.createElement("div");
//     newElement.style.display = "flex";
//     for (let j = 0; j < 5; j++) {
//         let childElement = document.createElement("div");
//         childElement.style.width = "50px";
//         childElement.style.height = "50px";
//         childElement.style.border = "1px solid orange";
//         newElement.appendChild(childElement);
//     }
//     elementById.appendChild(newElement);
// }

// let m = +prompt("Please enter m(it should be a number)");
// let n = +prompt("Please enter n(it should be a number)");
//
// for (let i = 0; i < n; i++) {
//     let newElement = document.createElement("div");
//     newElement.style.display = "flex";
//     for (let j = 0; j < m; j++) {
//         let childElement = document.createElement("div");
//         childElement.style.width = "50px";
//         childElement.style.height = "50px";
//         childElement.style.border = "1px solid orange";
//         newElement.appendChild(childElement);
//     }
//     elementById.appendChild(newElement);
// }



//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// підключив скрипт до digitco/index.html
// - знайти всі елементі, які мають class
// let elements = document.querySelectorAll('[class]');
// console.log(elements)
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let elements = document.getElementsByTagName("p");
// for (let element of elements) {
//     element.innerText = "oktenweb";
// }
//     - знайти всі div та змінити ім колір на червоний
// let elements = document.getElementsByTagName("div");
// for (let element of elements) {
//     element.style.backgroundColor = "red";
// }