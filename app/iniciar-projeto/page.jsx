export default function IniciarProjeto() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Iniciar Projeto</h1>
      <form>
        <label>
          Nome do Projeto:
          <input type="text" placeholder="Ex: Reforma de cozinha" />
        </label>
        <br />
        <label>
          Descrição:
          <textarea placeholder="Detalhe seu projeto aqui"></textarea>
        </label>
        <br />
        <label>
          Materiais Necessários:
          <textarea placeholder="Ex: 10 sacos de cimento"></textarea>
        </label>
        <br />
        <button type="submit">Enviar Projeto</button>
      </form>
    </div>
  );
}
