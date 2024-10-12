import { Card } from '../Card/Card'
import s from './Catalog.module.css'
import { NavLink } from 'react-router-dom'

export function Catalog(){
    return(
        <div className={s.catalog}>
            <h1>Каталог товаров</h1>
            <div className={s.categories}>
                <h3>Категории:</h3>
                <nav>
                    <NavLink className={s.active} to="#">Все товары</NavLink>
                    <NavLink to="#">Шины/колеса</NavLink>
                    <NavLink to="#">Масла</NavLink>
                    <NavLink to="#">Ароматизаторы</NavLink>
                </nav>
            </div>
            <div className={s.cards}>
                <Card image='https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg' name='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"' price='335'/>
                <Card image='https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/7096538636.jpg' name='Автомобильный ароматизатор Diamond candle c ароматом "Super"' price='500'/>
                <Card image='https://ir-3.ozone.ru/s3/multimedia-1-4/wc1000/7037046508.jpg' name='Автопарфюм "Black Afgano" с безопасным составом по мотивам парфюма' price='300'/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className={s.more}>
                <a href="#">Загрузить еще товары</a>
            </div>
        </div>
        // <section>
        //     <div className={s.container}>
        //         <div className={s.catalog__inner}>
        //             <Card image='https://ir-3.ozone.ru/s3/multimedia-1-n/wc1000/7029623651.jpg' name='skfke' price='789'/>
        //         </div>
        //     </div>
        //     {/* <Card name='kdrjfraj'/> */}
        //     {/* <div className="container">
        //         <div className={s.catalog__inner}>
        //             <Card image='https://get.wallhere.com/photo/2048x1280-px-animals-baby-cat-cats-cute-fat-fluffy-grass-grey-kitten-kittens-1913313.jpg' name='Товар1' price='678'/>
        //             <Card/>
        //         </div>
        //     </div> */}
        // </section>
    )
}