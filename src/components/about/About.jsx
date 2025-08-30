export default function About() {
    return (
        <section className="about p-50 bgcolor-2 border-rounded">
            <div className="about-header flex-center">
                <i className="fas fa-users fa-2x"></i>
                <h2>About Us</h2>
            </div>
            <div className="about-text">
                <p className="mb-40">
                    Добре дошли! 👋 Това приложение е създадено, за да направи
                    протоколите от събранията лесни за намиране и преглеждане.
                    Вместо да търсите документи по папки или мейли, тук всичко е
                    събрано на едно място – удобно и подредено. В момента
                    проектът е в своята начална версия, но има голям потенциал
                    за развитие. В бъдеще може да добавим функции като търсене
                    по дати и теми, получаване на известия при нов протокол или
                    дори изграждане на цял архив.
                </p>
            </div>
        </section>
    );
}
