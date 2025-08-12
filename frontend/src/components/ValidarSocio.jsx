export async function ValidarSocio(datos) {
    /*const form = document.getElementById('loginForm');
    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());*/

    try{
        const res = await fetch("http://localhost:3000/api/socio/validar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
    
        if (!res.ok) {
            return false
          }
        const data = await res.json();
        return data.valid;
    
    } catch (err) {
      alert(`❌ Error de conexión: ${err.message}`);
      return false;
    }
}