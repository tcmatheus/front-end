export default function ProdutoRank({ posicao }) {
  return (
    <div className="productRank__container">
      <div className="productRank__container--content">
        <div className="productRank__container--content-image">
          <img
            className="itemImage"
            src="https://www.picsum.photos/100"
            alt=""
          />
          {posicao === 1 && (
            <img
              src="../assets/icons/rankIcons/firstRank.svg"
              className="rankingImg"
              alt=""
            />
          )}
          {posicao === 2 && (
            <img
              src="../assets/icons/rankIcons/secondRank.svg"
              className="rankingImg"
              alt=""
            />
          )}
          {posicao === 3 && (
            <img
              src="../assets/icons/rankIcons/thirdRank.svg"
              className="rankingImg"
              alt=""
            />
          )}
        </div>
        <div className="productRank__container--info">
          <h2>Produto Número 1</h2>
          <p>Vendas na última semana: 100</p>
          <div className="productRank__container--info-pop">
            <p>Popularidade</p>
            <img src="../assets/icons/star.svg" alt="" />
            <img src="../assets/icons/star.svg" alt="" />
            <img src="../assets/icons/star.svg" alt="" />
            <img src="../assets/icons/star.svg" alt="" />
            <img src="../assets/icons/star.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
