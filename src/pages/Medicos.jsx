import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, specialties, doctors } from '../context/AppContext'
import { SPECIALTY_ICONS } from '../icons'
import { FiPhone } from 'react-icons/fi'

export default function Medicos() {
  const navigate = useNavigate()
  const { selectedSpecialty, setSelectedDoctor } = useApp()
  const [selected, setSelected] = useState(doctors[0].id)

  const spec = selectedSpecialty || specialties[0]
  const SpecIcon = SPECIALTY_ICONS[spec.id]

  function handleContinuar() {
    const doc = doctors.find((d) => d.id === selected)
    setSelectedDoctor(doc)
    navigate('/fecha-hora')
  }

  return (
    <div className="relative flex flex-col bg-[#faf9f6]" style={{ minHeight: '640px' }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a2f4b] h-[22px] w-[80px] rounded-b-[15px] z-10" />

      <div className="flex flex-col px-[18px] pt-[36px] pb-6 flex-1">
        {/* Back */}
        <button
          onClick={() => navigate('/especialidades')}
          className="text-[#5c8c6e] text-[14px] font-medium text-left mb-3 mt-1 hover:opacity-70"
        >
          ← Especialidades
        </button>

        {/* Progress bar */}
        <div className="relative bg-gray-200/60 h-[4px] rounded-full mb-4">
          <div className="absolute left-0 top-0 h-full bg-[#5c8c6e] rounded-full" style={{ width: '33%' }} />
        </div>

        {/* Specialty header con ícono */}
        <div className="flex items-center gap-3 mb-1">
          <div
            className="rounded-[8px] w-[30px] h-[30px] shrink-0 flex items-center justify-center"
            style={{ backgroundColor: spec.bg }}
          >
            {SpecIcon && <SpecIcon size={15} style={{ color: spec.color }} />}
          </div>
          <h1 className="text-[#1a2f4b] text-[21px] font-bold">{spec.name}</h1>
        </div>
        <p className="text-[#6b7280] text-[13px] mb-4">Elija su médico</p>

        {/* Doctor list */}
        <div className="flex flex-col gap-[10px] mb-4">
          {doctors.map((doc) => {
            const isSelected = selected === doc.id
            return (
              <button
                key={doc.id}
                onClick={() => setSelected(doc.id)}
                className="flex items-center rounded-[18px] px-[14px] py-[9px] text-left transition-all"
                style={{
                  backgroundColor: '#faf9f6',
                  border: isSelected
                    ? '2px solid #5c8c6e'
                    : '1.5px solid rgba(26,47,75,0.10)',
                  height: '68px',
                }}
              >
                <div
                  className="rounded-full w-[46px] h-[46px] shrink-0 flex items-center justify-center mr-[12px]"
                  style={{ backgroundColor: doc.avatarBg }}
                >
                  <span className="text-[16px] font-bold" style={{ color: doc.avatarColor }}>
                    {doc.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1a2f4b] text-[15px] font-semibold leading-tight">{doc.name}</p>
                  <p className="text-[#6b7280] text-[12px] mt-0.5">{doc.schedule}</p>
                </div>
                {isSelected && (
                  <div className="bg-[#5c8c6e] rounded-full w-[22px] h-[22px] shrink-0 flex items-center justify-center ml-2">
                    <span className="text-white text-[11px] font-bold">✓</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Help tip — expandido y con ícono de teléfono */}
        <div
          className="relative rounded-[14px] overflow-hidden mb-5"
          style={{ backgroundColor: 'rgba(92,140,110,0.08)' }}
        >
          {/* Borde izquierdo verde */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#5c8c6e]" />

          <div className="pl-[18px] pr-4 py-[14px]">
            <div className="flex items-center gap-2 mb-1.5">
              <FiPhone size={13} className="text-[#5c8c6e] shrink-0" />
              <p className="text-[#5c8c6e] text-[13px] font-semibold">¿Necesita ayuda?</p>
            </div>
            <p className="text-[#6b7280] text-[12px] leading-relaxed">
              Llame al{' '}
              <span className="font-semibold text-[#1a2f4b]">1800-VITUS</span>
              {' '}o pida asistencia en recepción. Estamos disponibles de lunes a viernes, 8am – 6pm.
            </p>
          </div>
        </div>

        {/* Continuar button */}
        <button
          onClick={handleContinuar}
          className="w-full bg-[#5c8c6e] rounded-[16px] py-[14px] text-white text-[15px] font-semibold text-center hover:bg-[#4a7359] transition-colors active:scale-[0.98] mt-auto"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
