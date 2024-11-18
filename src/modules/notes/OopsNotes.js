import React, { Fragment } from 'react';

const questAns = [
    {
        quest: "1. What are the four main principles of OOP?",
        ans: `1. Encapsulation: Wrapping data and methods into a single unit.
2. Abstraction: Hiding implementation details and showing only essential features.
3. Inheritance: Allowing a class to inherit properties and methods of another class.
4. Polymorphism: One interface, multiple implementations.`,
    },
    {
        quest: "2. What is a class and an object?",
        ans: `- Class: A blueprint for creating objects. It defines properties and methods.
- Object: An instance of a class with specific values assigned to its properties.`,
    },
    {
        quest: "3. What is the difference between method overloading and method overriding?",
        ans: `- Method Overloading: Same method name but different parameters in the same class.
- Method Overriding: A child class provides its implementation of a parent class method.`,
    },
    {
        quest: "4. What is a constructor?",
        ans: `A constructor is a special method used to initialize an object when it is created.
Example: In Python, the constructor method is __init__().`,
    },
    {
        quest: "5. What is the difference between abstraction and encapsulation?",
        ans: `- Abstraction: Focuses on hiding the implementation details and showing the functionality.
- Encapsulation: Binds data and methods together and restricts direct access to components.`,
    },
    {
        quest: "6. What are access specifiers in OOP?",
        ans: `Access specifiers define the visibility of class members:
- Public: Accessible from anywhere.
- Protected: Accessible within the class and its subclasses.
- Private: Accessible only within the class.`,
    },
    {
        quest: "7. What is polymorphism in OOP?",
        ans: `Polymorphism allows the same method or operator to behave differently in different contexts.
Examples:
- Method Overloading: Same method name but different parameters.
- Method Overriding: A child class redefines a parent class method.`,
    },
    {
        quest: "8. What is the difference between an abstract class and an interface?",
        ans: `- Abstract Class:
  - Can have both abstract and concrete methods.
  - Allows inheritance.
- Interface (e.g., in Java):
  - Only defines abstract methods.
  - Classes implementing it must define all methods.`,
    },
    {
        quest: "9. What is the purpose of super() in inheritance?",
        ans: `The super() function is used to call methods of the parent class.
Commonly used to:
- Call the parent class constructor.
- Access methods overridden in the child class.`,
    },
    {
        quest: "10. What is multiple inheritance?",
        ans: `Multiple inheritance is a feature where a class can inherit from more than one parent class.
Example:
class A and class B can both be inherited by class C.
Note: It may lead to the diamond problem, resolved by the Method Resolution Order (MRO) in Python.`,
    },
];

function OopsNotes() {
    return (
        <Fragment>
            <div className="container mt-5">
                <h2 className="text-center mb-4">OOP Concepts Notes</h2>
                <div className="accordion" id="oopsAccordion">
                    {questAns.map((data, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                >
                                    {data.quest}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#oopsAccordion"
                            >
                                <div className="accordion-body text-start">
                                    {data.ans}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default OopsNotes;
