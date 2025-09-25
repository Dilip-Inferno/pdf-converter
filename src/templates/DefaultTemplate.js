const defaultTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Q&A</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 40px;
      color: #333;
    }

    .container {
      max-width: 800px;
      margin: auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
      color: #222;
    }

    .card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-3px);
    }

    .question {
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 10px;
      color: #0d6efd;
    }

    .answer {
      line-height: 1.6;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>React Interview Q&A</h1>

    <div class="card">
      <div class="question">1. What is React?</div>
      <div class="answer">React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM using a virtual DOM.</div>
    </div>

    <div class="card">
      <div class="question">2. What are components in React?</div>
      <div class="answer">Components are the building blocks of a React application. They can be functional or class-based and are used to encapsulate UI and behavior.</div>
    </div>

    <div class="card">
      <div class="question">3. What is JSX?</div>
      <div class="answer">JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, which is then compiled to React function calls.</div>
    </div>

    <div class="card">
      <div class="question">4. What is the Virtual DOM?</div>
      <div class="answer">The Virtual DOM is a lightweight copy of the actual DOM. React uses it to compare changes and update only the necessary parts of the real DOM, improving performance.</div>
    </div>

    <div class="card">
      <div class="question">5. What are props in React?</div>
      <div class="answer">Props (short for properties) are read-only inputs passed from a parent component to a child component. They make components reusable with different data.</div>
    </div>

    <div class="card">
      <div class="question">6. What is state in React?</div>
      <div class="answer">State is an object managed within a component that stores dynamic data. Unlike props, state can be changed, and changes trigger re-renders.</div>
    </div>

    <div class="card">
      <div class="question">7. What are React Hooks?</div>
      <div class="answer">Hooks are functions introduced in React 16.8 that allow functional components to use state and lifecycle features (e.g., <code>useState</code>, <code>useEffect</code>).</div>
    </div>

  </div>
</body>
</html>
`;

export { defaultTemplate };
