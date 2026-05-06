import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import confetti from 'canvas-confetti'

export default function Confirmacion() {
  const navigate = useNavigate()
  const { selectedSpecialty, selectedDoctor, selectedSlot } = useApp()
  const containerRef = useRef(null)

  const spec = selectedSpecialty || { name: 'Cardiología', color: '#c53030' }
  const doc = selectedDoctor || { name: 'Dra. Ana Ríos' }
  const slot = selectedSlot || { date: 'Miér. 15 de mayo', time: '10:30 AM' }

  const fechaLarga = slot.date
    .replace('Miér.', 'Miércoles')
    .replace('Jue.', 'Jueves')

  /* ── Confetti al montar la pantalla ── */
  useEffect(() => {
    // Obtiene el centro del phone-frame para disparar el confetti desde ahí
    const rect = containerRef.current?.getBoundingClientRect()
    const originX = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
    const originY = rect ? (rect.top + 80) / window.innerHeight : 0.35

    // Primera rafaga
    confetti({
      particleCount: 90,
      spread: 70,
      angle: 90,
      origin: { x: originX, y: originY },
      colors: ['#5c8c6e', '#1a2f4b', '#d1fae5', '#e1effe', '#fde8e8', '#fef3c7', '#f3e8ff'],
      scalar: 1.1,
      zIndex: 9999,
    })

    // Segunda rafaga (ligera, 300 ms después)
    const t = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 55,
        angle: 80,
        origin: { x: originX - 0.06, y: originY },
        colors: ['#5c8c6e', '#d1fae5', '#faf9f6'],
        scalar: 0.85,
        zIndex: 9999,
      })
      confetti({
        particleCount: 50,
        spread: 55,
        angle: 100,
        origin: { x: originX + 0.06, y: originY },
        colors: ['#1a2f4b', '#e1effe', '#fef3c7'],
        scalar: 0.85,
        zIndex: 9999,
      })
    }, 300)

    return () => clearTimeout(t)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-[#faf9f6]"
      style={{ minHeight: '640px' }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a2f4b] h-[22px] w-[80px] rounded-b-[15px] z-10" />

      {/* Progress bar (completo) */}
      <div className="mx-[18px] mt-[36px] relative bg-gray-200/60 h-[4px] rounded-full mb-6">
        <div className="absolute left-0 top-0 h-full bg-[#5c8c6e] rounded-full w-full" />
      </div>

      <div className="flex flex-col items-center px-[18px] pb-8 flex-1">
        {/* Check animado */}
        <div className="check-outer mb-4">
          <div className="check-inner">
            <span className="text-white text-[26px] font-bold leading-none select-none">✓</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1a2f4b] text-[24px] font-bold text-center mb-2 fade-up">
          ¡Cita agendada!
        </h1>
        <p className="text-[#6b7280] text-[13px] text-center mb-6 px-4 leading-relaxed fade-up" style={{ animationDelay: '0.1s' }}>
          Le enviaremos un SMS el día anterior, Juana. ¡Que se mejore!
        </p>

        {/* Tabla de detalles */}
        <div className="w-full bg-white rounded-[20px] overflow-hidden mb-6 border border-gray-100 fade-up" style={{ animationDelay: '0.18s' }}>
          <DetailRow label="Especialidad">
            <span className="font-semibold text-[#1a2f4b] flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: spec.color }} />
              {spec.name}
            </span>
          </DetailRow>
          <DetailRow label="Médico">
            <span className="font-semibold text-[#1a2f4b]">{doc.name}</span>
          </DetailRow>
          <DetailRow label="Fecha">
            <span className="font-semibold text-[#1a2f4b]">{fechaLarga}, 2026</span>
          </DetailRow>
          <DetailRow label="Hora">
            <span className="font-semibold text-[#1a2f4b]">{slot.time}</span>
          </DetailRow>
          <DetailRow label="Consultorio" last>
            <span className="font-semibold text-[#1a2f4b]">Piso 3 - #302</span>
          </DetailRow>
        </div>

        {/* Volver al inicio */}
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#5c8c6e] rounded-[16px] py-[15px] text-white text-[15px] font-semibold text-center mb-3 hover:bg-[#4a7359] transition-colors active:scale-[0.98] fade-up"
          style={{ animationDelay: '0.26s' }}
        >
          Volver al inicio
        </button>

        {/* Agregar al calendario */}
        <button
          className="text-[#5c8c6e] text-[13px] font-medium hover:opacity-70 fade-up"
          style={{ animationDelay: '0.32s' }}
        >
          Agregar al calendario
        </button>
      </div>
    </div>
  )
}

function DetailRow({ label, children, last }) {
  return (
    <div
      className="flex items-center justify-between px-5 py-3"
      style={{ borderBottom: last ? 'none' : '1px solid #f3f4f6' }}
    >
      <span className="text-[#6b7280] text-[13px]">{label}</span>
      <span className="text-[13px]">{children}</span>
    </div>
  )
}
