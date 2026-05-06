import { useNavigate } from 'react-router-dom'
import { useApp, specialties } from '../context/AppContext'
import { SPECIALTY_ICONS, CalendarIcon } from '../icons'

const quickAccess = specialties.slice(0, 4)

export default function Home() {
  const navigate = useNavigate()
  const {
    showCancelModal, setShowCancelModal,
    setSelectedSpecialty,
    citaCancelada, setCitaCancelada,
  } = useApp()

  function handleSpecialtyClick(spec) {
    setSelectedSpecialty(spec)
    navigate(`/medicos/${spec.id}`)
  }

  function handleConfirmCancel() {
    setCitaCancelada(true)
    setShowCancelModal(false)
  }

  return (
    <div className="relative flex flex-col bg-[#faf9f6] overflow-hidden" style={{ minHeight: '640px' }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a2f4b] h-[22px] w-[80px] rounded-b-[15px] z-10" />

      <div className="flex flex-col px-[18px] pt-[36px] pb-6 flex-1">
        {/* Date + greeting */}
        <p className="text-[#6b7280] text-[12px] font-medium mt-2">Miércoles, 15 de mayo</p>
        <h1 className="text-[#1a2f4b] text-[26px] font-bold leading-tight mt-1 mb-4">
          Buenos días,<br />Juana.
        </h1>

        {/* ── Próxima cita ── */}
        {citaCancelada ? (
          /* Estado post-cancelación */
          <div className="bg-[#f3f4f6] rounded-[20px] p-[18px] mb-5 flex flex-col items-center">
            <div className="bg-[#e5e7eb] rounded-full w-[48px] h-[48px] flex items-center justify-center mb-3">
              <CalendarIcon size={22} className="text-[#9ca3af]" />
            </div>
            <p className="text-[#1a2f4b] text-[15px] font-semibold mb-1">Sin citas próximas</p>
            <p className="text-[#6b7280] text-[12px] text-center mb-4 leading-relaxed">
              Tu cita con Dra. Ana Ríos fue cancelada.
            </p>
            <button
              onClick={() => navigate('/especialidades')}
              className="bg-[#5c8c6e] rounded-[12px] px-5 py-[10px] text-white text-[13px] font-semibold hover:bg-[#4a7359] transition-colors"
            >
              + Agendar nueva cita
            </button>
          </div>
        ) : (
          /* Estado normal */
          <div className="bg-[#1a2f4b] rounded-[20px] p-[18px] mb-5">
            <p className="text-white text-[10px] font-semibold tracking-wider mb-3">SU PRÓXIMA CITA</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/10 rounded-[12px] w-[42px] h-[42px] flex items-center justify-center shrink-0">
                <CalendarIcon size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[16px] font-semibold leading-tight">Dra. Ana Ríos</p>
                <p className="text-white/80 text-[12px] mt-0.5">Cardiología · 10:30 AM</p>
              </div>
              <div className="bg-[#5c8c6e] rounded-full px-3 py-1 shrink-0">
                <p className="text-white text-[11px] font-semibold">Hoy</p>
              </div>
            </div>
            <button
              onClick={() => setShowCancelModal(true)}
              className="w-full bg-white/[0.08] border border-white/[0.12] rounded-[10px] py-2 text-white text-[13px] text-center hover:bg-white/[0.15] transition-colors"
            >
              Cancelar esta cita
            </button>
          </div>
        )}

        {/* Quick access */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#6b7280] text-[10px] font-semibold tracking-wider">ACCESO RÁPIDO</p>
          <button
            onClick={() => navigate('/especialidades')}
            className="text-[#5c8c6e] text-[12px] font-medium"
          >
            Ver todas →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {quickAccess.map((spec) => {
            const Icon = SPECIALTY_ICONS[spec.id]
            return (
              <button
                key={spec.id}
                onClick={() => handleSpecialtyClick(spec)}
                className="rounded-[14px] p-3 text-left transition-opacity hover:opacity-80 active:scale-95"
                style={{ backgroundColor: spec.bg, height: '72px' }}
              >
                <div
                  className="rounded-[8px] w-[30px] h-[30px] mb-1.5 flex items-center justify-center"
                  style={{ backgroundColor: spec.iconBg }}
                >
                  {Icon && <Icon size={14} style={{ color: spec.color }} />}
                </div>
                <p className="text-[13px] font-semibold leading-tight" style={{ color: spec.color }}>
                  {spec.name}
                </p>
              </button>
            )
          })}
        </div>

        {/* Ver todas CTA */}
        <button
          onClick={() => navigate('/especialidades')}
          className="w-full bg-[#1a2f4b] rounded-[14px] py-[15px] text-[#faf9f6] text-[14px] font-semibold text-center hover:bg-[#243d5f] transition-colors active:scale-95"
        >
          ≡ Ver todas las especialidades
        </button>
      </div>

      {/* ── Modal cancelar cita ── */}
      {showCancelModal && (
        <div className="absolute inset-0 bg-black/40 flex items-end z-20">
          <div className="w-full bg-white rounded-t-[28px] p-6">
            <p className="text-[#1a2f4b] text-[18px] font-bold mb-1">¿Cancelar su cita?</p>
            <p className="text-[#6b7280] text-[13px] mb-1">Cardiología · Dra. Ana Ríos</p>
            <p className="text-[#6b7280] text-[13px] mb-5">Hoy · 10:30 AM</p>
            <button
              onClick={handleConfirmCancel}
              className="w-full bg-[#dc2626] rounded-[14px] py-[14px] text-white text-[15px] font-semibold mb-3 hover:bg-[#b91c1c] transition-colors"
            >
              Sí, cancelar mi cita
            </button>
            <button
              onClick={() => setShowCancelModal(false)}
              className="w-full bg-white border border-gray-200 rounded-[14px] py-[14px] text-[#1a2f4b] text-[15px] font-semibold hover:bg-gray-50 transition-colors"
            >
              No, conservar la cita
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
