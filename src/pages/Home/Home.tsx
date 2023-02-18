import React,{useEffect, useState} from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { people } from '@/data';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '@/redux/states/favorites';
import { addPeople } from '@/redux/states';
import { People } from '@mui/icons-material';
import store, { AppStore } from '@/redux/store';
import { PeopleTable } from './components';



export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const dispatch = useDispatch();
	useEffect(() =>{

		dispatch(addPeople(People))

	}, [])
	
	return <PeopleTable/>






	
};

export default Home;
