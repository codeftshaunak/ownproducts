import React from "react";

function Blog() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-10">
      <h1 className="text-3xl font-bold text-center mb-5">
        Some Questions Answer
      </h1>
      <div className="space-y-4">
        {/* question 1 */}
        <details className="group" open>
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              How will you improve the performance of a React Application?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            I can improve the performance of a react application by follow those
            things. I will keep my component state local where necessary.
            Memoizing react components to prevent unnecessary re renders. By
            using dynamic import() code splitting. List or windowing
            virtualization in react.Lazy loading images in react.
          </p>
        </details>

        {/* question 2 */}
        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              What are the different ways to manage a state in a React
              application?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            The four kinds of react state to manage. Local state , global state
            , server state, and last one URL state.Local state is easy to
            manage. Try to use those hooks to manage local state they are
            useState, useCallback, useReducer. To manage global state in react
            those hooks are very usefull they are useReducer, useContext. To
            manage server state you should use useState with useEffect. And last
            one to manage url state you can useHistory or useLocation.
          </p>
        </details>

        {/* question 3 */}

        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              What is a unit test? Why should write unit tests?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            Purpose of unit testing is to isolate written code to test and
            determine if it works as intended. Unit testing is an important step
            in the development process, because if done correctly it can help
            detect early flaws in code which may be more difficult to find in
            later testing stage.
          </p>
        </details>

        {/* question 4 */}
        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            If we directly update the state it doesn't change the state
            immediately. In this case it creates a pending state transition and
            accessing it after calling this method will only return the present
            value we will lose control of the state across all components.
          </p>
        </details>

        {/* Question 6 */}
        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              What is a unit test? Why should write unit tests?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            Purpose of unit testing is to isolate written code to test and
            determine if it works as intended. Unit testing is an important step
            in the development process, because if done correctly it can help
            detect early flaws in code which may be more difficult to find in
            later testing stage.
          </p>
        </details>
        {/* Question 5 */}
        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              How does prototypical inheritance work?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            This prototypical inheritance is a feature in javascript used to add
            methods and properties in objects. Its is a method by which an
            object can inherit the properties and methods of another object in
            order to get and set the prototype of an object we use object
          </p>
        </details>
      </div>
    </div>
  );
}

export default Blog;
