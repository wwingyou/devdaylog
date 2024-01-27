import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <header>
          <h1 className="header_title">
            <a href='/'>
              🌇 <span className="header_text">devday.log</span>
              <span className="header_cursor"></span>
            </a>
          </h1>
          <hr/>
        </header>
        <main>
          {children}
        </main>
      </div>
      <footer>
        <a href='https://github.com/wwingyou'>visit my github 🚀</a>
      </footer>
    </>
  )
}

export default Layout
