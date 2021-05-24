import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">O nas</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Centrum Wyszkolenia Żeglarskiego "Kompas" świadczy szeroką gamę usług związanych z turystyką wodną. Prowadzimy profesjonalne kursy żeglarskie i motorowodne kończące się egzaminem dającym uprawnienia państwowe.
          </p>
          <p>
            Szkolenia przeprowadzane są przez wykwalifikowaną i doświadczoną kadrę zgodnie z systemami szkolenia. Współpracujemy z renomowanymi klubami, ośrodkami wodnymi i stowarzyszeniami. Oferta skierowana jest również dla osób chcących podnosić swoje umiejętności oraz zdobywać doświadczenie nautyczne zarówno śródlądowe jak i morskie.
          </p>
          <p>
            Organizujemy warsztaty marynistyczne i manewrowe oraz rejsy morskie. Firma zajmuje się kompleksowymi usługami szkutniczymi.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Cennik</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Jachtowy sternik morski: 2000zł</p>
          <p>Żeglarz jachtowy: 1500zł</p>
          <p>Sternik motorowodny: 450zł</p>
          <br/>
          <p>Usługi skiperskie: 1500zł</p>
          <p>Usługi szkutnicze: 500zł</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Info</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p><b>Centrum Wyszkolenia Żeglarskiego "Kompas" - Szymon Bilski</b></p>
          <p>NIP: 953 259 04 26</p>
          <p>
            ul. Bohaterów Kragujewca 4/2<br/>
            85-863 Bydgoszcz 
          </p>  
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Kontakt</h2>
          <form method="post" action="mailto:szkoleniakompas@gmail.com" enctype="multipart/form-data">
            <div className="field half first">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Wiadomość</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Wyślij" className="special" />
              </li>
              <li>
                <input type="reset" value="Skasuj" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
