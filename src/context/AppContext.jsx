import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const specialties = [
  {
    id: 'cardiologia',
    name: 'Cardiología',
    subtitle: 'Corazón · Circulación',
    bg: '#fde8e8',
    iconBg: 'rgba(197,48,48,0.12)',
    color: '#c53030',
    icon: '♥',
  },
  {
    id: 'traumatologia',
    name: 'Traumatología',
    subtitle: 'Huesos · Articulaciones',
    bg: '#e1effe',
    iconBg: 'rgba(30,66,159,0.12)',
    color: '#1e429f',
    icon: '🦴',
  },
  {
    id: 'oftalmologia',
    name: 'Oftalmología',
    subtitle: 'Visión · Retina',
    bg: '#f3e8ff',
    iconBg: 'rgba(107,33,168,0.12)',
    color: '#6b21a8',
    icon: '👁',
  },
  {
    id: 'med-general',
    name: 'Med. General',
    subtitle: 'Control · Prevención',
    bg: '#e9f2ed',
    iconBg: 'rgba(92,140,110,0.12)',
    color: '#5c8c6e',
    icon: '＋',
  },
  {
    id: 'neurologia',
    name: 'Neurología',
    subtitle: 'Cerebro · Sistema nervioso',
    bg: '#fef3c7',
    iconBg: 'rgba(146,64,14,0.12)',
    color: '#92400e',
    icon: '🧠',
  },
  {
    id: 'geriatria',
    name: 'Geriatría',
    subtitle: 'Salud integral · Adulto mayor',
    bg: '#d1fae5',
    iconBg: 'rgba(6,95,70,0.12)',
    color: '#065f46',
    icon: '❤',
  },
]

export const doctors = [
  {
    id: 'ana-rios',
    name: 'Dra. Ana Ríos',
    initials: 'AR',
    schedule: 'Miércoles · 9am – 12pm',
    avatarBg: '#e9f2ed',
    avatarColor: '#5c8c6e',
  },
  {
    id: 'carlos-mora',
    name: 'Dr. Carlos Mora',
    initials: 'CM',
    schedule: 'Jueves · 2pm – 6pm',
    avatarBg: '#f3f4f6',
    avatarColor: '#1a2f4b',
  },
  {
    id: 'lucia-vargas',
    name: 'Dra. Lucía Vargas',
    initials: 'LV',
    schedule: 'Viernes · 8am – 1pm',
    avatarBg: '#fde8e8',
    avatarColor: '#c53030',
  },
]

export const timeSlots = [
  { id: 1, date: 'Miér. 15 de mayo', time: '10:30 AM', occupied: false },
  { id: 2, date: 'Miér. 15 de mayo', time: '11:30 AM', occupied: false },
  { id: 3, date: 'Miér. 15 de mayo', time: '03:00 PM', occupied: true },
  { id: 4, date: 'Jue. 16 de mayo', time: '09:00 AM', occupied: false },
  { id: 5, date: 'Jue. 16 de mayo', time: '02:00 PM', occupied: false },
]

export function AppProvider({ children }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0])
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0])
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [citaCancelada, setCitaCancelada] = useState(false)

  return (
    <AppContext.Provider
      value={{
        selectedSpecialty,
        setSelectedSpecialty,
        selectedDoctor,
        setSelectedDoctor,
        selectedSlot,
        setSelectedSlot,
        showCancelModal,
        setShowCancelModal,
        citaCancelada,
        setCitaCancelada,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
