import './App.css'

function App() {
  return (
    <>
      {/* Klavye kullanıcıları için navigasyonu atlama linki */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        {/* CSS'te Flexbox ile sola hizalanacak site adı */}
        <div className="site-title">Kübra Demirgüç</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          {/* Flexbox ile mobilde dikey, büyük ekranda yatay olacak kısım */}
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt="Kübra Demirgüç" />
              <figcaption>Fırat Üniversitesi - Yazılım Mühendisliği Öğrencisi</figcaption>
            </figure>
            <div>
              <p>Yazılım geliştirmeye ve teknolojiye tutkulu bir mühendis adayıyım.</p>
              {/* Flexbox ile sarmalanan beceri etiketleri (Toolbar) */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* CSS Grid ile sarmalanan kartlar */}
          <div className="project-grid">
            <article className="project-card">
              <img src="/proje1.jpg" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje2.jpg" alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje3.jpg" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 KubraDemirguc. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App