import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-center text-4xl my-8 mx-2'>
        Got questions, feedback, or suggestions? We'd love to hear from you! 
        Feel free to reach out to our dedicated customer support team, and we'll be more than happy to assist you.
      </p>
      <p className='text-center text-xl'>
        Contact our support team at:
        <br />
        Phone: <a href='tel:+918581830077' className='text-blue-500'>+91 8581830077</a> or <a href='tel:+917492990746' className='text-blue-500'>+91 7492990746</a>
      </p>
    </div>
  );
}

export default Contact;
