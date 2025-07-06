import { useState } from 'react';
import menuData from '../content/menu.json';

export default function OrderForm() {
  const [orders, setOrders] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const updateQuantity = (itemName, price, quantity) => {
    const newOrders = { ...orders };
    if (quantity === 0) {
      delete newOrders[itemName];
    } else {
      newOrders[itemName] = { quantity, price };
    }
    setOrders(newOrders);
    
    // Calculate total
    const total = Object.values(newOrders).reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalAmount(total);
  };

  const generateOrderText = () => {
    if (Object.keys(orders).length === 0) {
      alert('Please add items to your order first!');
      return;
    }

    let orderText = 'My Order:\n\n';
    let total = 0;

    menuData.menu.categories.forEach(category => {
      const categoryItems = category.items.filter(item => orders[item.name]);
      if (categoryItems.length > 0) {
        orderText += `${category.name}:\n`;
        categoryItems.forEach(item => {
          const order = orders[item.name];
          const itemTotal = order.price * order.quantity;
          orderText += `• ${item.name} - $${item.price} x ${order.quantity} = $${itemTotal}\n`;
          total += itemTotal;
        });
        orderText += '\n';
      }
    });

    orderText += `Total: $${total}\n\n`;
    orderText += 'Please confirm and reserve for pickup on Saturday.';

    // Copy to clipboard
    navigator.clipboard.writeText(orderText).then(() => {
      alert('Order copied to clipboard! You can now paste it in SMS to 0416019891');
    }).catch(() => {
      alert('Order text:\n\n' + orderText);
    });
  };

  return (
    <section className="order-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">This Week's Menu</h2>
        
        <div className="order-card">
          <h3 className="order-title">My Order</h3>
          
          {menuData.menu.categories.map((category) => (
            <div key={category.name} className="category-section">
              <h4 className="category-title">{category.name}</h4>
              
              <div className="items-list">
                {category.items.map((item) => (
                  <div key={item.name} className="item-row">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">${item.price}</span>
                    </div>
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.name, item.price, Math.max(0, (orders[item.name]?.quantity || 0) - 1))}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={orders[item.name]?.quantity || 0}
                        onChange={(e) => updateQuantity(item.name, item.price, parseInt(e.target.value) || 0)}
                        className="quantity-input"
                        min="0"
                      />
                      <button 
                        onClick={() => updateQuantity(item.name, item.price, (orders[item.name]?.quantity || 0) + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="order-footer">
            <div className="total-section">
              <span className="total-label">Total: </span>
              <span className="total-amount">${totalAmount}</span>
            </div>
            <button 
              onClick={generateOrderText}
              className="order-btn"
            >
              Copy order, paste to message and send
            </button>
            <p className="order-note">SMS Juliya: 0416019891</p>
          </div>
        </div>
      </div>
    </section>
  );
}
