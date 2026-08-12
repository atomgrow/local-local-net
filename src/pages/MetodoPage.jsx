import { useLang } from '../lib/i18n'
import Metodo from '../components/Metodo'
import Servicios from '../components/Servicios'
import Red from '../components/Red'
import CtaFinal from '../components/CtaFinal'

export default function MetodoPage() {
  const { lang } = useLang()

  return (
    <main key={lang}>
      <Metodo />
      <Servicios />
      <Red />
      <CtaFinal />
    </main>
  )
}
