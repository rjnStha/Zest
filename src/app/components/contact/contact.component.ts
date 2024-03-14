import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [  ],
  template: `
    <div class="contact-container">
      <!-- contact form -->
      <form class="contact-form">
        <div>
          <input type="text" name="firstname" placeholder="First Name" class="contact-inputs input-name" required>
          <input type="text" name="lastname" placeholder="Last Name" class="contact-inputs input-name" required>
        </div>
        <input type="input" name="email" placeholder="Email" class="contact-inputs" required>
        <input type="input" name="phone" placeholder="Number" class="contact-inputs" required>
        <textarea name="message" placeholder="What would you like to tell us?" class="contact-inputs" required></textarea>
        <button type="submit">Send Message</button>
      </form>
</div>
  `,
  styles: `
    .contact-container
    {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;

    }
    .contact-form{
      height: 30em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
    }

    .contact-inputs {
      width: 400px;
      height: 35px;
      border: none;
      outline: none;
      padding-left: 25px;
      font-weight: 500;
      border-radius: 10px;
    }
    .contact-inputs:focus{
      outline: 2px solid rgb(41, 40, 66);
    }
    
    .contact-inputs::placeholder{
      color:#a9a9a9;
    }

    .input-name {
      width: 180px;
      margin-right: 10px;
      justify-content: space-between;

    }

    .contact-form textarea{
      height: 140px;
      padding-top: 15px;
      border-radius: 15px;
      resize: none; 
    }

    .contact-form button{
      text-align: center !important;
      width: 170px;
      display: flex;
      align-items: center;
      padding: 15px 30px;
      font-size: 16px;
      color: black !important;
      color: #fff;
      gap: 10px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }

    .contact-form button:hover {
      background: linear-gradient(270deg, #fa6d86, rgb(41, 40, 66));
      color: white !important;
      transition: transform 0.3s ease;
      transform: translateY(-2px);
    }
  `
})
export class ContactComponent {
  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  }
}
