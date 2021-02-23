import styles from "../styles/components/Profile.module.css"
export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Abraao2501.png" alt="Abraão"/>
        
            <div>
                <strong>Abraão Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 
                </p>
            </div>

        </div>
        
    )
}