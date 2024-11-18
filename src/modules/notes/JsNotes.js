import React, { Fragment } from 'react'

function JsNotes() {
    const questAns = [
        {
            quest: "1. What are the four main principles of OOP?",
            ans: `1. Encapsulation: Wrapping data and methods into a single unit.
    2. Abstraction: Hiding implementation details and showing only essential features.
    3. Inheritance: Allowing a class to inherit properties and methods of another class.
    4. Polymorphism: One interface, multiple implementations.`,
        },
        {
            quest: "2. What is the difference between '==' and '===' in JavaScript?",
            ans: `The '==' operator compares values only, performing type coercion if needed.
    The '===' operator compares both value and type, without performing type coercion.`,
        },
        {
            quest: "3. What is a closure in JavaScript?",
            ans: `A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope.`,
        },
        {
            quest: "4. Explain the concept of 'hoisting' in JavaScript.",
            ans: `Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution. 
            This allows variables to be used before they are declared.`,
        },
        {
            quest: "5. What is the purpose of the 'this' keyword in JavaScript?",
            ans: `The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called.`,
        },
        {
            quest: "6. What are promises in JavaScript?",
            ans: `Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.`,
        },
        {
            quest: "7. How does the 'async/await' syntax simplify working with promises?",
            ans: `The 'async/await' syntax allows writing asynchronous code in a more synchronous and readable manner. 
                'async' declares a function as asynchronous, and 'await' pauses its execution until the promise is resolved.`,
        },
        {
            quest: "8. What is the difference between 'null' and 'undefined' in JavaScript?",
            ans: `'null' is an assigned value representing no value or object, while 'undefined' means a variable has been declared but not assigned a value.`,
        },
        {
            quest: "9. What are arrow functions, and how do they differ from regular functions?",
            ans: `Arrow functions are a shorthand syntax for writing functions. They do not have their own 'this' binding and cannot be used as constructors.`,
        },
        {
            quest: "10. What is event delegation in JavaScript?",
            ans: `Event delegation is a technique where a parent element handles events for its child elements. This is achieved by using event bubbling and allows attaching a single event listener to manage multiple child elements.`,
        },
    ];
    
  return (
<Fragment>
            <div className="container mt-5">
                <h2 className="text-center mb-4">JavaScript Concepts Notes</h2>
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

export default JsNotes