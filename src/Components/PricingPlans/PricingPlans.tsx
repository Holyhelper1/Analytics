export const PricingPlans = () => {
  return (
    <div className="pricing-plans" id="pricing-plans">
      <div className="wrap wrap-padding">
        <div className="pricing-plans_description">
          <h3 className="pricing-plans_title">Pricing Plans</h3>
          <p className="pricing-plans_text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </p>
        </div>
        <div className="pricing-plans_rates">
          <div className="rates-item">
            <h4 className="rates-item_title">Starter</h4>
            <p className="rates-item_text-block">up to 3 users</p>
            <p className="rates-item_price">
              <span className="rates-item_currency">$</span>29
            </p>
            <p className="rates-item_subtitle">per month</p>
            <button className="rates-item_order-btn">Order</button>
          </div>

          <div className="rates-item rates-item--pink">
            <h4 className="rates-item_title">Standard</h4>
            <p className="rates-item_text-block">up to 20 users</p>
            <p className="rates-item_price">
              <span className="rates-item_currency">$</span>99
            </p>
            <p className="rates-item_subtitle">per month</p>
            <button className="rates-item_order-btn">Order</button>
          </div>

          <div className="rates-item">
            <h4 className="rates-item_title">Premium</h4>
            <p className="rates-item_text-block">up to 200 users</p>
            <p className="rates-item_price">
              <span className="rates-item_currency">$</span>299
            </p>
            <p className="rates-item_subtitle">per month</p>
            <button className="rates-item_order-btn">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
