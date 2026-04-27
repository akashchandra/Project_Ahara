"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

type MenuCartInput = {
  id: string;
  name: string;
  price: number;
  category: string;
};

type BowlCartInput = {
  base: string;
  protein: string;
  veggies: string[];
  price: number;
};

export type MenuCartItem = {
  lineId: string;
  type: "menu";
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
};

export type BowlCartItem = {
  lineId: string;
  type: "bowl";
  name: "Custom Bowl";
  base: string;
  protein: string;
  veggies: string[];
  price: number;
  quantity: number;
  customizationSummary: string;
};

export type CartItem = MenuCartItem | BowlCartItem;

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "replace"; items: CartItem[] }
  | { type: "add-menu"; item: MenuCartInput }
  | { type: "add-bowl"; item: BowlCartInput }
  | { type: "increment"; lineId: string }
  | { type: "decrement"; lineId: string }
  | { type: "remove"; lineId: string }
  | { type: "clear" };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  estimatedTax: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addMenuItem: (item: MenuCartInput) => void;
  addCustomBowl: (item: BowlCartInput) => void;
  incrementItem: (lineId: string) => void;
  decrementItem: (lineId: string) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "ahara-cart";
const TAX_RATE = 0.08875;

function createLineId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function bowlSummary(item: BowlCartInput) {
  const veggies = item.veggies.length > 0 ? item.veggies.join(", ") : "No veggies";
  return `Base: ${item.base} · Protein: ${item.protein} · Veggies: ${veggies}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "replace":
      return { items: action.items };
    case "add-menu": {
      const existing = state.items.find(
        (item): item is MenuCartItem => item.type === "menu" && item.itemId === action.item.id
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.lineId === existing.lineId ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      return {
        items: [
          ...state.items,
          {
            lineId: createLineId("menu"),
            type: "menu",
            itemId: action.item.id,
            name: action.item.name,
            price: action.item.price,
            quantity: 1,
            category: action.item.category
          }
        ]
      };
    }
    case "add-bowl": {
      const customizationSummary = bowlSummary(action.item);
      const existing = state.items.find(
        (item): item is BowlCartItem =>
          item.type === "bowl" &&
          item.customizationSummary === customizationSummary &&
          item.price === action.item.price
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.lineId === existing.lineId ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      return {
        items: [
          ...state.items,
          {
            lineId: createLineId("bowl"),
            type: "bowl",
            name: "Custom Bowl",
            base: action.item.base,
            protein: action.item.protein,
            veggies: action.item.veggies,
            price: action.item.price,
            quantity: 1,
            customizationSummary
          }
        ]
      };
    }
    case "increment":
      return {
        items: state.items.map((item) =>
          item.lineId === action.lineId ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case "decrement":
      return {
        items: state.items
          .map((item) =>
            item.lineId === action.lineId ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      };
    case "remove":
      return { items: state.items.filter((item) => item.lineId !== action.lineId) };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isHydrated, setIsHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        dispatch({ type: "replace", items: JSON.parse(stored) as CartItem[] });
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [isHydrated, state.items]);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const subtotal = useMemo(
    () => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );
  const estimatedTax = subtotal * TAX_RATE;
  const total = subtotal + estimatedTax;
  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const openCart = useCallback(() => {
    setCheckoutComplete(false);
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const addMenuItem = useCallback(
    (item: MenuCartInput) => {
      dispatch({ type: "add-menu", item });
      setCheckoutComplete(false);
      setToast(`${item.name} added to your order.`);
    },
    []
  );

  const addCustomBowl = useCallback((item: BowlCartInput) => {
    dispatch({ type: "add-bowl", item });
    setCheckoutComplete(false);
    setToast("Custom bowl added to your order.");
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "clear" });
    setCheckoutComplete(false);
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      itemCount,
      subtotal,
      estimatedTax,
      total,
      isCartOpen,
      openCart,
      closeCart,
      addMenuItem,
      addCustomBowl,
      incrementItem: (lineId) => dispatch({ type: "increment", lineId }),
      decrementItem: (lineId) => dispatch({ type: "decrement", lineId }),
      removeItem: (lineId) => dispatch({ type: "remove", lineId }),
      clearCart
    }),
    [
      addCustomBowl,
      addMenuItem,
      clearCart,
      closeCart,
      estimatedTax,
      isCartOpen,
      itemCount,
      openCart,
      state.items,
      subtotal,
      total
    ]
  );

  function finishOrder() {
    setCheckoutComplete(true);
    dispatch({ type: "clear" });
  }

  function startNewOrder() {
    setCheckoutComplete(false);
    setIsCartOpen(false);
  }

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer
        checkoutComplete={checkoutComplete}
        onFinishOrder={finishOrder}
        onStartNewOrder={startNewOrder}
      />
      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-white/80 bg-ink px-5 py-3 text-center text-sm font-semibold text-white shadow-depth">
          {toast}
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

function CartDrawer({
  checkoutComplete,
  onFinishOrder,
  onStartNewOrder
}: {
  checkoutComplete: boolean;
  onFinishOrder: () => void;
  onStartNewOrder: () => void;
}) {
  const {
    items,
    subtotal,
    estimatedTax,
    total,
    isCartOpen,
    closeCart,
    incrementItem,
    decrementItem,
    removeItem
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[rgba(23,23,20,0.26)] backdrop-blur-sm transition duration-300 ${
          isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        aria-label="Cart"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(100vw,28rem)] flex-col border-l border-white/80 bg-[rgba(255,250,244,0.96)] shadow-depth backdrop-blur-xl transition duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Your order</p>
            <h2 className="mt-1 text-2xl font-semibold text-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-xl leading-none text-ink transition hover:bg-white"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {checkoutComplete ? (
          <div className="flex flex-1 flex-col justify-center px-5 py-8">
            <div className="rounded-[28px] border border-white/80 bg-white/85 p-6 text-center shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">Order received.</p>
              <h3 className="mt-3 text-3xl font-semibold text-ink">Estimated pickup: 12-15 minutes.</h3>
              <p className="mt-4 text-sm text-muted">
                This is a demo checkout. Payment integration can be connected later.
              </p>
              <Button type="button" className="mt-6" size="lg" fullWidth onClick={onStartNewOrder}>
                Start New Order
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <div className="rounded-[28px] border border-white/80 bg-white/80 p-6 text-center shadow-soft">
                  <h3 className="text-2xl font-semibold text-ink">Your order is waiting.</h3>
                  <p className="mt-3 text-sm text-muted">
                    Add a dosa, biryani, chai, or custom bowl when you are ready.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <CartDrawerLink href="/menu" onClick={closeCart}>
                      Add More From Menu
                    </CartDrawerLink>
                    <CartDrawerLink href="/build-your-bowl" onClick={closeCart}>
                      Add Another Bowl
                    </CartDrawerLink>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.lineId}
                      className="rounded-[26px] border border-white/80 bg-white/85 p-4 shadow-soft"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                            {item.type === "menu" ? item.category : "Custom Bowl"}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-ink">{formatCurrency(item.price)}</p>
                      </div>
                      {item.type === "bowl" ? (
                        <div className="mt-3 space-y-1 text-sm text-muted">
                          <p>Base: {item.base}</p>
                          <p>Protein: {item.protein}</p>
                          <p>
                            Veggies: {item.veggies.length > 0 ? item.veggies.join(", ") : "No veggies"}
                          </p>
                        </div>
                      ) : null}
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-line bg-white">
                          <button
                            type="button"
                            onClick={() => decrementItem(item.lineId)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink transition hover:bg-[rgba(23,23,20,0.05)]"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => incrementItem(item.lineId)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink transition hover:bg-[rgba(23,23,20,0.05)]"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="rounded-full px-3 py-2 text-sm font-semibold text-muted transition hover:bg-[rgba(23,23,20,0.05)] hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-line bg-[rgba(255,250,244,0.92)] px-5 py-5">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Estimated tax</span>
                  <span>{formatCurrency(estimatedTax)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-line pt-3 text-lg font-semibold text-ink">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <CartDrawerLink href="/menu" onClick={closeCart}>
                    Add More From Menu
                  </CartDrawerLink>
                  <CartDrawerLink href="/build-your-bowl" onClick={closeCart}>
                    Add Another Bowl
                  </CartDrawerLink>
                </div>
                <Button
                  type="button"
                  size="lg"
                  fullWidth
                  disabled={items.length === 0}
                  onClick={onFinishOrder}
                >
                  Review & Finish Order
                </Button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function CartDrawerLink({
  href,
  onClick,
  children
}: {
  href: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white/80 px-4 py-2 text-center text-sm font-semibold text-ink transition hover:bg-white"
    >
      {children}
    </Link>
  );
}
