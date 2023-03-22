import styles from "./SocialIcons.module.css";

export default function SocialIcons() {
  return (
    <div className={styles.container}>
      <a href="https://twitter.com/mizu_fi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" style={{ fontSize: "24px" }}></i>
      </a>
      <a href="https://t.me/mizulabs" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram" style={{ fontSize: "24px" }}></i>
      </a>
      <a href="https://github.com/mizulabs" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" style={{ fontSize: "24px" }}></i>
      </a>
      <a href="https://medium.com/@mizu.fi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium" style={{ fontSize: "24px" }}></i>
      </a>
      <a href="https://docs.mizu.fi/" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-book" style={{ fontSize: "24px" }}></i>
      </a>
    </div>
  );
}
