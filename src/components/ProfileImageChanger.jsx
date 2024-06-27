import React, { useState } from 'react';

function ProfileImageChanger() {
    const [image, setImage] = useState(null);  // Estado para armazenar a imagem

    const handleImageChange = (e) => {
        const file = e.target.files[0];  // Captura o arquivo de imagem selecionado
        const reader = new FileReader();
        
        reader.onload = function(upload) {
            setImage(upload.target.result);  // Atualiza o estado da imagem com a imagem carregada
        };

        reader.readAsDataURL(file);  // Converte a imagem para base64 para visualização
    };

    const handleSubmit = () => {
        // Aqui você pode adicionar a lógica para enviar a imagem ao servidor
        alert("Imagem carregada com sucesso!");
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <button onClick={handleSubmit}>Carregar Imagem</button>
            {image && <img src={image} alt="Preview" />}
        </div>
    );
}

export default ProfileImageChanger;
