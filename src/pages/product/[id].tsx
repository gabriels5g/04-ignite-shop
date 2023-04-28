import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
          commodi quibusdam aspernatur sed temporibus iusto! Quod beatae
          pariatur nostrum eum dolorem saepe vero, dolor ipsa velit, repudiandae
          quisquam tempora?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
