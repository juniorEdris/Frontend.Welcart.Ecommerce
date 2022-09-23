import styles from "../styles/TopLink.module.css";
const TopLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-2 text-sm font-medium">
      <div className="text-left hidden md:block ml-3">
        <div className={`${styles.left}`}>
          <span>About us</span>
          <span>My account</span>
          <span>Featured products</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="text-right mr-3">
        <div className={`${styles.right}`}>
          <span>Order tracking</span>
          <span>English</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default TopLinks;
