import Logo from "./assets/LogoBurger.webp";
import { GiSwordsEmblem } from "react-icons/gi";
import { GiRoundBottomFlask } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { GiDrinkMe } from "react-icons/gi";
import NewCart from "./NewCart.tsx";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";

import burger1 from "./assets/ImgBurgers/burger1.webp";
import burger2 from "./assets/ImgBurgers/burger2.webp";
import burger3 from "./assets/ImgBurgers/burger3.webp";
import burger4 from "./assets/ImgBurgers/burger4.webp";
import burger5 from "./assets/ImgBurgers/burger5.webp";
import burger6 from "./assets/ImgBurgers/burger6.webp";
import burger7 from "./assets/ImgBurgers/burger7.webp";
import burger8 from "./assets/ImgBurgers/burger8.webp";

import refri1 from "./assets/refrigerantes/cocacola.webp";
import refri2 from "./assets/refrigerantes/cocacola0.webp";
import refri3 from "./assets/refrigerantes/guarana.webp";
import refri4 from "./assets/refrigerantes/sprite.webp";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(newItem: string, price: number) {
    setCartItems((prevItems) => {
      // Verifica se o item já existe no carrinho
      const existingItemIndex = prevItems.findIndex(
        (item) => item.name === newItem
      );

      if (existingItemIndex !== -1) {
        // Se o item já existe, cria uma cópia da lista de itens e atualiza a quantidade do item
        const updatedItems = prevItems.map(
          (item, index) =>
            // Se for o item encontrado, aumenta a quantidade em 1
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item // Caso contrário, retorna o item como está
        );
        return updatedItems;
      } else {
        // Se o item não existir, adiciona um novo item ao carrinho
        const newCartItem: CartItem = {
          id: crypto.randomUUID(),
          name: newItem,
          price,
          quantity: 1,
        };
        // Adiciona o novo item ao carrinho
        return [...prevItems, newCartItem];
      }
    });
    toast.success("Pedido adicionado!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <div className="relative bg-[url('./assets/bg-restaurant.webp')] bg-cover bg-center w-full h-[400px]">
      <ToastContainer />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <img
          className="w-32 h-32 rounded-full shadow-amber-200 shadow-lg hover:scale-110 duration-300"
          src={Logo}
          alt="Logo-burger"
        />

        <h1 className="text-[#F0F0F0] text-xl md:text-2xl mt-4">
          Bem vindo ao{" "}
          <span className="text-[#FFD700] stroke-black font-bold">
            Level Up Burger!
          </span>{" "}
        </h1>

        <p className="text-xl text-yellow-400 italic font-thin opacity-90">
          Suba de nível no sabor!
        </p>

        <span className="text-sm text-gray-200 mt-1">
          Rua Valfenda 10, Ponta Grossa - PR
        </span>

        <div
          className="mt-2 inline-block px-4 py-2 rounded-full border-2 border-green-400 text-green-300 font-semibold text-sm shadow-md hover:shadow-green-400/80 transition duration-300 tracking-wide uppercase"
          id="horario"
        >
          <span>🕒 Seg a Dom – 18h às 22h</span>
        </div>
      </div>
      {/* Cardapio */}
      <h2 className="mt-5 mb-10 text-2xl border-b-2 border-yellow-500 w-100 mx-auto text-gray-800 flex items-center justify-center gap-2">
        Escolha seu Buff{" "}
        <span className="text-yellow-500 flex">
          <GiSwordsEmblem />
          <span className="text-violet-500">
            <GiRoundBottomFlask />
          </span>
        </span>
      </h2>
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 px-3 mx-auto max-w-7xl">
        {/* Burger 1 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger1}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Cheeseburguer “Power-Up”</p>
            <p className="text-yellow-700">
              Burger artesanal 180g – "Modo Hardcore", suculento com toque de
              páprica e pimenta. Molho XP Boost: blend de maionese caseira com
              alho, páprica, sriracha e limão.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 22,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart('Cheeseburguer "Power-Up"', 22.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 2 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger2}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Critical Strike Burger</p>
            <p className="text-yellow-700">
              O hambúrguer que causa dano massivo! Carne suculenta, queijo
              cheddar derretido e maionese de mostarda picante. Prepare-se para
              um ataque direto ao seu paladar!
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 23,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Critical Strike Burger", 23.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 3 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger3}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Mage Melt</p>
            <p className="text-yellow-700">
              Feitiçaria pura com burger 180g, cebola caramelizada, cheddar
              cremoso e molho secreto encantado.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 24,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Mage Melt", 24.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 4 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger4}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Buff Burg</p>
            <p className="text-yellow-700">
              +50 de força! Burger duplo, queijo prato, maionese de alho e molho
              dragão flamejante. Ideal para tanques!
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 27,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Buff Burg", 27.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 5 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger5}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold"> XP Bacon </p>
            <p className="text-yellow-700">
              Ganhe +100 de sabor com esse hambúrguer épico de bacon crocante,
              queijo prato e maionese da casa. Ideal pra upar seu humor na
              missão!
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 28,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("XP Bacon", 28.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 6 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger6}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Mystic Burger</p>
            <p className="text-yellow-700">
              +40 de inteligência! Receita secreta dos sábios: hambúrguer de
              grão de bico, tofu selado e molho verde místico. Buff perfeito
              para mentes brilhantes.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 20,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Mystic Burger", 20.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 7 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger7}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Final Boss</p>
            <p className="text-yellow-700">
              Encare o desafio! Triplo burger, cheddar, bacon, cebola crispy e
              maionese infernal. Requer coragem (e apetite)!
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 32,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Final Boss", 32.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Burger 8 */}
        <div className="flex gap-3 p-4 rounded-lg shadow-md bg-gray-200">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={burger8}
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold">Shadow Cheese</p>
              <p className="text-yellow-700">
                Cheddar dark, carne defumada e molho sombrio com alho negro. Pra
                quem curte um mistério no sabor.
              </p>
            </div>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 26,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart("Shadow Cheese", 26.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Bebidas */}
      <h2 className="mt-10 mb-10 text-2xl border-b-2 border-yellow-500 w-100 mx-auto text-gray-800 flex items-center justify-center gap-2">
        Poções & Elixires
        <span className="text-red-500 flex">
          <GiDrinkMe />
          <span className="text-blue-500">
            <GiRoundBottomFlask />
          </span>
        </span>
      </h2>
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 px-3 mx-auto max-w-7xl">
        {/* Bebida 1 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={refri1}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold text-stone-800">Coca Cola Lata“Power-Up”</p>
            <p className="text-yellow-700">
              Bebida clássica dos heróis. Um gole e sua barra de energia vai de
              0 a 100 em segundos. Efeito imediato: +20 em velocidade e +15 em
              carisma.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 22,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart('Coca Cola Lata "Power-Up"', 22.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bebida 2 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={refri2}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold text-stone-800">
              Coca Cola Zero "Stealth Mode"
            </p>
            <p className="text-yellow-700">
              Zero açúcar, máximo sabor. Ideal para players que querem manter o
              stealth sem abrir mão do refresh. Efeito: +10 em agilidade, -5 em
              culpa.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 22,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart('Coca Cola Zero "Stealth Mode"', 22.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bebida 3 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 bg-white p-2 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={refri3}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold text-stone-800">
              Guaraná "Força da Floresta"
            </p>
            <p className="text-yellow-700">
              Direto da Amazônia digital. Um boost natural de energia e sabor
              brasileiro. Efeito: +25 em stamina e +10 em vibe tropical.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 22,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart('Guaraná "Força da Floresta"', 22.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bebida 4 */}
        <div className="flex gap-3 rounded-lg bg-gray-200 shadow-md p-4">
          <img
            className="w-30 h-30 object-cover rounded-md hover:scale-110 duration-300 hover:rotate-2"
            src={refri4}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold text-stone-800">Sprite "Freeze Blast"</p>
            <p className="text-yellow-700">
              Refrescância elemental nível máximo. Gole certeiro pra congelar a
              sede. Efeito: +30 em frescor, chance de crítico contra calor.
            </p>
            <div className="flex gap-2 justify-between mt-2">
              <p className="font-bold text-green-500">R$ 22,90</p>
              <button
                className="bg-black px-5 rounded-sm hover:bg-yellow-700 cursor-pointer"
                onClick={() => addToCart('Sprite "Freeze Blast"', 22.9)}
              >
                <FaCartPlus className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Carrinho de compras */}
      <NewCart cartItems={cartItems} setCartItems={setCartItems} />

      {/* Rodapé */}
      <footer className="bg-stone-900 max-md:flex text-gray-400 max-h-screen p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around lg:items-end items-start">
          {/* Esquerda */}
          <div className="text-left space-y-2 mb-4 md:mb-0">
            <p className="text-orange-500 mb-5 text-xl font-semibold">
              Prazer em ver você aqui!
            </p>
            <p className="text-sm">
              Cardápio digital interativo para uma hamburgueria temática.
            </p>
            <p className="text-sm">ricardomadureira.dev@gmail.com</p>
            <p className="text-sm">
              Construído do zero por
              <span className="text-red-500 font-semibold">
                {" "}
                <a href="#" target="_blank">
                  Ricardo Madureira
                </a>
              </span>
            </p>
          </div>

          {/* Direita */}
          <div className="flex space-x-4 text-sm">
            <a href="#" target="_blank" className="hover:text-white">
              Email
            </a>
            <a href="#" target="_blank" className="hover:text-white">
              Portfolio
            </a>
            <a
              href="https://github.com/RicardoMadureiira"
              target="_blank"
              className="hover:text-white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ricardo-madureira-490022245/?trk=opento_sprofile_topcard"
              target="_blank"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
