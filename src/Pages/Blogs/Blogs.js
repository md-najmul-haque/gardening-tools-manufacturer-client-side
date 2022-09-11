import React from 'react';

const Blogs = () => {
    return (
        <div className='m-16'>
            <h1 className='text-3xl md:text-5xl text-primary font-bold text-center'>Welcome To The Educational Blog</h1>
            <div className='my-5'>
                <h2 className='text-primary text-2xl font-bold'>How will you improve the performance of a React Application?</h2>
                <h3 className='text-xl font-bold'>There are several ways to improve the performance of react app. we can follow below steps to improve the performance in a React application: </h3>
                <ol className='ml-5'>
                    <li>1. Keeping component state local where needed.</li>
                    <li>2. Use Lazy loading images to optimize React applications.</li>
                    <li>3. Can avoid extra tags by using React fragments</li>
                    <li>4. Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>5. Code-splitting in React using dynamic import()</li>
                    <li>6. Avoid using Index as Key for map</li>
                    <li>7. Avoid inline style attributes</li>
                    <li>8. Avoid inline function in the render method</li>
                </ol>
            </div>

            <div className='mb-5'>
                <h2 className='text-primary text-2xl font-bold'>What are the different ways to manage a state in a React application?</h2>
                <h3 className='text-xl font-bold'>There are mainly four kinds of ways to manage react state:</h3>
                <p><span className='font-bold'>Local (UI) state:</span> Local state is data we manage in one component or another component.
                    Local state is most often managed by useState hook.</p>
                <p><span className='font-bold'>Global (UI) state:</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p><span className='font-bold'>Server state:</span>Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                </p>
                <p><span className='font-bold'>URL state:</span>Data that exists on our URLs, including the pathname and query parameters.</p>

            </div>
            <div className='mb-5'>
                <h2 className='text-primary text-2xl font-bold'>How does prototypical inheritance work?</h2>
                <h3 className='text-xl font-bold'>Prototypal inheritance works:</h3>
                <p>Everything in JavaScript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.</p>
                <p>Javascript's version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. </p>
                <p>So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-primary text-2xl font-bold'>Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h2>
                <h3 className='text-xl font-bold'>We should never update the state directly because of the following reasons:</h3>
                <p>If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p>You will lose control of the state across all components.</p>

            </div>
            <div className='mb-5'>
                <h2 className='text-primary text-2xl font-bold'> What is a unit test? Why should write unit tests?</h2>
                <p><span className='font-bold'>Definition of unit test:</span> Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended  </p>
                <p>There are many benefits of unit testing. These are written below:</p>
                <p><span className='font-bold'>The process make faster and easier:</span>This is the main benefit of unit testing is process becomes agile. If we use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier.</p>
                <p><span className='font-bold'>Significantly improves code quality:</span>Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing.</p>
                <p><span className='font-bold'>Find Bugs Easily:</span>Unit testing helps identify all kinds of issues with the software at a very early stage.</p>
                <p><span className='font-bold'>Debugging process can be simplified:</span> The debugging process can be simplified to a great extent by unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.</p>
                <p><span className='font-bold'>Significantly reduce Costs:</span>Any problems or bugs in the system are identified in the early stages through unit testing, and because of that the cost of bug fixes is significantly reduced. If these bugs are discovered later, then it will be much more expensive to fix them.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-primary text-2xl font-bold'>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>First, we will create an API at the server-side and here we will use a query parameter to take the product name. Then in client side, we fetch the API by using the get method to show the search result. Here we send search key word as a query parameter to the server-side to get the result to show in the website. </p>
            </div>
        </div>
    );
};

export default Blogs;