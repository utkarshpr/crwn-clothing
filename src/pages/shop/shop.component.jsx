import React from 'react';
import Shop_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview.components/collection-preview';
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
