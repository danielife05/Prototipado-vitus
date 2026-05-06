import { useNavigate } from 'react-router-dom'
import { useApp, specialties } from '../context/AppContext'
import { SPECIALTY_ICONS } from '../icons'

export default function Especialidades() {
  const navigate = useNavigate()
  const { setSelectedSpecialty } = useApp()

  function handleSelect(spec) {
    setSelectedSpecialty(spec)
    navigate(`/medicos/${spec.id}`)
  }

  return (
    <div className="relative flex flex-col bg-[#faf9f6]" style={{ minHeight: '640px' }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a2f4b] h-[22px] w-[80px] rounded-b-[15px] z-10" />

      <div className="flex flex-col px-[18px] pt-[36px] pb-6 flex-1">
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="text-[#5c8c6e] text-[14px] font-medium text-left mb-4 mt-1 hover:opacity-70"
        >
          ← Volver
        </button>

        {/* Title */}
        <h1 className="text-[#1a2f4b] text-[22px] font-bold leading-tight mb-1">
          ¿Qué tipo de cita<br />necesita, Juana?
        </h1>
        <p className="text-[#6b7280] text-[13px] mb-4">Toque la especialidad.</p>

        {/* Specialty list */}
        <div className="flex flex-col gap-[10px]">
          {specialties.map((spec) => {
            const Icon = SPECIALTY_ICONS[spec.id]
            return (
              <button
                key={spec.id}
                onClick={() => handleSelect(spec)}
                className="flex items-center rounded-[18px] px-[14px] py-0 text-left transition-opacity hover:opacity-80 active:scale-[0.98]"
                style={{ backgroundColor: spec.bg, height: '62px' }}
              >
                {/* Ícono con fondo coloreado */}
                <div
                  className="rounded-[13px] w-[44px] h-[44px] shrink-0 flex items-center justify-center mr-[12px]"
                  style={{ backgroundColor: spec.iconBg }}
                >
                  {Icon && <Icon size={20} style={{ color: spec.color }} />}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[17px] font-bold leading-tight" style={{ color: spec.color }}>
                    {spec.name}
                  </p>
                  <p className="text-[12px] font-normal mt-0.5" style={{ color: spec.color }}>
                    {spec.subtitle}
                  </p>
                </div>
                <span className="text-[16px] ml-2 shrink-0 font-light" style={{ color: spec.color }}>›</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
