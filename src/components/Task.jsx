import styles from './Task.module.css'

import { Circle } from '@phosphor-icons/react' 
import { CheckCircle } from '@phosphor-icons/react' 
import { Trash } from '@phosphor-icons/react' 

export function Task() {
    return (
        <div className={styles.task}>
            <Circle size={24} className={styles.circle} />
            <CheckCircle size={24} className={styles.checkCircle} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={22} className={styles.trash}/>
        </div>
    )
}