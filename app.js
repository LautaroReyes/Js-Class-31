class CPersona {
    constructor(name, birthday, dni, gender, weight, height) {
      this.name = name;
      this.birthday = birthday;
      this.dni = dni;
      this.gender = gender;
      this.weight = weight;
      this.height = height;
    }
  
    calcularIMC() {
      let imc = this.weight / (this.height * this.height);
      return imc;
    }
  
    esMayorDeEdad() {
      const fechaActual = new Date();
      const age = fechaActual.getFullYear() - this.birthday.getFullYear();
  
      if (age >= 18) {
        return "Si";
      } else {
        return "No";
      }
    }
  
    comprobarGenero() {
      if(this.gender == "masculino" || this.gender == "Masculino" || this.gender == "M" || this.gender == "m"){
        return "Masculino";
      }
      if(this.gender == "femenino" || this.gender == "Femenino" || this.gender == "F" || this.gender == "f"){
        return "Femenino";
      }
      if(this.gender == "No binario" || this.gender == "no binario" || this.gender == "x" || this.gender == "X"){
        return "X";
      }
      else{
        return "h";
      }
    }
  
    mostrarDatos() {
      let imc = this.calcularIMC();
      let peso;
  
      if (imc < 20) {
        peso = "Debajo del peso ideal";
      } else if (imc >= 20 && imc <= 25) {
        peso = "Peso ideal";
      } else {
        peso = "Sobre peso";
      }
  
      return `<tr>
                  <td>${this.name}</td>
                  <td>${this.birthday.getFullYear()}</td>
                  <td>${this.dni}</td>
                  <td>${this.comprobarGenero()}</td>
                  <td>${this.weight}</td>
                  <td>${this.height}</td>
                  <td>${peso}</td>
                  <td>${this.esMayorDeEdad()}</td>
              </tr>`;
    }
  }
  
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);
    const dni = parseInt(document.getElementById('dni').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    const persona = new CPersona(name, birthday, dni, gender, weight, height);
  
    const tabla = document.getElementById('datosPersona');
    tabla.innerHTML += persona.mostrarDatos();
  
    formulario.reset();
  });
  
