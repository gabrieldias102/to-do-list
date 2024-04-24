import { PlusCircle } from '@phosphor-icons/react'

import styles from './InputField.module.css'

export function InputField() {
    return (
        <div className={styles.container}>
            <form>
                <textarea 
                    className={styles.taskTitleFiel}
                    defaultValue={'Adicione uma nova tarefa'}>
                </textarea>
                <button className={styles.addButton} type='submit'>
                    Criar 
                    <PlusCircle size={32}/> 
                </button>
                
            </form>
        </div>
    )
}