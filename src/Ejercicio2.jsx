/**
 * ============================================================================
 * EJERCICIO 2: Crear y reutilizar tu primer Componente
 * ============================================================================
 *
 * 🎯 OBJETIVO:
 * Entender la modularidad en React creando un componente y reutilizándolo.
 *
 * 📝 ENUNCIADO:
 * 1. Crea un componente llamado `TarjetaUsuario` que retorne una estructura visual
 *    (por ejemplo un <div> con estilos o borde, un <h3> para el título "Perfil" y dos <p> con información estática como nombre y rol).
 * 2. Crea y exporta por defecto el componente principal `Ejercicio2`.
 * 3. Dentro de `Ejercicio2`, llama y reutiliza `<TarjetaUsuario />` al menos 2 veces.
 *
 * 💡 PISTAS:
 * - Los nombres de los componentes en React DEBEN comenzar con mayúscula (PascalCase).
 * - Ejemplo: `function TarjetaUsuario() { return ( ... ); }`
 * - Para aplicar estilos en línea rápidos puedes usar: `style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}`.
 * - Recuerda usar `export default function Ejercicio2() { ... }` para el componente principal.
 */

// 👇 Escribe tu código a partir de aquí:
function TarjetaUsuario({ name }) {
    return (
        <div style={{ border: '1px solid #f60404', padding: '10px', margin: '5px' }}>
            <h3>perfil</h3>
            <p>Nombre: {name}</p>
            <p>Rol: Programador</p>
        </div>
    );
}
export default function Ejercicio2() {
    return (
        <div>
            <TarjetaUsuario name="Juan" />
            <TarjetaUsuario name="María" />
        </div>
    );
}