import {
  Briefcase, ChartColumn, Circle, Cpu, Earth, Handshake, Landmark, Leaf, MessagesSquare,
  MonitorSmartphone, Phone, Radio, Scale, ShieldCheck, Store, Tablet,
} from 'lucide-react'

// Icons referenced by name from the editorial content (src/content/site.js).
const icons = {
  Briefcase, ChartColumn, Cpu, Earth, Handshake, Landmark, Leaf, MessagesSquare,
  MonitorSmartphone, Phone, Radio, Scale, ShieldCheck, Store, Tablet,
}

export default function Icon({ name, size = 22, strokeWidth = 1.75, ...rest }) {
  const Cmp = icons[name] ?? Circle
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />
}
