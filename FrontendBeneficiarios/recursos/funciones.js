// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              RegistrarBeneficiario();
              event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarBeneficiario(){
    let identificacion = document.querySelector("#validacionIdentificacion").value;
    let documentoIgual = document.querySelector("#validacionIgualMinTic").value;
    let fechaNac = document.querySelector("#validacionFechaNac").value;
    let mayor15 = document.querySelector("#validacionMayor15").value;
    let colombiano = document.querySelector("#validacionColombiano").value;
    let bachiller = document.querySelector("#validacionBachiller").value;
    let cumpleReq = document.querySelector("#validacionCumple").value;
    let revisor = document.querySelector("#validacionRevisor").value;
    let observaciones = document.querySelector("#validacionObservaciones").value;

    let url = `http://localhost:3000/beneficiarios`;
    let datos = {
        identificacion: identificacion,
        documentoIgual: documentoIgual,
        fechaNac: fechaNac,
        mayor15: mayor15,
        colombiano: colombiano,
        bachiller: bachiller,
        cumpleReq: cumpleReq,
        revisor: revisor,
        observaciones: observaciones
    };

    

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
  }