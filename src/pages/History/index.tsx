import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Landing Page</td>
              <td>1 semana</td>
              <td>Há 1 dia</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Omie Api</td>
              <td>2 semanas</td>
              <td>Há 1 semana</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Utalk messages</td>
              <td>3 dias</td>
              <td>Há 3 semanas</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>App mobile</td>
              <td>2 semanas</td>
              <td>Há 1 mês</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
