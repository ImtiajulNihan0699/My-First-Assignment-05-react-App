# DevStack

DevStack is a simple and interactive web application where users can explore different web development technologies and build their own technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- React Icons
- Vite
- JSON

## Features

### 1. Explore Technologies
Users can browse different development technologies with information such as category, difficulty level, rating, description, and badge.

### 2. Building Your Stack
Users can add technologies to their personal stack and easily see which technologies they have selected.

### 3. Remove Your Stack
Users can remove individual technologies or remove all selected technologies. Toast notifications are shown when technologies are added or removed.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI code easier to write and understand.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component and can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used `useState` to store the selected technologies and update the user's stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data.

It can be used to load the technology data from the JSON file when the component loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty message when no technology is selected:

{stack.length === 0 ? (
  <p>No technology selected yet.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

A child can send data back by calling a function that the parent passes to it through props.

For example, I passed stack and setSelectedStack from the parent to the TechnologyCard component.
