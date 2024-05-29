import styles from './Footer.module.css'

export default function Footer () {
    return (
        <>
        <div className={styles.foot_1}>
            <div className={styles.foot_img}></div>
            <div className={styles.foot_main_desc}>КОРОТКО О НАС</div>
            <div className={styles.foot_desc}>
                Веревочный парк Енот Парк - это идеальное место <br />
                для семейного отдыха, тимбилдинга или просто <br />
                активного времяпрепровождения на свежем воздухе. <br />
                Присоединяйтесь к нам и бросьте вызов своим <br />
                возможностям!
            </div>
        </div>
        <div className={styles.foot_2}>
            <div className={styles.foot_main_desc}>МЕНЮ</div>
            <div className={styles.foot_decor}></div>
            <div>
                <p className={styles.foot_list_item}>Главная</p>
                <p className={styles.foot_list_item}>Галерея</p>
                <p className={styles.foot_list_item}>Услуги</p>
                <p className={styles.foot_list_item}>Аренда беседок</p>
                <p className={styles.foot_list_item}>Компания</p>
            </div>
        </div>
        <div className={styles.foot_3}>
            <div className={styles.foot_main_desc}>УСЛУГИ</div>
            <div className={styles.foot_decor}></div>
            <div>
                <p className={styles.foot_list_item}>Дорога троллей</p>
                <p className={styles.foot_list_item}>Веревочный парк</p>
                <p className={styles.foot_list_item}>Аренда беседок</p>
                <p className={styles.foot_list_item}>
                    Сети на деревьях
                </p>
                <p className={styles.foot_list_item}>Тюбинги</p>
                <p className={styles.foot_list_item}>Каток</p>
            </div>
        </div>
        <div className={styles.foot_4}>
            <div className={styles.foot_main_desc}>МЫ В СОЦ. СЕТЯХ</div>
            <div className={styles.foot_decor}></div>
            <div>
                <p className={styles.foot_list_item_desc}>
                    Подпишитесь на нас в социальных сетях, <br /> чтобы
                    не пропустить выход новых <br /> невероятных
                    проектов, разработанных <br />
                    для наших клиентов по всему миру.
                </p>
            </div>
            <div className={styles.soc_seti}>
                <div className={styles.inst}></div>
                <div className={styles.vk}></div>
                <div className={styles.fb}></div>
                <div className={styles.tw}></div>
            </div>
        </div>
    </>
    )
}