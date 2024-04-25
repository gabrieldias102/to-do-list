import styles from './TaskBoard.module.css'
import clipboard from '../assets/clipboard.svg'

export function TaskBoard() {
    return (
        <div>
            <div className={styles.counters}>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <p>0</p>
                </div>
                <div className={styles.completedTasks}>
                    <p>Concluídas</p>
                    <p>0</p>
                </div>
            </div>

            <div className={styles.taskList}>
                <div className={styles.emptyTaskList}>
                    <img src={clipboard}></img>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}