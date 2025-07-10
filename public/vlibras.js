const main = () => {
    const createDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", DOM);
    };

    const importScriptFile = () => {
      let script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.onload = () => {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
      };
      document.head.appendChild(script);
    };

    window.addEventListener("DOMContentLoaded", () => {
      createDOMObjects();
      importScriptFile();
    });
};

main ();
