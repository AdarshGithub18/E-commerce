import { Pagination, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';

const PaginationComp = () => {
  const { handlePage, countPage } = useContext(ProductFetchingContext);
  return (
    <Stack spacing={3}>
      <Pagination count={10} page={countPage} onChange={handlePage} />
    </Stack>
  );
};

export default PaginationComp;
