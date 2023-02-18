import { people } from '@/data';
import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface PeopleTableInterface{}

const PeopleTable:React.FC<PeopleTableInterface> = () => {
	
	const [selectedPeople,setSelectedPeople] = useState<Person[]>([])
	const pageSize=5;
	const dispatch = useDispatch();
const statePeople = useSelector((store:AppStore)=>store.people

 )
const findPerson=(person:Person) => !!selectedPeople.find( p => p.id === person.id) 
const filterPerson=(person:Person) => selectedPeople.filter(p => p.id != person.id) 

	
	


	const handleChange= (person:Person) => {

		const filteredPeople = findPerson(person) ? filterPerson(person): [...selectedPeople, person]
		dispatch(addFavorite(filteredPeople))
		
		setSelectedPeople(filteredPeople);


	}
	const colums=[
		{
			field:'actions',
			type:'actions',	
			sortable:'false',		
			hederName: '',
			
			minWidth:50,
			renderCell:(params: GridRenderCellParams)=> <>
			{ <Checkbox size="small" 
			checked={findPerson(params.row)  } 
			onChange={()=> handleChange(params.row)}/>


			}
			
			</>
			

		},

		{
			field:'name',
			
			hederName: 'Name',
			flex:1,
			minWidth:150,
			renderCell:(params: GridRenderCellParams)=>
			<>{params.value }</>

		},
		{
			field:'category',
			
			hederName: 'Categories',
			flex:1,
			minWidth:150,
			renderCell:(params: GridRenderCellParams)=>
			<>{params.value }</>

		},
		{
			field:'company',
			
			hederName: 'Company',
			flex:1,
			minWidth:150,
			renderCell:(params: GridRenderCellParams)=>
			<>{params.value }</>

		}
	]

	
	
	return <DataGrid 
	rows={people}
	columns={colums}
	disableColumnSelector
	disableSelectionOnClick
	autoHeight 
	pageSize={pageSize}
	rowsPerPageOptions={[pageSize]}
	getRowId={(row:any)=> row.id}

/>;
};

export default PeopleTable;
