//const Formulario = require('./components/Formulario'); 
import Formulario from "./components/Formulario";

function Home() {
  
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>Busqueda de libro en Google Books</h1>
            <Formulario/>
          </main>
        </div>
      </body>
    </html>
  );
}
export default Home;
//module.exports = Home;