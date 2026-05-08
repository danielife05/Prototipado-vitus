# Vitus · Prototipo de Agendamiento de Citas

Prototipo web funcional de una aplicación móvil para agendar citas médicas, basado en el diseño Figma **Vitus · Flujo Completo**.

---

## 📱 Flujo de navegación

```
Inicio
 ├── Ver todas las especialidades ──► Especialidades
 │                                        └── Seleccionar especialidad ──► Médicos
 │                                                                            └── Continuar ──► Fecha y hora
 │                                                                                                 └── Confirmar ──► ¡Cita agendada! 🎉
 │
 └── Cancelar esta cita ──► Modal de cancelación
                                 ├── Sí, cancelar ──► Home (estado sin citas)
                                 └── No, conservar ──► Home (sin cambios)
```

### Pantallas incluidas

| # | Pantalla | Descripción |
|---|----------|-------------|
| 01 | **Inicio** | Saludo, próxima cita, acceso rápido a especialidades |
| 02 | **Especialidades** | Lista de 6 especialidades con íconos y colores |
| 03 | **Médicos** | Selección de médico con disponibilidad horaria |
| 04 | **Fecha y hora** | Selección de turno disponible |
| 05 | **Confirmación** | Resumen de la cita + animación de confetti 🎊 |
| 06 | **Cita cancelada** | Estado del home tras cancelar una cita |

---

## 🛠 Correr el proyecto localmente

### Requisitos
- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/danielife05/Prototipado-vitus.git
cd Prototipado-vitus

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

Luego abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

---

## 🏗 Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| [React 19](https://react.dev/) | Biblioteca de UI |
| [Vite 8](https://vite.dev/) | Bundler y servidor de desarrollo |
| [React Router v6](https://reactrouter.com/) | Navegación entre pantallas |
| [Tailwind CSS v3](https://tailwindcss.com/) | Estilos utilitarios |
| [react-icons](https://react-icons.github.io/react-icons/) | Íconos por especialidad médica |
| [canvas-confetti](https://github.com/catdad/canvas-confetti) | Animación de celebración |

---

## 📂 Estructura del proyecto

```
├── src/
│   ├── context/
│   │   └── AppContext.jsx     # Estado global (especialidad, médico, turno, cancelación)
│   ├── pages/
│   │   ├── Home.jsx           # Pantalla 01 · Inicio
│   │   ├── Especialidades.jsx # Pantalla 02 · Especialidades
│   │   ├── Medicos.jsx        # Pantalla 03 · Médicos
│   │   ├── FechaHora.jsx      # Pantalla 04 · Fecha y hora
│   │   └── Confirmacion.jsx   # Pantalla 05 · Confirmación + modal 06
│   ├── icons.jsx              # Mapa de íconos por especialidad
│   ├── App.jsx                # Router principal
│   └── index.css              # Estilos globales + animaciones
└── index.html
```

---

## 🎨 Diseño original

- **Figma:** [Vitus · Flujo Completo](https://www.figma.com/design/tfQG9JOCSO8fllKJk3ZDoK/Vitus-%C2%B7-Flujo-Completo)
- Tipografía: **Inter** (Google Fonts)
- Color primario: `#1a2f4b` (navy) · Acento: `#5c8c6e` (verde)
