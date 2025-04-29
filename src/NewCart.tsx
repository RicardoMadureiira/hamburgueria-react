import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type NewCartProps = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default function NewCart({ cartItems, setCartItems }: NewCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // muda o estado do carrinho de aberto para fechado e vice-versa
  function ToggleCart() {
    setIsOpen(!isOpen);
  }

  // remove o item do carrinho
  function removeFromCart(id: string) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // calcula o total do carrinho
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // adiciona o item ao carrinho
  function increaseQuantity(id: string) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // remove o item do carrinho
  function decreaseQuantity(id: string) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <section>
      {isOpen && (
        <>
          {/* bg escurecendo o fundo */}
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />

          {/* Carrinho de pedidos*/}
          <div
            className={`bg-blue-50 w-[25%] max-md:w-[65%] h-screen fixed right-0 top-0 p-4 shadow-lg rounded-l-lg flex flex-col z-30 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* titulo */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-yellow-700">
              <h1 className="text-2xl font-bold">Seu Pedido</h1>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar carrinho"
                className="text-3xl text-gray-700 hover:text-red-600 transition-colors"
              >
                <IoClose />
              </button>
            </div>

            {/* Lista de itens */}
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {cartItems.map(({ id, name, price, quantity }) => (
                  <li
                    key={id}
                    className="rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 text-sm">
                        {name}
                      </span>
                      <span className="font-bold text-green-600 text-sm">
                        R$ {price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button className="w-7 h-7 bg-gray-100 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                          <FaMinus
                            size={12}
                            onClick={() => decreaseQuantity(id)}
                          />
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center bg-white border-t border-b border-gray-200 font-semibold text-sm">
                          {quantity}
                        </span>
                        <button className="w-7 h-7 bg-gray-100 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                          <FaPlus
                            size={12}
                            onClick={() => increaseQuantity(id)}
                          />
                        </button>
                      </div>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all"
                        onClick={() => removeFromCart(id)}
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão para finalizar a compra */}
            <div className="border-t-2 border-yellow-700 pt-4">
              <h3 className="text-black text-xl font-bold mb-2">
                Total:{" "}
                <span className="text-green-500 font-normal">
                  R$ {total.toFixed(2)}
                </span>
              </h3>
              <button
                onClick={() => {
                  setShowThankYouModal(true);
                  setCartItems([]); // limpar o carrinho
                  setIsOpen(false); // fechar o carrinho
                }}
                className="w-full bg-red-500 font-semibold p-3 rounded-md text-center text-white cursor-pointer hover:bg-yellow-700 transition-colors"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}

      {/* Botão do carrinho */}
      <button
        onClick={ToggleCart}
        className="fixed group rounded-full bottom-2 right-4 bg-black text-white p-3 z-10 shadow-lg hover:bg-yellow-700 hover:text-white transition duration-300"
      >
        <FaShoppingCart className="text-2xl max-md:text-xl" />
        <span className="absolute -top-2 bg-red-500 group-hover:bg-yellow-700 transition duration-300 p-1 rounded-full flex justify-center items-center w-5 h-5 right-0">
          {cartItems.length}
        </span>
      </button>

      {/* Agredecimento após finalizar o pedido */}
      {showThankYouModal && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowThankYouModal(false)}
          />

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center space-y-4 animate-fadeIn">
              <h2 className="text-2xl font-bold text-green-600">
                Pedido Confirmado!
              </h2>
              <p className="text-gray-700">
                Obrigado por upar com a{" "}
                <span className="text-yellow-700 font-bold">
                  Level Up Burger!🍔
                </span>
                <p className="text-xs text-gray-400">
                  (Esta compra é apenas uma demonstração.)
                </p>
              </p>
              <button
                onClick={() => setShowThankYouModal(false)}
                className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
