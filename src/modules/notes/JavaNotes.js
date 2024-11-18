import React, { Fragment } from 'react'

function JavaNotes() {
    const questAns = [
        {
            quest: "1. What is the difference between 'abstract class' and 'interface' in Java?",
            ans: `
    1. An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods (except for default and static methods introduced in Java 8).
    2. A class can implement multiple interfaces but can inherit from only one abstract class.
    3. Abstract classes can have constructors, while interfaces cannot.
            `,
        },
        {
            quest: "2. What is a Java constructor?",
            ans: `
    1. A constructor is a special method in a class used to initialize objects.
    2. It has the same name as the class and is called when an object of the class is created.
            `,
        },
        {
            quest: "3. What is the purpose of the 'final' keyword in Java?",
            ans: `
    1. The 'final' keyword is used to define constants, prevent method overriding, and prevent inheritance.
    2. Final variables cannot be reassigned.
    3. Final methods cannot be overridden.
    4. Final classes cannot be subclassed.
            `,
        },
        {
            quest: "4. What is the difference between '==' and '.equals()' in Java?",
            ans: `
    1. '==' compares the memory references (addresses) of two objects.
    2. '.equals()' compares the actual contents of the objects (values). It's typically overridden in custom classes for logical equality.
            `,
        },
        {
            quest: "5. What are the main features of Java?",
            ans: `
    1. Object-oriented programming (OOP)
    2. Platform independence (Write once, run anywhere)
    3. Multithreading
    4. Automatic garbage collection
    5. Rich API
    6. Robust security features
            `,
        },
        {
            quest: "6. What is method overloading in Java?",
            ans: `
    1. Method overloading occurs when multiple methods with the same name are defined within a class, but with different parameter types or number of parameters.
    2. The method to be invoked is determined at compile time.
            `,
        },
        {
            quest: "7. What is method overriding in Java?",
            ans: `
    1. Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass.
    2. The method signature must remain the same in both the parent and child class.
            `,
        },
        {
            quest: "8. What are the different types of inheritance in Java?",
            ans: `
    1. Single Inheritance: A class inherits from one superclass.
    2. Multilevel Inheritance: A class inherits from another class, which also inherits from another class.
    3. Hierarchical Inheritance: Multiple classes inherit from a single superclass.
    4. Hybrid Inheritance: A combination of multiple types of inheritance. (Not supported directly in Java)
            `,
        },
        {
            quest: "9. What is a Java package?",
            ans: `
    1. A package is a namespace that organizes classes and interfaces logically.
    2. It helps in avoiding class name conflicts, provides access protection, and makes code easier to manage.
            `,
        },
        {
            quest: "10. What is the significance of the 'super' keyword in Java?",
            ans: `
    1. The 'super' keyword refers to the superclass of the current object.
    2. It can be used to access superclass methods or constructors.
    3. It can also be used to refer to the superclass instance variables.
            `,
        },
    ];
    
    return (
        <Fragment>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Core Java Concepts Notes</h2>
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
    )
}

export default JavaNotes