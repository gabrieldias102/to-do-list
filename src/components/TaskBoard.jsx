import styles from './TaskBoard.module.css'
import clipboard from '../assets/clipboard.svg'

import { Task } from './Task.jsx'

export function TaskBoard() {
    return (
        <div>
            <div className={styles.counters}>
                <div className={styles.createdTasks}>
                    <p><strong> Tarefas criadas </strong></p>
                    <span>0</span>
                </div>
                <div className={styles.completedTasks}>
                    <p><strong> Concluídas </strong></p>
                    <span>0</span>
                </div>
            </div>

            <div className={styles.taskList}>
                <div className={styles.emptyTaskList}>
                    <img src={clipboard}></img>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                <div className={styles.taskListFullfilled}>
                    <Task />
                </div>
            </div>
            
        </div>
    )
}