import { useLang } from '../lib/i18n'
import { useSeo } from '../lib/useSeo'
import Nosotros from '../components/Nosotros'
import Tandil from '../components/Tandil'
import Testimonios from '../components/Testimonios'
import PorQue from '../components/PorQue'
import Faq from '../components/Faq'
import CtaFinal from '../components/CtaFinal'

export default function NosotrosPage() {
  const { lang } = useLang()
  useSeo('nosotros')

  return (
    <main id="contenido" key={lang} className="bg-vanilla/50">
      <Nosotros />
      <Tandil />
      <Testimonios />
      <PorQue />
      <Faq />
      <CtaFinal />
    </main>
  )
}
