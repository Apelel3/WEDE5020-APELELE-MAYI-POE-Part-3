// validation.js - Apelele Hair Collection
document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;

      // First Name validation
      const fname = document.getElementById('fname');
      const fnameError = document.getElementById('fnameError');
      if (fname && fname.value.trim() === '') {
        showError(fname, fnameError);
        isValid = false;
      } else if (fname) {
        clearError(fname, fnameError);
      }

      // Last Name validation[cite: 2]
      const lname = document.getElementById('lname');
      const lnameError = document.getElementById('lnameError');
      if (lname && lname.value.trim() === '') {
        showError(lname, lnameError);
        isValid = false;
      } else if (lname) {
        clearError(lname, lnameError);
      }

      // Email validation[cite: 2]
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email.value.trim())) {
        showError(email, emailError);
        isValid = false;
      } else if (email) {
        clearError(email, emailError);
      }

      // Phone validation[cite: 2]
      const phone = document.getElementById('phone');
      const phoneError = document.getElementById('phoneError');
      if (phone && phone.value.trim() !== '') {
        const phoneRegex = /^[\d\s\+\-\(\)]{7,15}$/;
        if (!phoneRegex.test(phone.value.trim())) {
          showError(phone, phoneError);
          isValid = false;
        } else {
          clearError(phone, phoneError);
        }
      } else if (phone && phoneError) {
        clearError(phone, phoneError);
      }

      // Message validation[cite: 2]
      const message = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (message && message.value.trim() === '') {
        showError(message, messageError);
        isValid = false;
      } else if (message) {
        clearError(message, messageError);
      }

      if (!isValid) {
        e.preventDefault();
      } else {
        e.preventDefault();
        alert('Thank you for contacting Apelele Hair Collection! Your message has been sent successfully.');
        contactForm.reset();
      }
    });
  }

  // Enquiry Form Validation
  const enquiryForm = document.querySelector('.enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      let isValid = true;
      const fullname = document.getElementById('fullname');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const services = document.getElementById('services');
      const details = document.getElementById('details');

      if (!fullname || fullname.value.trim() === '') isValid = false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value.trim())) isValid = false;
      if (!phone || phone.value.trim() === '') isValid = false;
      if (!services || services.value === '') isValid = false;
      if (!details || details.value.trim() === '') isValid = false;

      if (!isValid) {
        e.preventDefault();
        alert('Please fill out all required fields correctly in the enquiry form[cite: 3].');
      } else {
        e.preventDefault();
        alert('Thank you! Your enquiry has been submitted successfully. We will get back to you shortly.');
        enquiryForm.reset();
      }
    });
  }

  function showError(input, errorElement) {
    input.classList.add('error');
    if (errorElement) {
      errorElement.style.display = 'block';
    }
  }

  function clearError(input, errorElement) {
    input.classList.remove('error');
    if (errorElement) {
      errorElement.style.display = 'none';
    }
    }
});