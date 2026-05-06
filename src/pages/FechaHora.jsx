import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, timeSlots } from '../context/AppContext'

export default function FechaHora() {
  const navigate = useNavigate()
  const { selectedDoctor, selectedSpecialty, setSelectedSlot } = useApp()
  const [selected, setSelected] = useState(timeSlots[0].id)

  const doc = selectedDoctor || { name: 'Dra. Ana Ríos', initials: 'AR', avatarBg: '#e9f2ed', avatarColor: '#5c8c6e' }
  const spec = selectedSpecialty || { name: 'Cardiología' }

  const currentSlot = timeSlots.find((s) => s.id === selected)

  function handleConfirmar() {
    setSelectedSlot(currentSlot)
    navigate('/confirmacion')
  }

  return (
    <div className="relative flex flex-col bg-[#faf9f6]" style={{ minHeight: '640px' }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a2f4b] h-[22px] w-[80px] rounded-b-[15px] z-10" />

      <div className="flex flex-col px-[18px] pt-[36px] pb-6 flex-1">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-[#5c8c6e] text-[14px] font-medium text-left mb-3 mt-1 hover:opacity-70"
        >
          ← Médicos
        </button>

        {/* Progress bar */}
        <div className="relative bg-gray-200/60 h-[4px] rounded-full mb-4">
          <div className="absolute left-0 top-0 h-full bg-[#5c8c6e] rounded-full" style={{ width: '66%' }} />
        </div>

        {/* Doctor mini info */}
        <div className="flex items-center gap-3 mb-1">
          <div
            className="rounded-full w-[34px] h-[34px] shrink-0 flex items-center justify-center"
            style={{ backgroundColor: doc.avatarBg }}
          >
            <span className="text-[13px] font-bold" style={{ color: doc.avatarColor }}>
              {doc.initials}
            </span>
          </div>
          <div>
            <p className="text-[#1a2f4b] text-[15px] font-semibold leading-tight">{doc.name}</p>
            <p className="text-[#6b7280] text-[11px]">{spec.name}</p>
          </div>
        </div>

        <p className="text-[#6b7280] text-[13px] mt-3 mb-3">Elija fecha y hora</p>

        {/* Time slots */}
        <div className="flex flex-col gap-[10px] flex-1">
          {timeSlots.map((slot) => {
            const isSelected = selected === slot.id && !slot.occupied
            return (
              <button
                key={slot.id}
                disabled={slot.occupied}
                onClick={() => !slot.occupied && setSelected(slot.id)}
                className="flex items-center justify-between rounded-[17px] px-[18px] text-left transition-all"
                style={{
                  height: '52px',
                  backgroundColor: slot.occupied
                    ? 'rgba(107,114,128,0.06)'
                    : isSelected
                    ? '#1a2f4b'
                    : 'white',
                  border: slot.occupied
                    ? 'none'
                    : isSelected
                    ? 'none'
                    : '1.5px solid rgba(26,47,75,0.10)',
                  cursor: slot.occupied ? 'default' : 'pointer',
                }}
              >
                <div>
                  <p
                    className="text-[15px] font-semibold leading-tight"
                    style={{ color: slot.occupied ? '#6b7280' : isSelected ? 'white' : '#1a2f4b' }}
                  >
                    {slot.date}
                  </p>
                  <p
                    className="text-[13px] mt-0.5"
                    style={{ color: slot.occupied ? '#6b7280' : isSelected ? 'white' : '#6b7280' }}
                  >
                    {slot.time}
                  </p>
                </div>
                <div className="flex items-center">
                  {slot.occupied ? (
                    <div className="bg-gray-200/80 rounded-[8px] px-3 py-1">
                      <span className="text-[#6b7280] text-[11px] font-medium">Ocupado</span>
                    </div>
                  ) : isSelected ? (
                    <div className="bg-[#5c8c6e] rounded-full w-[26px] h-[26px] flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">✓</span>
                    </div>
                  ) : null}
                </div>
              </button>
            )
          })}
        </div>

        {/* Confirm button */}
        <button
          onClick={handleConfirmar}
          className="w-full bg-[#5c8c6e] rounded-[16px] py-[15px] text-white text-[15px] font-semibold text-center mt-5 hover:bg-[#4a7359] transition-colors active:scale-[0.98]"
        >
          {currentSlot
            ? `Confirmar: ${currentSlot.date.split(' de ')[0]} · ${currentSlot.time}`
            : 'Confirmar'}
        </button>
      </div>
    </div>
  )
}
