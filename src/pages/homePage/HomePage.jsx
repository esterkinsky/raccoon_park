import React from "react";
import Footer from "../../components/footer/Footer";
import styles from "./HomePage.module.css";

const HomePage = ({ showComponent }) => {
    return (
        <div className={styles.common_block}>
            <div className={styles.about}>
                <div className={styles.about_back}>
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
                    <div className={styles.line}></div>
                    <div className={styles.description}>
                        <p className={styles.h1}>Енот - парк</p>
                        <p className={styles.h2}>отдых на высоком уровне</p>
                        <p className={styles.h4}>
                            Парк активного и семейного отдыха в центре Ижевска
                            <br />4 трассы для тюбинга, самые длинные троллеи
                            (zip-line), веревочные трассы для детей и
                            экстремалов, роуп-джампинг, квесты, беседки,
                            тим-билдинг и тур-полоса!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.grafic}>
                <div className={styles.work_graph}>
                    <div className={styles.head_block}>
                        <p>ГРАФИК РАБОТЫ ПАРКА</p>
                    </div>
                    <div className={styles.col1}>
                        <p> Ежедневно с 10.00 до 21.00, Пт, Сб до 22.00 </p>
                        <p> Email: ENOTPARK2@YANDEX.RU</p>
                        <p> г. Ижевск, ул. Орджоникидзе, 23Б</p>
                    </div>
                    <div className={styles.col2}>
                        <p>4 дорожки для тюбинга</p>
                        <p className={styles.bold}>
                            Самая длинная дорогa Троллей
                        </p>
                        <p className={styles.bold}>
                            10 самых живописных беседок Ижевска
                        </p>
                    </div>
                    <div className={styles.col3}>
                        <p>18 локаций для активного отдыха</p>
                        <p>112 компетентых сотрудников</p>
                    </div>
                </div>
                <div className={styles.call}>
                    <p className={styles.ask}>
                        Позвоните нам или оставьте заявку с сайта. <br />
                        Мы перезвоним вам в течение 10 минут.
                    </p>
                    <p className={styles.number}>+7 (341) 246-75-32</p>
                    <button className={styles.call_btn}>
                        ОФОРМИТЬ ЗАЯВКУ СЕЙЧАС
                    </button>
                </div>
            </div>
            <div className={styles.zones}>
                <div className={styles.info_places}>
                    <div className={styles.small_text}>
                        Обнимите свою дикую сторону в Енот Парке!
                        <br />
                        Подарите себе незабывемый день, наполненный
                        <br /> радостью,смехоми восхищением.Поситите Енот Парк и{" "}
                        <br />
                        познаёте магию лесной атмосферы.
                    </div>
                    <div className={styles.line_between}></div>
                    <div className={styles.big_text}>
                        <p className={styles.slash}>\\</p>
                        <p>Создаём тёплую атмосферу вашего отдыха</p>
                    </div>
                </div>
                <div className={styles.places}>
                    <div className={styles.first}>
                        <div className={styles.place_img1}></div>
                        <div className={styles.place_text}>
                            <div className={styles.select}></div>
                            <div className={styles.place_inf}>
                                Современная гостиная в древесных тонах
                            </div>
                        </div>
                        <div className={styles.place_line}></div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.place_img2}></div>
                        <div className={styles.place_text}>
                            <div className={styles.select}></div>
                            <div className={styles.place_inf}>
                                Панорамная чилаут зона для чтения и отдыха
                            </div>
                        </div>
                        <div className={styles.place_line}></div>
                    </div>
                    <div className={styles.third}>
                        <div className={styles.place_img3}></div>
                        <div className={styles.place_text}>
                            <div className={styles.select}></div>
                            <div className={styles.place_inf}>
                                Уютный лофт в светлых древесных тонах
                            </div>
                        </div>
                        <div className={styles.place_line}></div>
                    </div>
                </div>
                <div className={styles.show_more}>
                    <button className={styles.show_more_btn}>
                        ПОКАЗАТЬ ЕЩЕ
                    </button>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.left_photo}>
                    <div className={styles.inf_back}>
                        <p className={styles.inf_num}>15</p>
                        <p className={styles.inf_text}>лет вместе с вами</p>
                    </div>
                </div>
                <div className={styles.right_info}>
                    <div className={styles.about_us}>
                        <p className={styles.main_words}>\\ КОРОТКО О НАС</p>
                        <p className={styles.under_main_words}>
                            Организовываем и создаём экологичные зоны отдыха
                        </p>
                        <div className={styles.translate_dots}>• • •</div>
                        <p className={styles.middle_info}>
                            Приглашаем вас в мир приключений, где вы сможете
                            взлететь над землей и <br /> бросить вызов своим
                            возможностям. Испытайте себя на различных <br />
                            препятствиях, включая качающиеся мосты, канатные
                            дороги и многое другое.
                        </p>
                    </div>
                    <div className={styles.ways}>
                        <div className={styles.img_text}>
                            <div className={styles.img_place1}></div>
                            <div className={styles.text_place}>
                                Безопасные
                                <br /> маршруты
                            </div>
                        </div>
                        <div className={styles.line_only}></div>
                        <div className={styles.text_only}>
                            Безопасность каждой подвесной <br /> дороги
                            подтверждается <br />
                            соответствующим сертификатом <br />
                            европейского стандарта. Мы
                            <br /> используем продукцию только
                            <br /> проверенных поставщиков.
                        </div>
                        <div className={styles.more_only}>Подробнее</div>
                    </div>
                    <div className={styles.quests}>
                        <div className={styles.img_text}>
                            <div className={styles.img_place2}></div>
                            <div className={styles.text_place}>
                                Проведение квестов и <br />
                                мероприятий
                            </div>
                        </div>
                        <div className={styles.line_only}></div>
                        <div className={styles.text_only}>
                            Испытайте свои умственные и <br />
                            физические способности,
                            <br /> погрузившись в наши интерактивные <br />
                            квесты. Решайте головоломки,
                            <br /> находите подсказки и разгадывайте <br />
                            тайны, чтобы одержать победу.
                        </div>
                        <div className={styles.more_only}>Подробнее</div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
