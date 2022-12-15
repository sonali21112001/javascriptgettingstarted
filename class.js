'use strict';
(function () {

    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        static adultAge = 18;

        get fullName() {
            return this.firstName + '' + this.lastName;
        }
        set fullName(fullName) {
            var nameParts = fullName.split('');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];

        }

        isAdult() {
            return this.age >= 18;
        }
    }

    display(Person.adultAge);

    display(Math.PI);

    display(Math.abs(-500));

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are:'" +
                this._enrolledCourses.join(',');

        }
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = student;
    Student.fromPerson = function(person) {
        return new Student(person.firstName, person.lastName, person.age);

    }


    let jim = new Person('jim', 'Cooper', 29);
    jim.enroll('cs205');
    jim.enroll('MA101');
    jim.enroll('PS101');

    display(jimStudent);

    display(jim.getCourses());

    let jimStudent = Student.fromPerson(jim);



})();