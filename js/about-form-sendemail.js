var form = document.getElementById("form-aa");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-aa--status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Vixe! Tivemos um problema."
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Vixe! Tivemos um problema."
      });
    }
    form.addEventListener("submit", handleSubmit)

    
    