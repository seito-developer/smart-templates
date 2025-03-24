import TemplateMail from '@/templates/TemplateMail'
import { siidSales } from '@/data/questions/siidSales'

export default function SiidSales() {
  
  return <TemplateMail title="サービス説明後の返信" data={siidSales} />
}

