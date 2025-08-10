  export async function AltaSocio(event) {
    const form = document.getElementById('registroForm');
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      //alert("Registrado! Inicia sesion pra ingresar");

      const formData = new FormData(form);
      const datos = Object.fromEntries(formData.entries());

      try{
        const res = await fetch("http://localhost:3000/api/socio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (res.ok) {
        alert("✅ Registrado! Inicia sesión para ingresar");
        form.reset(); 
      } else {
        const error = await res.json();
        alert(`❌ Error: ${error.message}`);
      }
    } catch (err) {
      alert(`❌ Error de conexión: ${err.message}`);
    }

    }
    setValidated(true);
  };