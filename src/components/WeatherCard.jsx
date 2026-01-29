import styles from "./WeatherCard.module.css"; /*it creates a object name styles which contains all the .classes as keys and their value are in the form of string and we can directly use them via obj.class*/
function WeatherCard({ weath }) {
  if (!weath)
    return (
      <>
        <div className={styles.card}>
          <p className={styles.city}>city</p>
          <p className={styles.temp}>temperature</p>
          <p className={styles.description}>Weather condition</p>
        </div>
      </>
    );
  const { main, name, weather } = weath;
  const description = weather[0].description;
  const icon = weather[0].icon;
  return (
    <>
      <div className={styles.card}>
        <p className={styles.city}>city={name}</p>
        <p className={styles.temp}>temperature={main.temp}</p>
        <p className={styles.description}>Weather condition={description}</p>
        <img
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </div>
    </>
  );
}
export default WeatherCard;
