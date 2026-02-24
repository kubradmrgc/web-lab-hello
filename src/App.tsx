import './App.css'

function App() {
  return (
    <>
      {/* Klavye kullanıcıları için navigasyonu atlama linki */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
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
          <figure>
            {/* Alt metin erişilebilirlik için zorunludur */}
            <img src="/profil.jpg" alt="Kübra Demirgüç" />
            <figcaption>Fırat Üniversitesi - Yazılım Mühendisliği Öğrencisi</figcaption>
          </figure>
          <p>Yazılım geliştirmeye ve teknolojiye tutkulu bir mühendis adayıyım.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Otomasyon Sistemi</h3>
            <p>Masaüstü tabanlı stok ve reçete otomasyonu.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* İstemci tarafı doğrulama (novalidate) ve aria etiketleri */}
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