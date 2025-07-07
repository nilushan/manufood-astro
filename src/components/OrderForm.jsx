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
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-base-content">This Week's Menu</h2>
        <div className="w-16 h-1 bg-error mx-auto mb-12"></div>
        
        <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-6">My Order</h3>
            
            {menuData.menu.categories.map((category) => (
              <div key={category.name} className="mb-8">
                <div className="divider divider-start">
                  <h4 className="text-lg font-bold text-primary">{category.name}</h4>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="card bg-base-200 shadow-sm">
                      <div className="card-body p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h5 className="font-semibold text-base-content">{item.name}</h5>
                            <span className="text-success font-bold">${item.price}</span>
                          </div>
                          <div className="join">
                            <button 
                              onClick={() => updateQuantity(item.name, item.price, Math.max(0, (orders[item.name]?.quantity || 0) - 1))}
                              className="btn btn-sm btn-outline join-item"
                            >
                              -
                            </button>
                            <input 
                              type="number" 
                              value={orders[item.name]?.quantity || 0}
                              onChange={(e) => updateQuantity(item.name, item.price, parseInt(e.target.value) || 0)}
                              className="input input-sm w-16 join-item text-center"
                              min="0"
                            />
                            <button 
                              onClick={() => updateQuantity(item.name, item.price, (orders[item.name]?.quantity || 0) + 1)}
                              className="btn btn-sm btn-outline join-item"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="card-actions justify-end">
              <div className="text-right">
                <div className="text-2xl font-bold text-success mb-4">
                  Total: ${totalAmount}
                </div>
                <button 
                  onClick={generateOrderText}
                  className="btn btn-primary btn-lg"
                >
                  Copy order, paste to message and send
                </button>
                <p className="text-sm text-base-content/70 mt-2">SMS Juliya: 0416019891</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
