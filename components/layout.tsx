import React from 'react'
import styles from './layout.module.css';

interface Props {
    children: React.ReactNode
}

const Layouts: React.FC<Props> = ({ children }) => (<div className={styles.container}>{children}</div>)

export default Layouts
