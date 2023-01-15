import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import {
  servicesDetails,
  img_manutencao,
} from '../utils/object.services.details';

function ServicesDetails({ match }) {
  return (
    <div>
      <HeaderServices tamanho={ 40 } />
    </div>
  )
}

export default ServicesDetails