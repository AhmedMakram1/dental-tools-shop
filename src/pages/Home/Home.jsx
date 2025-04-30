import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (!error) setProducts(data);
    };
    fetchProducts();
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  return (
    <div className="container mt-4">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id} style={{padding: '0 8px'}}> {/* تقليل المساحة بين الكروت */}
            <div className="card border-0 shadow-sm h-100 position-relative rounded-4" style={{maxWidth: '100%', height: '320px'}}> {/* تحديد ارتفاع ثابت */}
              
              {/* زر المفضلة */}
              <button 
                className="position-absolute top-0 end-0 m-2 btn btn-sm p-0 bg-white rounded-circle"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  width: '25px', 
                  height: '25px',
                  zIndex: 1,
                  border: '1px solid #ddd'
                }}
              >
                <i className={`bi ${favorites.includes(product.id) ? 'bi-heart-fill text-danger' : 'bi-heart text-secondary'}`}></i>
              </button>

              {/* الصورة */}
              <img 
                src={product.image} 
                className="card-img-top p-2" 
                alt={product.name}
                style={{
                  height: '120px',
                  objectFit: 'contain',
                  width: 'auto',
                  margin: '0 auto'
                }}
              />
              
              {/* محتوى الكارد */}
              <div className="card-body text-center p-2">
                <h6 className="card-title mb-1" style={{fontSize: '14px'}}>{product.name}</h6>
                <p className="card-text small text-muted mb-1" style={{fontSize: '12px'}}>({product.quantity}pcs)</p>
                <strong className="d-block mb-2" style={{fontSize: '14px'}}>{product.price} EGP</strong>
                <button className="btn btn-outline-primary w-100 py-1" style={{fontSize: '12px'}}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;