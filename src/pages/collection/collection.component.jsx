import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import collectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ match }) => (
  <div className='collection-page'>
    <collectionItem />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
