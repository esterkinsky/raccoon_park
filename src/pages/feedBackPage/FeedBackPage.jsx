import Footer from "../../components/footer/Footer";
import styles from "./FeedBackPage.module.css";

const FeedBackPage = ({ showComponent }) => {
    return (
        <div className={styles.common_block}>
            <div className={styles.menu}>
                <div className={styles.buttons}>
                    <button
                        className={styles.menu_btn}
                        onClick={() => {
                            showComponent("Home");
                        }}
                    >
                        Главная
                    </button>
                    <button
                        className={styles.menu_btn}
                        onClick={() => {
                            showComponent("FeedBack");
                        }}
                    >
                        Компания
                    </button>
                </div>
                <div className={styles.contacts}></div>
            </div>
            <div className={styles.form_block}>
                <div className={styles.desc}>ОБРАТНАЯ СВЯЗЬ</div>
                <div className={styles.info}>
                    Задайте нам любой вопрос, напишите или сделайте заказ.
                    <br />
                    Наши менеджеры ответят вам в ближайшее время.
                </div>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="Имя..."
                        className={styles.name}
                    />
                    <input
                        type="text"
                        placeholder="Телефон"
                        className={styles.number}
                    />
                    <textarea
                        placeholder="Ваше сообщение"
                        className={styles.text}
                    ></textarea>
                    <button className={styles.btn}>ОТПРАВИТЬ СООБЩЕНИЕ</button>
                </div>
            </div>
            <div className={styles.map_zone}>
                <div className={styles.adress}>
                    <div className={styles.adr_title}>Наши контакты</div>
                    <div className={styles.adr}>
                        г. Ижевск, ул. Орджоникидзе, 23Б
                    </div>
                    <div className={styles.adr_num}>+7 (341) 246-75-32</div>
                </div>
                <div id="map">
                    <iframe
                        title="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4fb15fe026b4bf1e009ca013f8af91ecba37589ec472933dabd413855d1e6243&amp;source=constructor"
                        width="500"
                        height="400"
                        frameborder="0"
                        className={styles.map}
                    ></iframe>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default FeedBackPage;
