# Aadhaar Number Validation

This project is a simple web-based application to validate an Aadhaar number, the 12-digit unique identification number issued by the Unique Identification Authority of India. The application uses HTML, CSS, and JavaScript for front-end validation.

## Features

- **Input Field**: Users can enter their 12-digit Aadhaar number.
- **Validation**: The form validates the input to ensure it is exactly 12 digits and validated using Verhoeff algorithm.
- It should have 12 digits.
- It should not start with 0 and 1.
- It should not contain any alphabet and special characters.
- **Clear Functionality**: Users can clear the input field with a button click.
- **Result Display**: The result of the validation is shown to the user.
  
## Verhoeff algorithm:
- The Verhoeff Algorithm is a checksum algorithm that is used to validate the integrity of Aadhaar numbers.
- This algorithm calculates a checksum digit based on the input number and compares it to a predetermined value. If the calculated value matches the expected value, the number is considered valid.

## File Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file for styling the web page.
- `functions.js`: The JavaScript file containing functions for validation and other interactions.

## License
This project is licensed under the MIT License.
