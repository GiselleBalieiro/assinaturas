import React, { useRef } from 'react';

function SignatureDisplay({ data }) {
  const ref = useRef(null);

  const baixarHtml = () => {
    const conteudo = ref.current.innerHTML;
    const htmlCompleto = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Assinatura</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <style>
          body { background: #f5f5f5; font-family: Arial, sans-serif; }
          .assinatura-container {
            margin: 40px auto;
            max-width: 500px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 30px;  
          }
        </style>
      </head>
      <body>
        <div class="assinatura-container">
          ${conteudo}
        </div>
      </body>
      </html>
    `;
    const blob = new Blob([htmlCompleto], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "assinatura.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ marginTop: 20, fontFamily: 'Arial, sans-serif' }}>
      <div
        ref={ref}
        style={{
          border: '1px solid #ccc',
          borderRadius: 10,
          padding: 20,
          maxWidth: 500,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          background: '#fff'
        }}
      >
        <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: 60, verticalAlign: 'top' }}>
                <img
                  src={data.imagem_path}
                  alt="Avatar"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#eee',
                    display: 'inline-block',
                    objectFit: 'cover'
                  }}
                />
              </td>
              <td style={{ paddingLeft: 15 }}>
                <strong style={{ fontSize: 16, color: '#003366' }}>{data.nome}</strong><br />
                <span style={{ color: '#555' }}>{data.cargo}</span><br /><br />

                <div style={{ fontSize: 14, lineHeight: '1.6' }}>
                  <i className="fa-solid fa-envelope" style={{ color: '#005baa', marginRight: 6 }}></i>
                  <a href={`mailto:${data.email}`} style={{ color: '#005baa', textDecoration: 'none' }}>{data.email}</a><br />

                  <i className="fa-solid fa-phone" style={{ color: '#009688', marginRight: 6 }}></i>
                  {data.telefone}<br />

                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: 6 }}></i>
                  {data.whatsapp}<br />

                  <i className="fa-solid fa-globe" style={{ color: '#ff9800', marginRight: 6 }}></i>
                  <a href="https://era.com.br/" style={{ color: '#005baa', textDecoration: 'none' }}>era.com.br</a>
                </div>

                <hr style={{ margin: '10px 0', borderColor: '#ddd' }} />

                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>

                      <td style={{ width: 1, verticalAlign: 'middle' }}>
                      <div
                          aria-hidden="true"
                          style={{
                            width: 40,
                            height: 40,
                            marginRight: 10,
                            backgroundSize: '100% 100%',
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 117 66'><g><path d='M 0 66 L 0 0 L 117 0 L 117 66 Z' fill='transparent'></path><path d='M 0 62.309 L 0 3.689 C 0 1.652 1.647 0 3.679 0 L 113.202 0 C 116.985 0 118.306 5.037 115.012 6.904 L 64.957 36.424 C 61.663 38.29 62.984 43.327 66.767 43.327 L 113.321 43.327 C 115.353 43.327 117 44.979 117 47.016 L 117 62.311 C 117 64.348 115.353 66 113.321 66 L 3.679 66 C 1.647 66 0 64.348 0 62.311 Z M 40.887 41.103 L 60.66 29.503 C 63.894 27.599 62.547 22.63 58.796 22.63 L 39.023 22.63 C 36.992 22.63 35.345 24.282 35.345 26.319 L 35.345 37.92 C 35.345 40.772 38.434 42.546 40.887 41.102 Z' fill='rgb(207,255,0)'></path></g></svg>")`,
                            imageRendering: 'pixelated',
                            flexShrink: 0,
                            opacity: 1,
                            display: 'inline-block',
                            verticalAlign: 'middle'
                          }}
                        />
                      </td>

                      <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                        <a href="https://www.linkedin.com/company/eraconecta/" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#0e76a8' }}>
                          <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://www.instagram.com/era.com.br" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#e1306c' }}>
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://www.youtube.com/@eraumavezpodcast" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000' }}>
                          <i className="fab fa-youtube fa-lg"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={baixarHtml}
        style={{
          margin: '40px auto',
          backgroundColor: '#005baa',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Baixar Assinatura em HTML
      </button>
    </div>
  );
}

export default SignatureDisplay;