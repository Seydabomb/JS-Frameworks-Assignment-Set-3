# JS-Frameworks-Assignment-Set-3

Sections 15-19

## Section 15

"Placepicker" app with a simple backend component that we call in order to get our information on places.

- Handling Errors
- Calculating Distance between 2 Places in the world
- Communicating with the Backend
  - You need to run both the frontend and the backend
    - Frontend: npm run dev
    - Backend: node app.js

## Section 16

"Placepicker" app with a simple backend component that we call in order to get our information on places.

- React Hooks
- Creating Custom Hooks
- Using a promise in AvailablePlaces.jsx

## Section 17

"React Forms" app where you handle user inputs into a form.

- User inputs email and password to <ins>Login</ins>.

  - UseRef() in "Login"
    - Doesn't validate on every keystroke
    - Validates only on form submission (clicking the login button)
  - UseState() in "StateLogin"
    - Does validate on every keystroke

- User inputs Email, Password, Confirms the Password, First Name, Last Name, Their Role, How they found Us, & Agrees to Terms & Conditions to <ins>Sign up</ins>.
  - Password & Confirm Password validation in "Signup"
- User can click the "Reset" button which clears all the form inputs.
  - Didn't actually do that functionality

## Section 18

"ReactFood" app where a user can add products to cart, adjust the quantities, then go to a form to start the transaction process.

- The cart utilizes "createContext" from react & <CartContext.Provider>
- Utilizes "createPortal" from react-dom in Modal.jsx
- It handles form validation and clears the cart upon submission.

## Section 19

Intro to Redux, the alternative to react context.

- Part 1 is just building a simple js file using Redux that only outputs in the terminal
- Part 2 is "Redux Auth" app for Redux + React
  - Doing Redux with a Component Function & doing Redux with a Class Component in "Counter.js"
  - Using Redux toolkit also in "Counter.js" and store/index.js
