import Container from "./container";
import Navigation from "./navigation";

export default function Header({ links }) {
  // const webpSrc = require('../images/alphatronik_logo.png?webp');
  // const imgSrc = require('../images/alphatronik_logo.png');
  return (
    <div className="w-screen">
      <Container>
        <div className="flex items-center h-28 justify-between w-full">
          <div className="flex h-full justify-between items-center">
            <div className="hidden sm:flex pt-3 h-full w-32">
              <picture>
                {/* <source srcSet={webpSrc} type="image/webp"/>
                <source srcSet={imgSrc} type="image/jpeg"/> */}
                {/* <img src={imgSrc} alt="Alphatronik Logo"/> */}
                <img
                  src="../img/alphatronik_logo.png"
                  alt="Alphatronik Logo"
                  className="w-32 sm:ml-8 sm:pr-8"
                />
              </picture>
            </div>
            <div className="">
              <h1 className="text-3xl sm:text-2xl md:text-4xl font-light">Alphatronik</h1>
              <p className="text-gray-333 text-xs mb-2">
              Server Pulsa, Data Internet, PLN Token, <br></br>
              Vocher Data, Game, EMoney dan PPOB
              </p>
            </div>
          </div>

          <Navigation links={links} />
        </div>
      </Container>
    </div>
  );
}
