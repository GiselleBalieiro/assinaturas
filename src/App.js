import React, { useState } from 'react';
import SignatureDisplay from './components/SignatureDisplay';
import './styles/index.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    email: '',
    telefone: '',
    whatsapp: '',
    site: '',
    imagem_path: '',
  });

  function formatPhone(value) {
    const cleaned = value.replace(/\D/g, '').slice(0, 11); 
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefone' || name === 'whatsapp') {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  return (
    <div className="app-container">
      <h1>Gerar Assinatura</h1>
      <form className="signature-form">
        <input
          className="form-input"
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={formData.cargo}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email Profissional"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="tel"
          name="telefone"
          placeholder="Telefone Atendimento"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="file"
          name="imagem_path"
          accept="image/*"
          onChange={e => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData({ ...formData, imagem_path: reader.result });
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </form>
      <SignatureDisplay data={formData} />
    </div>
  );
}

export default App;