export function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    
    let edadAnios = hoy.getFullYear() - nacimiento.getFullYear();
    let edadMeses = hoy.getMonth() - nacimiento.getMonth();
    let edadDias = hoy.getDate() - nacimiento.getDate();

    if (edadDias < 0) {
        edadMeses--;
        edadDias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    }

    if (edadMeses < 0) {
        edadAnios--;
        edadMeses += 12;
    }

    // Si la edad es menor a 1 año, devolvemos solo los meses
    if (edadAnios < 1) {
        return {
            tipo: "meses",
            valor: edadAnios * 12 + edadMeses // Convertimos los años a meses y sumamos los meses
        };
    }

    // Si tiene 1 año o más, devolvemos solo los años
    return {
        tipo: "años",
        valor: edadAnios
    };
}
