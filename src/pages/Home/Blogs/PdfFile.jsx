import { Document, Page, Text } from '@react-pdf/renderer';
import React from 'react';

const PdfFile = () => {
  return (
    <Document>
      <Page>
        <Text className='text-center text-2xl mb-3'>In blog page you will find 4 questions and their answers!</Text>
        <Text className='font-semibold'>1. Differences between uncontrolled and controlled components?</Text>
        <Text>Answer: Which component manages its own state internally that is known as uncontrolled component. On the other hand, controlled component is controlled by the parent component. In uncontrolled component while user interacts then its internal state updated directly. But controlled component controlled by calling function and using props.</Text>
        <br />
        <Text className='font-semibold'>2. How to validate React props using PropTypes?</Text>
        <Text>Answer: PropTypes is a package. Which usually validate react component's props. Developer can use it by installing via npm or yearn. If a component pass an invalid type of props then PropTypes will throw and error and also console an alert.</Text>
        <br />
        <Text className='font-semibold'>3. Differences between nodejs and express js.</Text>
        <Text>Answer: Both tools used for web development though both of them have different purpose to complete. Node.js is actually is a runtime environment tools that run JavaScript code outside a browser. It makes platform for making web servers and also network applications. On top of that, Express.js is a web application framework. Main task of it is work as middleware for handling HTTP requests and responses. Also, it control routing and template rendering.</Text>
        <br />
        <Text className='font-semibold'>4. What is a custom hook, and why will you create a custom hook?</Text>
        <Text>Answer: Mainly, custom hook is a JS function that uses React Hooks. It returns logic which can be shared through multiple components. For multiple purpose we can use custom hook. For example, 1. Not to repeat same code, 2. Can be used on encapsulating stateful logic.</Text>
        <br />
      </Page >
    </Document>
  );
};

export default PdfFile;