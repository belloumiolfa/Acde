import React from 'react';

const ContactForm = () => {
   return (
      <div className='col-lg-8 mt-5 mt-lg-0'>
         <form className='php-email-form'>
            <div className='form-row'>
               <div className='col-md-6 form-group'>
                  <input
                     type='text'
                     name='name'
                     className='form-control'
                     id='name'
                     placeholder='Votre nom'
                     data-rule='minlen:4'
                     data-msg='Please enter at least 4 chars'
                  />
                  <div className='validate'></div>
               </div>
               <div className='col-md-6 form-group'>
                  <input
                     type='email'
                     className='form-control'
                     name='email'
                     id='email'
                     placeholder='Votre Email'
                     data-rule='email'
                     data-msg='Please enter a valid email'
                  />
                  <div className='validate'></div>
               </div>
            </div>
            <div className='form-group'>
               <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  placeholder='Sujet'
                  data-rule='minlen:4'
                  data-msg='Please enter at least 8 chars of subject'
               />
               <div className='validate'></div>
            </div>
            <div className='form-group'>
               <textarea
                  className='form-control'
                  name='message'
                  rows='5'
                  data-rule='required'
                  data-msg='Please write something for us'
                  placeholder='Message'
               ></textarea>
               <div className='validate'></div>
            </div>
            <div className='mb-3'>
               <div className='loading'>Chargement</div>
               <div className='error-message'></div>
               <div className='sent-message'>
                  Votre message a été envoyé. Merci!
               </div>
            </div>
            <div className='text-center'>
               <button type='submit'>Envoyer Message</button>
            </div>
         </form>
      </div>
   );
};

export default ContactForm;
