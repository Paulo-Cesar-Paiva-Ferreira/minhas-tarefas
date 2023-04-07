import BotaoAdicinar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/LIstaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFistros={true} />
    <ListaDeTarefas />
    <BotaoAdicinar />
  </>
)

export default Home
