import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return <div>
<DataGrid 
			disableColumnSelector
			disableSelectionOnClick
			autoHeight columns={[]} rows={[]}
			
/>





	</div>;
};

export default Home;
