import TemplateMail from '@/templates/TemplateMail'

import { inits } from '@/data/questions/initialAppointment'


export default function InitialAppointment() {
  
  return <TemplateMail title="初回お礼メール" data={inits} />
}