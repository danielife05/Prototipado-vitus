// Íconos centralizados — react-icons (Font Awesome 5)
import {
  FaHeart,
  FaEye,
  FaBrain,
  FaBone,
  FaStethoscope,
  FaUserFriends,
  FaCalendarAlt,
} from 'react-icons/fa'

/** Mapeo specialty.id → componente ícono */
export const SPECIALTY_ICONS = {
  cardiologia: FaHeart,
  traumatologia: FaBone,
  oftalmologia: FaEye,
  'med-general': FaStethoscope,
  neurologia: FaBrain,
  geriatria: FaUserFriends,
}

/** Ícono de calendario usado en la card de cita */
export const CalendarIcon = FaCalendarAlt
