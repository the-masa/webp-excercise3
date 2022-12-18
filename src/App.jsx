import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Loading() {
  return <p>Loading...</p>;
}
function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Amiibo Images</h1>
          <div className="is-flex is-justify-content-space-between">
            <p>日本大学文理学部情報科学科Webプログラミング演習課題</p>
            <p>5421035 濵 将紘</p></div>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="Amiibo Images" />
        </figure>
      </div>
    </div>
  );
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null || urls.length === 0) {
    return null;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url, index) => {
        return (
          <div key={index} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}
function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { gameseries } = event.target.elements;
    props.onFormSubmit(gameseries.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <div className="select">
              <select name="gameseries" defaultValue="Super Mario">
                <option value="Super Mario">Super Mario</option>
                <option value="Yoshi's Woolly World">Yoshi’s Woolly World
                </option>
                <option value="The Legend of Zelda">The Legend of Zelda</option>
                <option value="Breath of the Wild">Breath of the Wild</option>
                <option value="Animal Crossing">Animal Crossing</option>
                <option value="Star Fox">Star Fox</option>
                <option value="Metroid">Metroid</option>
                <option value="F-Zero">F-Zero</option>
                <option value="Pikmin">Pikmin</option>
                <option value="Punch Out">Punch Out</option>
                <option value="Wii Fit">Wii Fit</option>
                <option value="Kid Icarus">Kid Icarus</option>
                <option value="Classic Nintendo">Classic Nintendo</option>
                <option value="Mii">Mii</option>
                <option value="Splatoon">Splatoon</option>
                <option value="Mario Sports Superstars">
                  Mario Sports Superstars
                </option>
                <option value="ARMS">ARMS</option>
                <option value="Pokemon">Pokemon</option>
                <option value="Kirby">Kirby</option>
                <option value="BoxBoy!">BoxBoy!</option>
                <option value="Fire Emblem">Fire Emblem</option>
                <option value="Xenoblade">Xenoblade</option>
                <option value="Earthbound">Earthbound</option>
                <option value="Chibi Robo">Chibi Robo</option>
                <option value="Sonic">Sonic</option>
                <option value="Bayonetta">Bayonetta</option>
                <option value="Pac-man">Pac-man</option>
                <option value="Dark Souls">Dark Souls</option>
                <option value="Megaman">Megaman</option>
                <option value="Street fighter">Street fighter</option>
                <option value="Monster Hunter">Monster Hunter</option>
                <option value="Shovel Knight">Shovel Knight</option>
                <option value="Final Fantasy">Final Fantasy</option>
                <option value="Dragon Quest">Dragon Quest</option>
                <option value="Kellogs">Kellogs</option>
                <option value="Metal Gear Solid">Metal Gear Solid</option>
                <option value="Castlevania">Castlevania</option>
                <option value="Power Pros">Power Pros</option>
                <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
                <option value="Diablo">Diablo</option>
                <option value="Persona">Persona</option>
                <option value="Banjo Kazooie">Banjo Kazooie</option>
                <option value="Fatal Fury">Fatal Fury</option>
                <option value="Minecraft">Minecraft</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("Super Mario").then((urls) => {
      //    fetchImages
      setUrls(urls);
    });
  }, []);
  function reloadImages(gameseries) {
    fetchImages(gameseries).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div
          className="container"
          style={{ width: "fit-content", margin: "0 auto" }}
        >
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href="https://amiiboapi.com/docs/">AmiiboApi</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
