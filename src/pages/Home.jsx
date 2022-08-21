import styles from './Home.module.css'
import savings from '../assets/savings.svg'
import LinkButton from '../layouts/LinkButton'

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>
        Comece a gerenciar os seus projetos agora mesmo!
      </p>
      <LinkButton to='/new-project' text='Criar Projeto'/>
      <img src={savings} alt="Costs" />
    </section>
  )
}