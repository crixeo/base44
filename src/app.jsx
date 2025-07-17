import React from 'react';

export default function App() {
  const iframeSrcDoc = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <style>
          html, body { height: 100vh; width: 100%; margin: 0; padding: 0; overflow: hidden; background: #000; }
        </style>
      </head>
      <body>
        <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"></script>
        <script>
          setTimeout(function() {
            window.botpress.init({
              botId: "10ff0d92-a4bd-4ff6-9f76-490d391f294a",
              clientId: "df3d5528-ea8f-4d4b-8d94-6203fdf00f45",
              embedded: true,
              configuration: {
                version: "v1",
                composerPlaceholder: "Talk to NEO...",
                botName: "NEO",
                botAvatar: "https://files.bpcontent.cloud/2025/07/12/04/20250712045926-90TXO9CF.png",
                color: "#e879f9",
                variant: "soft",
                headerVariant: "glass",
                themeMode: "dark",
              }
            });
            setTimeout(function() {
              if (window.botpress && window.botpress.open) {
                window.botpress.open();
              }
            }, 400);
          }, 100);
        </script>
      </body>
    </html>`;

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        style={{ width: '100%', height: '100%', border: 'none' }}
        srcDoc={iframeSrcDoc}
        title="NEO Chatbot"
      />
    </div>
  );
}
