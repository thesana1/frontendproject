// Frontend Quiz App - Quiz Data
// 4 categories: HTML, CSS, JavaScript, Accessibility
// Each category has 10 questions with 4 options and 1 correct answer

const quizData = [
  {
    title: "HTML",
    icon: "🟠",
    iconBg: "#FFF1E9",
    color: "#FF7E35",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "Which of the following is the correct structure for an HTML document?",
        options: [
          "<html><head></head><body></body></html>",
          "<head><html></html><body></body></head>",
          "<body><head></head><html></html></body>",
          "<html><body></body><head></head></html>",
        ],
        answer: "<html><head></head><body></body></html>",
      },
      {
        question: "Which HTML element is used to define the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: "<title>",
      },
      {
        question:
          "What is the purpose of the 'alt' attribute in the <img> tag?",
        options: [
          "To provide a tooltip when hovering over the image",
          "To specify the image source URL",
          "To describe the image for screen readers and when the image fails to load",
          "To set the image dimensions",
        ],
        answer:
          "To describe the image for screen readers and when the image fails to load",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        answer: "<br>",
      },
      {
        question:
          "Which HTML attribute is used to define inline styles?",
        options: ["class", "font", "styles", "style"],
        answer: "style",
      },
      {
        question:
          "What does the <thead> element represent in an HTML table?",
        options: [
          "The table body",
          "The table header section",
          "The table footer",
          "The table data",
        ],
        answer: "The table header section",
      },
      {
        question:
          "Which input type is used to create a checkbox in HTML?",
        options: ["<input type='button'>", "<input type='check'>", "<input type='checkbox'>", "<input type='tick'>"],
        answer: "<input type='checkbox'>",
      },
      {
        question: "What is the purpose of the <meta charset='UTF-8'> tag?",
        options: [
          "To set the font family of the document",
          "To specify the character encoding for the HTML document",
          "To set the page layout direction",
          "To link an external stylesheet",
        ],
        answer: "To specify the character encoding for the HTML document",
      },
    ],
  },
  {
    title: "CSS",
    icon: "🟢",
    iconBg: "#E0FDEF",
    color: "#2FD887",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "Which CSS property controls the text size?",
        options: ["text-style", "font-size", "text-size", "font-style"],
        answer: "font-size",
      },
      {
        question: "How do you select an element with the id 'demo' in CSS?",
        options: [".demo", "#demo", "*demo", "demo"],
        answer: "#demo",
      },
      {
        question:
          "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
      },
      {
        question:
          "What is the default value of the 'position' property in CSS?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static",
      },
      {
        question: "Which CSS unit is relative to the root element's font size?",
        options: ["em", "px", "rem", "vh"],
        answer: "rem",
      },
      {
        question:
          "What does the CSS 'box-sizing: border-box' property do?",
        options: [
          "Adds a border to the element",
          "Includes padding and border in the element's total width and height",
          "Removes all margins from the element",
          "Sets the box shadow of the element",
        ],
        answer:
          "Includes padding and border in the element's total width and height",
      },
      {
        question:
          "Which CSS property creates space between the element's border and its content?",
        options: ["margin", "spacing", "padding", "border-spacing"],
        answer: "padding",
      },
      {
        question: "How do you apply a style to all <p> elements in CSS?",
        options: ["p { }", ".p { }", "#p { }", "*p { }"],
        answer: "p { }",
      },
      {
        question:
          "What is the correct CSS syntax to make all <p> elements bold?",
        options: [
          "p { text-size: bold; }",
          "p { font-weight: bold; }",
          "p { font-style: bold; }",
          "p { text-weight: bold; }",
        ],
        answer: "p { font-weight: bold; }",
      },
    ],
  },
  {
    title: "JavaScript",
    icon: "🟡",
    iconBg: "#EBF0FF",
    color: "#306AFF",
    questions: [
      {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["v", "variable", "let", "both let and var"],
        answer: "both let and var",
      },
      {
        question: "What will the following code return: typeof null?",
        options: ["null", "undefined", "object", "number"],
        answer: "object",
      },
      {
        question:
          "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
      },
      {
        question:
          "What does the '===' operator check in JavaScript?",
        options: [
          "Only value equality",
          "Only type equality",
          "Both value and type equality",
          "Neither value nor type",
        ],
        answer: "Both value and type equality",
      },
      {
        question: "Which event is triggered when a user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onkeydown"],
        answer: "onclick",
      },
      {
        question: "How do you write a comment in JavaScript?",
        options: ["<!-- comment -->", "# comment", "// comment", "** comment **"],
        answer: "// comment",
      },
      {
        question:
          "What is the output of: console.log(2 + '2') in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22",
      },
      {
        question:
          "Which built-in method returns the calling string value converted to upper case?",
        options: ["toUpperCase()", "toUpper()", "upperCase()", "upper()"],
        answer: "toUpperCase()",
      },
      {
        question:
          "What does the 'async' keyword do when used before a function?",
        options: [
          "Makes the function run faster",
          "Makes the function always return a Promise",
          "Prevents the function from returning a value",
          "Runs the function in a separate thread",
        ],
        answer: "Makes the function always return a Promise",
      },
      {
        question:
          "Which method is used to parse a JSON string and return a JavaScript object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.convert()",
          "JSON.toObject()",
        ],
        answer: "JSON.parse()",
      },
    ],
  },
  {
    title: "Accessibility",
    icon: "🟣",
    iconBg: "#F6E7FF",
    color: "#A729F5",
    questions: [
      {
        question:
          "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Compatibility and Guidance",
          "Website Creation and Graphic Design",
          "Web Content and Graphic Guidelines",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
      {
        question:
          "Which HTML attribute provides a text alternative for an image for screen reader users?",
        options: ["title", "src", "alt", "aria-label"],
        answer: "alt",
      },
      {
        question:
          "What is the purpose of the 'role' attribute in HTML?",
        options: [
          "To style elements differently",
          "To define the semantic meaning of an element for assistive technologies",
          "To add interactivity to elements",
          "To group elements together",
        ],
        answer:
          "To define the semantic meaning of an element for assistive technologies",
      },
      {
        question:
          "Which ARIA attribute is used to describe the current value of a progress bar?",
        options: ["aria-checked", "aria-valuenow", "aria-selected", "aria-label"],
        answer: "aria-valuenow",
      },
      {
        question:
          "What is a 'skip navigation' link used for in accessibility?",
        options: [
          "To create a site map",
          "To allow users to skip repetitive navigation and jump to main content",
          "To remove navigation from mobile views",
          "To hide navigation from search engines",
        ],
        answer:
          "To allow users to skip repetitive navigation and jump to main content",
      },
      {
        question:
          "What minimum contrast ratio does WCAG 2.1 Level AA require for normal text?",
        options: ["2:1", "3:1", "4.5:1", "7:1"],
        answer: "4.5:1",
      },
      {
        question:
          "Which element should be used for the main landmark region of a page?",
        options: ["<div>", "<section>", "<main>", "<article>"],
        answer: "<main>",
      },
      {
        question:
          "What does the 'tabindex' attribute do?",
        options: [
          "Sets the font size of an element",
          "Controls the order in which elements receive focus when navigating with a keyboard",
          "Creates a new tab in the browser",
          "Groups related form elements",
        ],
        answer:
          "Controls the order in which elements receive focus when navigating with a keyboard",
      },
      {
        question:
          "Which of the following is NOT a principle of WCAG?",
        options: ["Perceivable", "Operable", "Understandable", "Scalable"],
        answer: "Scalable",
      },
      {
        question:
          "What does 'aria-live' do?",
        options: [
          "Animates an element when it updates",
          "Notifies screen readers when the content of an element changes dynamically",
          "Makes an element visible on the screen",
          "Adds a live streaming feature",
        ],
        answer:
          "Notifies screen readers when the content of an element changes dynamically",
      },
    ],
  },
];

export default quizData;
