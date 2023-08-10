let passwordBox = document.getElementById("password");

      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+-/?";
      const passLength = 8;
      const allChars = upperCase + lowerCase + numbers + symbols;

      function generatePass() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (passLength > password.length) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        console.log(password);

        passwordBox.value = password;
        console.log(passwordBox);
      }

      function copyPass() {
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
        alert("Password copied" + passwordBox.value);
      }
      console.log(copyPass);