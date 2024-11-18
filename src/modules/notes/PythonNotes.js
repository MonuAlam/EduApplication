import React, { Fragment } from 'react'

function PythonNotes() {
    const questAns = [
        {
            quest: "1. What are the key differences between lists and tuples in Python?",
            ans: `1. Lists are mutable, meaning their elements can be changed after creation.
    2. Tuples are immutable, meaning their elements cannot be modified after creation.
    3. Lists are defined with square brackets [] while tuples are defined with parentheses ().`,
        },
        {
            quest: "2. What is a lambda function in Python?",
            ans: `A lambda function is a small anonymous function defined using the 'lambda' keyword. It can have any number of arguments but only one expression. Example: lambda x, y: x + y`,
        },
        {
            quest: "3. What are Python decorators?",
            ans: `Decorators are functions that modify the behavior of other functions or methods. They allow the addition of functionality to an existing function without modifying its structure.`,
        },
        {
            quest: "4. What is the purpose of the 'self' keyword in Python?",
            ans: `'self' refers to the instance of the class. It is used to access variables and methods within the class in instance methods.`,
        },
        {
            quest: "5. What is the difference between 'deepcopy' and 'shallow copy' in Python?",
            ans: `A shallow copy creates a new object, but references the nested objects inside the original. A deep copy creates a new object and recursively copies all objects inside, making it independent of the original.`,
        },
        {
            quest: "6. What is the purpose of the 'with' statement in Python?",
            ans: `The 'with' statement simplifies exception handling and resource management by ensuring that resources like files are properly cleaned up after use. It automatically handles closing files and releasing resources.`,
        },
        {
            quest: "7. What is a Python generator?",
            ans: `A generator is a function that returns an iterable set of items, one at a time, using the 'yield' keyword. Generators allow for lazy evaluation, meaning they generate values on demand and are more memory efficient.`,
        },
        {
            quest: "8. What is the difference between 'is' and '==' in Python?",
            ans: `'==' checks for value equality, meaning it checks if the values of two objects are the same. 'is' checks for identity, meaning it checks if two objects refer to the same memory location.`,
        },
        {
            quest: "9. What are Python's built-in data types?",
            ans: `Python has several built-in data types, including:
    1. Numeric types: int, float, complex
    2. Sequence types: list, tuple, range
    3. Mapping type: dict
    4. Set types: set, frozenset
    5. Boolean type: bool
    6. Text type: str
    7. Binary types: bytes, bytearray, memoryview`,
        },
        {
            quest: "10. What is list comprehension in Python?",
            ans: `List comprehension is a concise way to create lists in Python. It allows for filtering and applying expressions to generate a new list from an existing iterable. Example: [x**2 for x in range(5)]`,
        },
    ];
    

  return (
    <Fragment>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Python Concepts Notes</h2>
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

export default PythonNotes