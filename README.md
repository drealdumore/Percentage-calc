
# Percentage Calculator App

The **Percentage Calculator App** is a simple tool that divides a total amount equally among individuals. It allows users to dynamically add or remove individuals and ensures the total is evenly distributed among them. 

---

## Features

- **Dynamic Division:** Enter a total, and the app calculates the equal share for the number of individuals.
- **Add or Remove Individuals:** Adjust the number of individuals easily, and the app automatically recalculates.
- **Real-Time Updates:** Changes to the total or individuals are reflected instantly.
- **User-Friendly Interface:** Minimalist and intuitive design for a seamless user experience.

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/drealdumore/Percentage-calc.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Percentage-calc
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to use the app.

---

## Usage

1. **Enter the Total Amount:** Input the total value to be divided.
2. **Set the Number of Individuals:**
   - Use the "Add Individual" button to add participants.
   - Use the "Remove Individual" button to remove participants.
3. **View Results:** The app automatically calculates and displays the equal share for each individual.
4. **Dynamic Adjustment:** Adjust the total or individuals at any time to see updated results.

---

## Example

- Total Amount: **$100**
- Number of Individuals: **2**
  - Result: Each individual receives **$50**.

Add one more individual:
- Number of Individuals: **3**
  - Result: Each individual receives **$33.33**.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **State Management:** UseState
- **Number Flow:** number-flow/react

---

## Future Enhancements

- Allow percentage splits for unequal distribution.
- Add the ability to save results for later reference.
- Include support for different currencies or units.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed NOT under the MIT License

---

## Acknowledgments

- Inspiration from everyday use cases of splitting bills and expenses.
- Thanks to the open-source community for libraries and resources.

---

Feel free to reach out with suggestions or feedback. Enjoy using the Percentage Calculator App!
