import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallanges.module.css";
export function CompletedChallanges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallangesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
